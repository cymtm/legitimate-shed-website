# Legitimate Shed Website

This is a NextJS website for legitimate-shed.com, deployed on Vercel.

## Getting Started

To get started, take a look at `src/app/page.tsx`.

## Development

```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

This creates static files in the `out/` directory.

## Deployment

This site is automatically deployed to Vercel when changes are pushed to the main branch. The custom domain `legitimate-shed.com` is configured in the Vercel dashboard.

## AI Features

The site includes AI functionality using Genkit:

```bash
npm run genkit:dev
npm run genkit:watch
```

## Adding Web Games

There are two ways to make games playable on this site:

### A) Self-hosted (recommended for maximum compatibility)
1. Build your game for the web (HTML5/WebGL/WebAssembly).
2. Place the output under `public/games/<slug>/` so that `public/games/<slug>/index.html` exists.
3. Add an entry to `src/lib/data.ts` with:
   - `slug`: the same `<slug>`
   - `gameUrl`: `/games/<slug>/index.html`
   - `title`, `description`, `imageUrl`, `imageHint`
4. We send special headers (COOP/COEP) on `/games/*` via `next.config.ts` so that multithreaded/SAB builds (Unity, Godot) can run.

Notes:
- Keep game assets under the same origin (this domain) so COEP doesn't block them. If you reference external assets, they must return proper CORS/CORP headers or they will be blocked.
- Static assets under `/games/*` are cached aggressively.

### B) Externally hosted (simpler, but may be limited)
1. Host your game on a service that allows embedding (e.g., GitHub Pages, itch.io with embed).
2. Set `gameUrl` in `src/lib/data.ts` to the external URL.
3. The game must not send `X-Frame-Options: DENY/SAMEORIGIN` and must permit your domain in its CSP `frame-ancestors`.
4. External games generally cannot use SharedArrayBuffer/multithreading unless that host also sets COOP/COEP. If you see SAB/cross-origin isolation errors, build without threads or self-host the game (option A).

## Troubleshooting
- Iframe refuses to load: check DevTools for `X-Frame-Options` or `Content-Security-Policy frame-ancestors` errors. The external host may block embedding.
- Errors about `SharedArrayBuffer` or `crossOriginIsolated` being false: self-host the game under `/public/games/<slug>/` (option A), or disable threads in your build.
- Fullscreen/autoplay/gamepad not working: we now grant these capabilities via iframe `allow` and `sandbox`. Some browsers may still require a user gesture.
