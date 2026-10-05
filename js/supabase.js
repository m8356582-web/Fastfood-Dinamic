import {APP_CONFIG} from "./config.js";
let client=null;
export async function getSupabase(){
 if(client||!APP_CONFIG.supabaseUrl||!APP_CONFIG.supabaseAnonKey)return client;
 try{const m=await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm");client=m.createClient(APP_CONFIG.supabaseUrl,APP_CONFIG.supabaseAnonKey);return client}catch(e){console.warn("Supabase unavailable; demo mode active",e);return null}
}
