# Ved Prakash Pandey: portfolio

Next.js (App Router), Tailwind CSS and Framer Motion. Static, no backend, no environment variables.

## Edit content
Every word, link and number is in [`src/content/site.ts`](src/content/site.ts).
Search that file for `PLACEHOLDER` to find what still needs a real value.

House style: British English, no emojis, no em dashes, short and confident, never invent facts or numbers.

## Add assets
| What | Where |
|---|---|
| CV | Replace `public/cv/Ved-Prakash-Pandey-CV.pdf` (keep the file name) |
| Screenshots | Put PNGs in `public/work/` and set `screenshot` on the case study (`src`, `alt`, `width`, `height`) |
| Loom videos | Paste the Loom share URL into `loom` on the case study |
| Live links | Set `href` and remove `placeholder: true` in the case study `links` |
| Toolkit logos | Add a [simple-icons](https://simpleicons.org) name to `toolkit`, and the import to `ICONS` in `src/components/About.tsx`. Omit `icon` for a text chip |

## Run locally
```
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New > Project**, import the repository and press **Deploy**. No settings needed.
3. In the project, open **Analytics** and enable it (the `<Analytics />` component is already in the layout).
4. Set `siteUrl` in `site.ts` to your live domain, so the sitemap and social cards use it.

## Shortcuts
- `Cmd+K` (or `Ctrl+K`) opens the quick menu. On mobile, use the button in the top bar.
- `/recruiters` is a one-page, print-friendly summary for recruiters.
