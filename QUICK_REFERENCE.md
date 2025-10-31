# 🚀 Quick Reference Card

## Essential Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check code quality

# Git
git add .
git commit -m "your message"
git push
```

---

## File Locations

| What | Where |
|------|-------|
| **Pages** | `app/` folder |
| **API Routes** | `app/api/` folder |
| **Components** | `components/` folder |
| **Supabase Config** | `lib/supabase-*.ts` |
| **Database Schema** | `db/schema.sql` |
| **Environment Vars** | `.env.local` (create this!) |
| **Styles** | `app/globals.css` |

---

## Routes Map

| URL | File | Purpose |
|-----|------|---------|
| `/` | `app/page.tsx` | Dashboard home |
| `/videos` | `app/videos/page.tsx` | Search videos |
| `/videos/[id]` | `app/videos/[id]/page.tsx` | Watch video |
| `/resources` | `app/resources/page.tsx` | Browse resources |
| `/resources/upload` | `app/resources/upload/page.tsx` | Upload files |
| `/notes` | `app/notes/page.tsx` | List notes |
| `/notes/new` | `app/notes/new/page.tsx` | Create note |
| `/community` | `app/community/page.tsx` | Public notes feed |
| `/api/youtube/search` | `app/api/youtube/search/route.ts` | YouTube proxy |
| `/api/notes` | `app/api/notes/route.ts` | Notes CRUD |

---

## Environment Variables

```ini
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# YouTube (NO NEXT_PUBLIC_ prefix!)
YOUTUBE_API_KEY=

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Supabase Quick Actions

### In Supabase Dashboard

1. **Run SQL**: SQL Editor → New query → Paste → Run
2. **View Tables**: Table Editor (see data)
3. **Storage**: Storage → resources bucket
4. **Auth Settings**: Authentication → Providers
5. **Get API Keys**: Settings → API

### Important Tables

- `subjects` - Topics (Chemistry pre-loaded)
- `videos` - YouTube cache
- `resources` - File metadata
- `notes` - User notes
- `posts` / `comments` - Community (future)

---

## Common Tasks

### Add New Page
1. Create `app/your-page/page.tsx`
2. Add to nav in `app/layout.tsx`
3. Page auto-routes to `/your-page`

### Add New API Route
1. Create `app/api/your-route/route.ts`
2. Export `GET`, `POST`, etc. functions
3. Access at `/api/your-route`

### Update Database
1. Write SQL in Supabase SQL Editor
2. Run query
3. Refresh table view to verify

### Deploy Changes
```bash
git add .
git commit -m "description"
git push
# Vercel auto-deploys on push
```

---

## Styling Cheat Sheet

### Common Tailwind Classes Used

```tsx
// Layouts
<div className="max-w-6xl mx-auto p-4">        // Container
<div className="grid md:grid-cols-2 gap-4">    // Grid
<div className="flex items-center gap-3">      // Flexbox

// Cards
<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">

// Buttons
<button className="rounded-lg border border-zinc-700 px-4 py-2 hover:bg-zinc-800">

// Inputs
<input className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5" />

// Text
<h1 className="text-3xl font-bold">
<p className="text-zinc-400">
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **Port 3000 in use** | `npx kill-port 3000` |
| **Env vars not working** | Restart dev server |
| **YouTube not working** | Check API key, no NEXT_PUBLIC_ prefix |
| **Supabase errors** | Verify URL/key, check schema ran |
| **Auth not working** | Check Supabase → Authentication enabled |
| **Upload fails** | Check bucket exists, is public |
| **TypeScript errors** | Run `npm run lint` |

---

## Support Links

- **Next.js**: https://nextjs.org/docs
- **Supabase**: https://supabase.com/docs
- **Tailwind**: https://tailwindcss.com/docs
- **React Markdown**: https://github.com/remarkjs/react-markdown

---

## Git Workflow

```bash
# Daily workflow
git pull                        # Get latest changes
# ... make changes ...
git add .                       # Stage changes
git commit -m "what you did"    # Commit
git push                        # Push to GitHub

# Check status
git status                      # See what changed
git log --oneline -5            # Recent commits
```

---

## Keyboard Shortcuts (VS Code)

- `Ctrl/Cmd + P` - Quick file open
- `Ctrl/Cmd + Shift + F` - Search in files
- `Ctrl/Cmd + B` - Toggle sidebar
- `Ctrl/Cmd + J` - Toggle terminal
- `Ctrl/Cmd + Shift + P` - Command palette

---

## API Quotas

**YouTube API**: 10,000 units/day (free)
- Each search = 100 units
- = ~100 searches/day
- Caching reduces usage

**Supabase Free**:
- 500MB database
- 1GB storage
- 2GB bandwidth/month

---

## Color Palette

```css
/* Background */
bg-zinc-950   /* Main background */
bg-zinc-900   /* Cards */
bg-zinc-800   /* Darker elements */

/* Borders */
border-zinc-800   /* Primary borders */
border-zinc-700   /* Hover state */

/* Text */
text-zinc-100   /* Primary text */
text-zinc-400   /* Secondary text */
text-zinc-500   /* Tertiary text */
```

---

**Print this page or keep it handy! 📋**
