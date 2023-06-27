CREATE TABLE IF NOT EXISTS
   users (
      id SERIAL PRIMARY KEY,
      password TEXT NOT NULL,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
      location TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
   );