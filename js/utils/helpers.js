export const $=(s,r=document)=>r.querySelector(s);
export const getParam=n=>new URLSearchParams(location.search).get(n);
export const debounce=(fn,ms=220)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms)}};
