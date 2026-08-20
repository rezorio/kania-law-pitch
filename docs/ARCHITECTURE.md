# Architecture

## Runtime

- Vue 3 + Vite
- Vue Router (history mode)
- Tailwind CSS (tokens in `src/assets/styles/tokens.css`)
- Lucide Vue Next
- GSAP + ScrollTrigger for the practice-index still swap and header shrink
- Content modules in `src/content/*.js` — copy is not trapped in views

## Routes

See [IA.md](./IA.md).

## Forms

`VITE_FORMSPREE_ID` optional. If unset, Contact shows an honest demo state and pushes **Call 918-743-2233**. No fake “message sent.”

## Deploy

Static Vite build to Vercel/Netlify. SPA fallback to `index.html`.

## Folder map

```
src/
  assets/images/
  assets/styles/tokens.css
  content/
  components/layout/
  components/home/
  components/practice/
  components/ui/
  composables/
  router/
  views/
```
