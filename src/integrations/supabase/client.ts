
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jynmaefigkzuraciccvj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bm1hZWZpZ2t6dXJhY2ljY3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczNDY0OTYsImV4cCI6MjA2MjkyMjQ5Nn0.kHSk1T2OLBQ4ZC_LROFYx0JKxYhNLNdLckwHlk4VVgE";

// Initialize storage bucket for produce images
(async () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  const { data: buckets } = await supabase.storage.listBuckets();
  
  if (!buckets?.find(bucket => bucket.name === 'produce-images')) {
    await supabase.storage.createBucket('produce-images', {
      public: true,
      fileSizeLimit: 10485760, // 10MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
    });
  }
})();

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(
  SUPABASE_URL, 
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storageKey: 'supabase-auth'
    }
  }
);
