-- Chemistry LMS Database Schema
-- Run this in Supabase SQL editor

-- subjects (Chemistry now; add Physics/Math later)
create table if not exists subjects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null
);

-- videos cached from YouTube searches (optional cache)
create table if not exists videos (
  id text primary key,                -- YouTube videoId
  title text not null,
  channel text,
  thumbnail text,
  description text,
  subject_id uuid references subjects(id),
  created_at timestamptz default now()
);

-- resource metadata (pdfs, books, notes, etc.)
create table if not exists resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  file_path text not null,            -- Supabase Storage path
  subject_id uuid references subjects(id),
  created_by uuid references auth.users(id),
  visibility text default 'public',   -- public | private
  created_at timestamptz default now()
);

-- personal notes (markdown)
create table if not exists notes (
  id uuid primary key default gen_random_uuid(),
  owner uuid references auth.users(id) not null,
  title text not null,
  body text not null,
  subject_id uuid references subjects(id),
  is_public boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index on notes(owner);
create index on notes(is_public);

-- simple community posts/comments
create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  author uuid references auth.users(id) not null,
  title text not null,
  body text not null,
  created_at timestamptz default now()
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references posts(id) on delete cascade,
  author uuid references auth.users(id) not null,
  body text not null,
  created_at timestamptz default now()
);

-- seed subject
insert into subjects (slug, name)
values ('chemistry','Chemistry')
on conflict (slug) do nothing;

-- Future: Quiz tables (ready when you need them)
-- create table quizzes (
--   id uuid primary key default gen_random_uuid(),
--   title text not null,
--   duration_seconds int not null,
--   subject_id uuid references subjects(id),
--   created_by uuid references auth.users(id),
--   created_at timestamptz default now()
-- );

-- create table questions (
--   id uuid primary key default gen_random_uuid(),
--   quiz_id uuid references quizzes(id) on delete cascade,
--   body text not null,
--   choices jsonb not null,           -- ["A","B","C","D"]
--   correct_index int not null,
--   explanation text
-- );

-- create table attempts (
--   id uuid primary key default gen_random_uuid(),
--   quiz_id uuid references quizzes(id),
--   user_id uuid references auth.users(id),
--   started_at timestamptz default now(),
--   finished_at timestamptz
-- );

-- create table answers (
--   id uuid primary key default gen_random_uuid(),
--   attempt_id uuid references attempts(id) on delete cascade,
--   question_id uuid references questions(id),
--   chosen_index int,
--   is_correct boolean
-- );
