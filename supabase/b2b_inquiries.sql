-- Run once in Supabase -> SQL Editor for project qijzpkxngqkgaqiqimfb.
-- Creates a table the website can INSERT into but never read. Nothing else in the project is touched.
create table if not exists public.b2b_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  company text not null check (char_length(company) between 1 and 160),
  email text not null check (char_length(email) between 3 and 200),
  phone text not null check (char_length(phone) between 3 and 40),
  role text not null check (char_length(role) <= 60),
  agents text not null check (char_length(agents) <= 20),
  products text[] not null default '{}',
  states text check (char_length(states) <= 200),
  volume text check (char_length(volume) <= 120),
  notes text check (char_length(notes) <= 2000),
  source_url text,
  user_agent text
);

alter table public.b2b_inquiries enable row level security;

-- The public (publishable) key may only add rows. It cannot read, change or delete anything.
revoke all on public.b2b_inquiries from anon, authenticated;
grant insert on public.b2b_inquiries to anon;
drop policy if exists "website can add inquiries" on public.b2b_inquiries;
create policy "website can add inquiries" on public.b2b_inquiries
  for insert to anon with check (true);
