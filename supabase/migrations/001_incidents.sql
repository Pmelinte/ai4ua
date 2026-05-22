-- AI4UA: Create incidents table
-- Run this in Supabase SQL Editor

create table if not exists public.incidents (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  company text not null,
  incident_type text not null,
  incident_category text not null,
  title text not null,
  description text not null,
  date_of_incident date not null,
  evidence_links text,
  contact_email text,
  status text default 'pending' check (status in ('pending', 'reviewed', 'rejected')) not null
);

-- Enable Row Level Security
alter table public.incidents enable row level security;

-- Allow anyone to insert (submit an incident)
create policy "Anyone can submit incidents"
  on public.incidents
  for insert
  with check (true);

-- Only authenticated users (admins) can read all incidents
create policy "Authenticated users can read incidents"
  on public.incidents
  for select
  using (auth.role() = 'authenticated');

-- Index for company lookups
create index if not exists incidents_company_idx on public.incidents (company);
create index if not exists incidents_status_idx on public.incidents (status);
create index if not exists incidents_category_idx on public.incidents (incident_category);
