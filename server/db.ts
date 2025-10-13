// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";
// import { createClient } from '@supabase/supabase-js';

// const connectionString = process.env.DATABASE_URL;

// if (!connectionString) {
//   throw new Error("DATABASE_URL environment variable is required");
// }

// if (!process.env.SUPABASE_URL) {
//   throw new Error("SUPABASE_URL environment variable is required");
// }

// if (!process.env.SUPABASE_ANON_KEY) {
//   throw new Error("SUPABASE_ANON_KEY environment variable is required");
// }

// // Disable prefetch as it is not supported for "Transaction" pool mode
// const client = postgres(connectionString, { prepare: false });
// export const db = drizzle(client);

// // Create Supabase client for auth
// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_ANON_KEY, // Use anon key for client-side auth
//   {
//     auth: {
//       autoRefreshToken: true,
//       persistSession: true,
//       detectSessionInUrl: true
//     }
//   }
// );

// export const createSupabaseDatabase = () => db;

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { createClient } from '@supabase/supabase-js';

const connectionString = process.env.DATABASE_URL!;



// Use these specific settings from the GitHub issue
// const client = postgres(connectionString, { 
//   prepare: false,              // Critical for Supabase
//   ssl: { rejectUnauthorized: false }, // Relaxed SSL
//   max: 1,                      // Single connection for now
//   idle_timeout: 0,             // Disable idle timeout
//   max_lifetime: 0              // Disable connection lifetime
// });

const client = postgres(connectionString, { 
  prepare: false,
  ssl: 'prefer',  // Instead of 'require'
  transform: undefined,
  types: {}
});

export const db = drizzle(client);

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required");
}

if (!process.env.SUPABASE_URL) {
  throw new Error("SUPABASE_URL environment variable is required");
}

if (!process.env.SUPABASE_ANON_KEY) {
  throw new Error("SUPABASE_ANON_KEY environment variable is required");
}

if (!process.env.SUPABASE_SERVICE_KEY) {
  throw new Error("SUPABASE_SERVICE_KEY environment variable is required");
}

// Disable prefetch as it is not supported for "Transaction" pool mode

// Create Supabase client for client-side auth (frontend operations)
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY, // Use anon key for client-side auth
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

// Create Supabase admin client for server-side operations (backend token validation)
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY, // Use service key for backend operations
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

export const createSupabaseDatabase = () => db;