import {getSupabase} from "../supabase.js";
export const demoProducts=[
{id:"p1",name:"برگر کلاسیک",category:"برگر",price:195000,description:"گوشت گریل‌شده، پنیر چدار، کاهو، گوجه و سس مخصوص.",image:"assets/images/products/burger.svg",popular:true,options:{sizes:[{name:"معمولی",price:0},{name:"بزرگ",price:45000}],addons:[{name:"پنیر اضافه",price:25000},{name:"قارچ",price:20000}]}},
{id:"p2",name:"برگر دوبل",category:"برگر",price:275000,description:"دو لایه گوشت، پنیر چدار، خیارشور و سس مخصوص.",image:"assets/images/products/burger.svg",popular:true,options:{sizes:[{name:"معمولی",price:0}],addons:[{name:"پنیر اضافه",price:25000}]}},
{id:"p3",name:"ساندویچ مرغ گریل",category:"مرغ",price:185000,description:"مرغ گریل‌شده، سبزیجات تازه و سس خانگی.",image:"assets/images/products/chicken.svg",popular:true,options:{sizes:[{name:"معمولی",price:0}],addons:[{name:"پنیر",price:22000}]}},
{id:"p4",name:"سیب‌زمینی مخصوص",category:"کنار غذا",price:95000,description:"سیب‌زمینی ترد با ادویه ملایم و سس مخصوص.",image:"assets/images/products/fries.svg",popular:true,options:{sizes:[{name:"معمولی",price:0},{name:"بزرگ",price:30000}],addons:[{name:"پنیر",price:22000}]}},
{id:"p5",name:"ناگت مرغ",category:"مرغ",price:125000,description:"تکه‌های مرغ سوخاری ترد با سس انتخابی.",image:"assets/images/products/nuggets.svg",options:{sizes:[{name:"۶ عدد",price:0},{name:"۹ عدد",price:35000}],addons:[]}},
{id:"p6",name:"نوشابه",category:"نوشیدنی",price:35000,description:"نوشیدنی خنک برای کنار غذا.",image:"assets/images/products/drink.svg",options:{sizes:[{name:"۳۳۰ میلی‌لیتر",price:0}],addons:[]}},
{id:"p7",name:"پیتزا پپرونی",category:"پیتزا",price:245000,description:"پنیر کشدار، پپرونی و سس گوجه با خمیر تازه.",image:"assets/images/products/pizza.svg",popular:true,options:{sizes:[{name:"یک‌نفره",price:0},{name:"دونفره",price:80000}],addons:[{name:"پنیر اضافه",price:30000}]}},
{id:"p8",name:"چیزکیک",category:"دسر",price:85000,description:"دسر نرم و خنک با لایه بیسکویت.",image:"assets/images/products/dessert.svg",options:{sizes:[{name:"یک برش",price:0}],addons:[]}}
];
export async function getProducts(f={}){
 const s=await getSupabase();
 if(s){let q=s.from("products").select("*,categories(name)").eq("is_active",true);const {data,error}=await q.order("created_at",{ascending:false});if(!error&&data?.length)return data.map(p=>({...p,category:p.categories?.name||"عمومی",price:+p.price,image:p.image_url||"assets/images/products/burger.svg",options:p.options||{sizes:[],addons:[]}}))}
 let x=[...demoProducts];if(f.category&&f.category!=="همه")x=x.filter(p=>p.category===f.category);if(f.search){const q=f.search.toLowerCase();x=x.filter(p=>(p.name+" "+p.description).toLowerCase().includes(q))}return x;
}
export const categories=p=>["همه",...new Set(p.map(x=>x.category))];
export async function getProduct(id){return (await getProducts()).find(p=>String(p.id)===String(id))}
