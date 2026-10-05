insert into public.categories(name,slug,sort_order) values('برگر','burger',1),('مرغ','chicken',2),('پیتزا','pizza',3),('کنار غذا','sides',4),('نوشیدنی','drinks',5),('دسر','dessert',6) on conflict(slug) do nothing;
insert into public.coupons(code,discount_type,discount_value,min_order_amount,is_active) values('WELCOME10','percent',10,250000,true) on conflict(code) do nothing;
