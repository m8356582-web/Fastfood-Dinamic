export const formatPrice=v=>`${new Intl.NumberFormat("fa-IR").format(Math.round(v||0))} تومان`;
export const formatDate=v=>v?new Intl.DateTimeFormat("fa-IR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(v)):"—";
export const escapeHTML=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
