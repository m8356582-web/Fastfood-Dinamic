import {getJSON,setJSON} from "../utils/storage.js";
const key="cart",read=()=>getJSON(key,[]),write=x=>{setJSON(key,x);dispatchEvent(new CustomEvent("cart:updated"))};
export const getCart=()=>read();
export function addToCart(p,quantity=1,options={}){
 const x=read(),signature=JSON.stringify({id:p.id,options}),unit=+p.price+(+options.sizePrice||0)+(options.addons||[]).reduce((s,a)=>s+(+a.price||0),0),e=x.find(i=>i.signature===signature);
 if(e)e.quantity+=quantity;else x.push({key:crypto.randomUUID?.()||String(Date.now()),signature,productId:p.id,name:p.name,image:p.image,unitPrice:unit,quantity,options});write(x)
}
export const updateQuantity=(key,d)=>{const x=read(),i=x.find(i=>i.key===key);if(i)i.quantity+=d;write(x.filter(i=>i.quantity>0))};
export const removeFromCart=k=>write(read().filter(i=>i.key!==k));
export const clearCart=()=>write([]);
export const subtotal=()=>read().reduce((s,i)=>s+i.unitPrice*i.quantity,0);
export const cartCount=()=>read().reduce((s,i)=>s+i.quantity,0);
export const shippingFee=t=>t==="pickup"?0:(subtotal()>=500000?0:35000);
export const cartTotal=(t="delivery",d=0)=>Math.max(0,subtotal()+shippingFee(t)-d);
