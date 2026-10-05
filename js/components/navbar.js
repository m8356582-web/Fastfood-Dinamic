export function mountNavbar(){
 const r=document.querySelector("[data-navbar]");if(!r)return;const b=r.dataset.base||"";
 r.innerHTML=`<header class="site-header"><div class="container navbar"><a class="brand" href="${b}index.html"><span class="brand-mark">N</span><span>Nava Food</span></a><nav class="nav-links" data-nav><a href="${b}index.html">خانه</a><a href="${b}menu.html">منو</a><a href="${b}#about">درباره ما</a></nav><div class="nav-actions"><a class="icon-btn" href="${b}cart.html" aria-label="سبد خرید">🛒</a><a class="btn btn-secondary" href="${b}account/profile.html">حساب</a><button class="icon-btn mobile-menu-btn" data-toggle>☰</button></div></div></header>`;
 r.querySelector("[data-toggle]")?.addEventListener("click",()=>r.querySelector("[data-nav]").classList.toggle("open"));
}
export function mountFooter(){
 const r=document.querySelector("[data-footer]");if(!r)return;const b=r.dataset.base||"";
 r.innerHTML=`<footer class="site-footer" id="contact"><div class="container footer-grid"><div><a class="brand" href="${b}index.html"><span class="brand-mark">N</span><span>Nava Food</span></a><p class="muted">غذای خوب، سفارش ساده و تجربه‌ای بدون پیچیدگی.</p></div><div><h3>منو</h3><div class="footer-links"><a href="${b}menu.html">همه غذاها</a><a href="${b}menu.html?category=برگر">برگر</a></div></div><div><h3>حساب</h3><div class="footer-links"><a href="${b}account/orders.html">سفارش‌ها</a><a href="${b}account/favorites.html">علاقه‌مندی‌ها</a></div></div><div><h3>ساعت کاری</h3><p class="muted">هر روز ۱۱ تا ۲۳:۳۰</p></div></div></footer>`;
}
