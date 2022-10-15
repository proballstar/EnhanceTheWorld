import { createClient } from '@supabase/supabase-js'

const SUPAURL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPA_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON

const supabase = createClient(SUPAURL, SUPA_ANON)

export { supabase }