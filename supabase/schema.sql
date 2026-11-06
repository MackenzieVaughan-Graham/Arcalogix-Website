-- Run once in the SQL Editor of the EXISTING Supabase project used by OpenArcade.
-- Creates a separate Arcalogix enquiries table; does not modify architect_signups.
-- This is logical table separation, not isolation between projects or secret keys.
create extension if not exists pgcrypto;

create table if not exists public.enterprise_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(full_name) between 2 and 120),
  work_email text not null check (char_length(work_email) <= 254),
  company text not null check (char_length(company) between 2 and 160),
  role text,
  portfolio_size text,
  interest text not null,
  message text,
  consent boolean not null default false check (consent = true),
  source text not null default 'arcalogix-website',
  status text not null default 'new' check (status in ('new','contacted','qualified','proposal','closed'))
);

create index if not exists enterprise_inquiries_created_at_idx
  on public.enterprise_inquiries (created_at desc);
create index if not exists enterprise_inquiries_status_idx
  on public.enterprise_inquiries (status);

alter table public.enterprise_inquiries enable row level security;
-- No anonymous read/write policy. Only the server-side Supabase secret key
-- can write through the /api/contact route. Do not expose your secret to browsers.
