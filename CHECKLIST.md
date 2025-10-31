# Development Checklist

Use this checklist to track your progress and ensure everything is set up correctly.

## Initial Setup

- [ ] Node.js 18+ installed
- [ ] Project cloned/created
- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` created with all required variables

## Supabase Configuration

- [ ] Supabase project created
- [ ] Project URL and anon key copied to `.env.local`
- [ ] Database schema (`db/schema.sql`) executed successfully
- [ ] `resources` storage bucket created
- [ ] Storage bucket set to public
- [ ] Email authentication enabled
- [ ] Confirmed "subjects" table has Chemistry entry

## YouTube API

- [ ] Google Cloud project created
- [ ] YouTube Data API v3 enabled
- [ ] API key created
- [ ] API key added to `.env.local` (without NEXT_PUBLIC_ prefix)
- [ ] (Optional) API key restricted to YouTube API only

## Testing Features

### Authentication
- [ ] Can click "Sign in" button
- [ ] Receive magic link email
- [ ] Successfully sign in via magic link
- [ ] Email displays in nav after sign in
- [ ] Can sign out

### Videos
- [ ] Video search page loads
- [ ] Can search for chemistry topics
- [ ] YouTube results display with thumbnails
- [ ] Can click on a video
- [ ] Video plays in embed player
- [ ] Quick note form displays on video page

### Notes
- [ ] Notes page displays (even if empty)
- [ ] Can create new note
- [ ] Markdown preview works
- [ ] Note saves successfully
- [ ] Note appears in notes list
- [ ] Can create note from video page

### Resources
- [ ] Resources page displays
- [ ] Can access upload page
- [ ] Can select file to upload
- [ ] File uploads to Supabase Storage
- [ ] Resource appears in list
- [ ] Can download uploaded file

### Community
- [ ] Community page loads
- [ ] Shows message when no public notes exist
- [ ] Public notes display when created

## Code Quality

- [ ] No TypeScript errors (`npm run lint`)
- [ ] No console errors in browser
- [ ] All pages load without 404s
- [ ] Responsive design works on mobile
- [ ] Dark theme looks good

## Pre-Deployment

- [ ] All features tested and working
- [ ] Environment variables documented
- [ ] README.md updated with any customizations
- [ ] Sensitive data not committed to git
- [ ] Code pushed to GitHub

## Deployment (Vercel)

- [ ] Repository imported in Vercel
- [ ] Environment variables added in Vercel
- [ ] `NEXT_PUBLIC_SITE_URL` set to Vercel domain
- [ ] Successful deployment
- [ ] Production site loads correctly
- [ ] All features work in production

## Post-Deployment

- [ ] Supabase redirect URLs updated with Vercel domain
- [ ] Auth tested in production
- [ ] File uploads work in production
- [ ] YouTube search works in production
- [ ] Custom domain configured (optional)

## Future Enhancements

- [ ] Row Level Security policies added
- [ ] Quiz system implemented
- [ ] User profiles added
- [ ] Comment system built
- [ ] Search functionality enhanced
- [ ] Analytics integrated
- [ ] Performance optimized
- [ ] SEO improved
- [ ] Mobile app considered

---

## Common Issues Checklist

If something isn't working, check:

- [ ] Dev server restarted after env var changes
- [ ] Browser cache cleared
- [ ] Supabase project is not paused (free tier pauses after inactivity)
- [ ] YouTube API quota not exceeded (10,000 units/day free)
- [ ] Network tab shows no failed requests
- [ ] Console shows no JavaScript errors
- [ ] Database tables exist (check in Supabase Table Editor)

---

**Last Updated**: [Add date when you complete setup]

**Notes**: 
[Add any project-specific notes or customizations here]
