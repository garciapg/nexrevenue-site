-- NOT APPLIED YET. Run only with Pablo's OK, in the Supabase project chosen for B2B data.
create table if not exists public.b2b_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text not null,
  email text not null,
  phone text not null,
  role text not null,
  agents text not null,
  products text[] not null default '{}',
  states text,
  volume text,
  notes text,
  source_url text,
  user_agent text
);
-- Only the server (service role) writes; no public access.
alter table public.b2b_inquiries enable row level security;
