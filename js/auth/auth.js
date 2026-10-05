import {getSupabase} from "../supabase.js";import {setJSON,getJSON,remove} from "../utils/storage.js";
export async function signIn(email,password){const s=await getSupabase();if(s){const{data,error}=await s.auth.signInWithPassword({email,password});if(error)throw error;return data.user}const u={id:"demo",email,full_name:"کاربر نمونه"};setJSON("user",u);return u}
export async function signUp(email,password,full_name){const s=await getSupabase();if(s){const{data,error}=await s.auth.signUp({email,password,options:{data:{full_name}}});if(error)throw error;return data.user}const u={id:"demo",email,full_name};setJSON("user",u);return u}
export async function signOut(){const s=await getSupabase();if(s)await s.auth.signOut();remove("user")}
export async function currentUser(){const s=await getSupabase();if(s){const{data}=await s.auth.getUser();return data.user}return getJSON("user")}
