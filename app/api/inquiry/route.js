// Receives the B2B "Request a test batch" form.
// Saves to Supabase (table b2b_inquiries) and pings Slack, when those env vars are set in Vercel.
// Without them it still accepts the submit and logs it, so previews work before setup.

const REQUIRED = ["name", "company", "email", "phone", "role", "agents"];
const clean = (v, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled = bot. Pretend success.
  if (clean(body.website)) return Response.json({ ok: true });

  const row = {
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    email: clean(body.email, 200).toLowerCase(),
    phone: clean(body.phone, 40),
    role: clean(body.role, 60),
    agents: clean(body.agents, 20),
    products: Array.isArray(body.products) ? body.products.map((p) => clean(p, 40)).slice(0, 5) : [],
    states: clean(body.states, 200),
    volume: clean(body.volume, 120),
    notes: clean(body.notes, 2000),
    source_url: clean(request.headers.get("referer") || "", 500),
    user_agent: clean(request.headers.get("user-agent") || "", 400),
  };

  const missing = REQUIRED.filter((k) => !row[k]);
  if (missing.length || row.products.length === 0) {
    return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SLACK_WEBHOOK_URL } = process.env;

  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/b2b_inquiries`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });
    if (!res.ok) {
      console.error("Supabase insert failed", res.status, await res.text());
      return Response.json({ error: "We couldn't save that. Please email us instead." }, { status: 502 });
    }
  } else {
    console.log("[inquiry] Supabase not configured; inquiry received:", JSON.stringify(row));
  }

  if (SLACK_WEBHOOK_URL) {
    const text = `New NexRevenue inquiry: ${row.name} (${row.company}), ${row.role}, ${row.agents} agents, wants ${row.products.join(", ")}. ${row.email} / ${row.phone}`;
    await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    }).catch((e) => console.error("Slack ping failed", e));
  }

  return Response.json({ ok: true });
}
