/*
# Create core tables for VYRA Fitness

1. New Tables
- `enquiries`: Stores contact form submissions from the public website.
  - id (uuid, PK), name, email, phone, subject, message, source, status, created_at, updated_at
- `trial_bookings`: Stores free trial session bookings.
  - id (uuid, PK), full_name, phone, email, preferred_date, preferred_time, fitness_goal, status, created_at, updated_at
- `class_bookings`: Stores class bookings by members.
  - id (uuid, PK), class_name, class_day, class_time, member_name, member_email, member_phone, status, created_at

2. Security
- Enable RLS on all tables.
- Allow anon + authenticated INSERT on enquiries and trial_bookings (public forms).
- Restrict SELECT/UPDATE/DELETE to authenticated (admin) only.
- Allow anon + authenticated INSERT on class_bookings (public booking).
- Restrict SELECT/UPDATE/DELETE to authenticated (admin) only.

3. Notes
- These tables support the public-facing forms (contact, trial booking, class booking).
- Admin dashboard will read these via authenticated sessions.
- No user_id columns since these are public submissions, not user-owned data.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  source text DEFAULT 'contact_form',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON enquiries;
CREATE POLICY "auth_select_enquiries" ON enquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_enquiries" ON enquiries;
CREATE POLICY "auth_update_enquiries" ON enquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_enquiries" ON enquiries;
CREATE POLICY "auth_delete_enquiries" ON enquiries FOR DELETE
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS trial_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  fitness_goal text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE trial_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_trials" ON trial_bookings;
CREATE POLICY "anon_insert_trials" ON trial_bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_trials" ON trial_bookings;
CREATE POLICY "auth_select_trials" ON trial_bookings FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_trials" ON trial_bookings;
CREATE POLICY "auth_update_trials" ON trial_bookings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_trials" ON trial_bookings;
CREATE POLICY "auth_delete_trials" ON trial_bookings FOR DELETE
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS class_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_name text NOT NULL,
  class_day text NOT NULL,
  class_time text NOT NULL,
  member_name text NOT NULL,
  member_email text NOT NULL,
  member_phone text NOT NULL,
  status text NOT NULL DEFAULT 'confirmed',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE class_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_class_bookings" ON class_bookings;
CREATE POLICY "anon_insert_class_bookings" ON class_bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_class_bookings" ON class_bookings;
CREATE POLICY "auth_select_class_bookings" ON class_bookings FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_class_bookings" ON class_bookings;
CREATE POLICY "auth_update_class_bookings" ON class_bookings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_class_bookings" ON class_bookings;
CREATE POLICY "auth_delete_class_bookings" ON class_bookings FOR DELETE
  TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_trial_bookings_status ON trial_bookings(status);
CREATE INDEX IF NOT EXISTS idx_trial_bookings_created_at ON trial_bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_class_bookings_created_at ON class_bookings(created_at DESC);
