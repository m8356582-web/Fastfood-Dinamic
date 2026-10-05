create or replace function public.has_role(r text) returns boolean language sql stable security definer set search_path=public as $$select exists(select 1 from public.user_roles where user_id=auth.uid() and role=r)$$;
create policy "public products" on public.products for select using(is_active=true or public.has_role('admin'));
create policy "public categories" on public.categories for select using(is_active=true or public.has_role('admin'));
create policy "own profile" on public.profiles for all using(id=auth.uid()) with check(id=auth.uid());
create policy "own addresses" on public.addresses for all using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy "own orders read" on public.orders for select using(user_id=auth.uid() or public.has_role('admin') or public.has_role('manager') or public.has_role('kitchen'));
create policy "own order items read" on public.order_items for select using(exists(select 1 from public.orders o where o.id=order_items.order_id and(o.user_id=auth.uid() or public.has_role('admin') or public.has_role('manager') or public.has_role('kitchen'))));
create policy "own favorites" on public.favorites for all using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy "reviews read" on public.reviews for select using(status='approved' or user_id=auth.uid() or public.has_role('admin'));
create policy "reviews create" on public.reviews for insert with check(user_id=auth.uid());
create policy "own notifications" on public.notifications for all using(user_id=auth.uid()) with check(user_id=auth.uid());
-- Production order creation/payment must be performed by a secure RPC/Edge Function.
-- Never expose a Supabase service-role key in frontend code.
