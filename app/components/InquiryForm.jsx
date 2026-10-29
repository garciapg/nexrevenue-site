"use client";

import { useState } from "react";

const PRODUCTS = ["Inbound calls", "Live transfers", "Exclusive leads"];

export default function InquiryForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    data.products = fd.getAll("products");
    if (data.products.length === 0) {
      setError("Pick at least one: calls, transfers or leads.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(out.error || "Something went wrong. Please try again.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  if (status === "done") {
    return (
      <div className="form-card thanks" role="status">
        <h3>Got it. We'll be in touch.</h3>
        <p>A real person on our team will reply within one business day to set up your test.</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate={false}>
      <div className="fields">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="company">Agency or company</label>
          <input id="company" name="company" required autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="role">I am a</label>
          <select id="role" name="role" required defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Agency owner</option>
            <option>Sales leader</option>
            <option>Call platform or network</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="agents">Licensed agents</label>
          <select id="agents" name="agents" required defaultValue="">
            <option value="" disabled>How many?</option>
            <option>1 to 5</option>
            <option>6 to 20</option>
            <option>21 to 50</option>
            <option>50+</option>
          </select>
        </div>
        <fieldset className="field full">
          <legend>Interested in</legend>
          <div className="checks">
            {PRODUCTS.map((p) => (
              <label key={p}>
                <input type="checkbox" name="products" value={p} /> {p}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="field">
          <label htmlFor="states">States you write in</label>
          <input id="states" name="states" placeholder="e.g. FL, TX, GA" />
        </div>
        <div className="field">
          <label htmlFor="volume">Weekly volume wanted</label>
          <input id="volume" name="volume" placeholder="e.g. 50 calls a week" />
        </div>
        <div className="field full">
          <label htmlFor="notes">Anything else?</label>
          <textarea id="notes" name="notes" placeholder="Hours, criteria, how you work leads today..." />
        </div>
        {/* Honeypot: hidden from people, bots fill it */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Request a test batch"}
      </button>
      <p className="form-consent">
        By submitting, you agree that NexRevenue may contact you by phone, email or text about our services at the
        number and email you gave. Consent is not a condition of purchase. See our <a href="/privacy">Privacy Policy</a> and{" "}
        <a href="/terms">Terms</a>.
      </p>
    </form>
  );
}
