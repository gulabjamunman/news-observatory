import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://otbkelxyxmuedowtjgom.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90YmtlbHh5eG11ZWRvd3RqZ29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyODUyMDEsImV4cCI6MjA4NTg2MTIwMX0.meo8g8VAQIcBLR55ELaZYSKgR63lXDRwhIrzj5Cd05A"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
