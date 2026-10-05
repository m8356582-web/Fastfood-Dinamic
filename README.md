# Nava Food — FastFood Pro
A Persian RTL, mobile-first fast-food storefront built with HTML, CSS, Vanilla JS and Supabase-ready architecture.

## Run
Serve the folder with any static server, e.g.:
`python -m http.server 5500`
Then open `http://localhost:5500`.

## Supabase
1. Create a project.
2. Run `supabase/schema.sql`.
3. Run `supabase/policies.sql`.
4. Run `supabase/seed.sql`.
5. Put the project URL and anon key in `js/config.js`.
Never put a service-role key in browser code.

The frontend includes a demo/local-storage mode so the UI is usable before Supabase is configured.
