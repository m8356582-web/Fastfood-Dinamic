const PREFIX = "nava_food_";
export const getJSON=(k,f=null)=>{try{const v=localStorage.getItem(PREFIX+k);return v?JSON.parse(v):f}catch{return f}};
export const setJSON=(k,v)=>localStorage.setItem(PREFIX+k,JSON.stringify(v));
export const remove=(k)=>localStorage.removeItem(PREFIX+k);
