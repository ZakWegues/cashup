import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;

export const isSupabaseConfigured = Boolean(url && key);

/**
 * Insert a lead. Falls back gracefully if Supabase isn't configured.
 * Returns { data, error }.
 */
export async function insertLead(lead) {
  if (!supabase) return { data: null, error: null };
  return supabase.from('leads').insert([lead]);
}

/**
 * Fetch all leads ordered by created_at desc.
 * Returns { data: [], error }.
 */
export async function fetchLeads() {
  if (!supabase) return { data: [], error: null };
  return supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });
}

/**
 * Delete a lead by id.
 * Returns { error }.
 */
export async function deleteLead(id) {
  if (!supabase) return { error: null };
  return supabase.from('leads').delete().eq('id', id);
}
