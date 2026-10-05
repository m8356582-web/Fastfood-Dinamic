import {getJSON,setJSON} from "../utils/storage.js";
export const getOrders=()=>getJSON("orders",[]);
export const saveOrder=o=>{const x=getOrders();x.unshift(o);setJSON("orders",x);return o};
export const getOrder=id=>getOrders().find(o=>String(o.id)===String(id));
export const statusLabel=s=>({pending:"در انتظار تأیید",confirmed:"تأیید شد",preparing:"در حال آماده‌سازی",ready:"آماده تحویل",out_for_delivery:"در مسیر",delivered:"تحویل داده شد",cancelled:"لغو شد"}[s]||s);
export const statusIndex=s=>["confirmed","preparing","ready","out_for_delivery","delivered"].indexOf(s);
export function createDemoOrder(p){const o={id:"N"+Date.now(),number:"#"+Math.floor(10000+Math.random()*89999),status:"confirmed",createdAt:new Date().toISOString(),...p};return saveOrder(o)}
