# nexrevenue-site

Company site for NexRevenue (nexrevenue.com): exclusive final expense inbound calls, live transfers and leads.

- Next.js (App Router), plain CSS, no UI framework.
- Form posts to `/api/inquiry`, which saves to Supabase `b2b_inquiries` and pings Slack when env vars are set (see `.env.example`).

## Run locally
    npm install
    npm run dev

## Deploys
Hosted on Vercel, team amaze5. Same rule as the funnel: builds are previews until someone explicitly promotes to production.
Do not change DNS (GoDaddy) or deploy to production without Pablo's OK.
