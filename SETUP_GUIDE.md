# 🚀 Quick Start Guide for Chem LMS

Follow these steps to get your Chemistry LMS up and running in minutes!

---

## Step 1: Set Up Supabase (5 minutes)

### Create Project
1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **New Project**
3. Fill in:
   - **Name**: `chem-lms` (or your choice)
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: Choose closest to Sri Lanka (Singapore recommended)
4. Click **Create new project** and wait ~2 minutes

### Get API Credentials
1. In your project, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon/public key** (under "Project API keys")

### Create Storage Bucket
1. Go to **Storage** in sidebar
2. Click **Create bucket**
3. Name: `resources`
4. Make it **Public** (so files can be downloaded)
5. Click **Create bucket**

### Set Up Database
1. Go to **SQL Editor** in sidebar
2. Click **New query**
3. Copy the entire contents of `db/schema.sql` from your project
4. Paste into the editor
5. Click **Run** (bottom right)
6. You should see "Success. No rows returned"

### Enable Email Auth
1. Go to **Authentication** → **Providers**
2. Find **Email** and make sure it's enabled
3. Scroll down to **Email Templates** → **Magic Link**
4. Customize if you want, or leave as default

---

## Step 2: Set Up YouTube API (3 minutes)

### Create API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Sign in with your Google account
3. Click **Select a project** → **New Project**
4. Name: `chem-lms-youtube` → **Create**
5. Wait for it to create (~30 seconds)

### Enable YouTube API
1. In the search bar at top, type "YouTube Data API v3"
2. Click on **YouTube Data API v3**
3. Click **Enable** button
4. Wait for it to enable

### Get API Key
1. Click **Credentials** in left sidebar
2. Click **+ Create Credentials** → **API Key**
3. Copy the API key that appears
4. (Optional) Click **Restrict Key** to limit usage to YouTube API only

---

## Step 3: Configure Your Project (2 minutes)

### Create Environment File
1. In your project root, create a file named `.env.local`
2. Copy this template and fill in your values:

```ini
# From Supabase Settings → API
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# From Google Cloud Console
YOUTUBE_API_KEY=your_youtube_api_key_here

# For local development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Save the file

---

## Step 4: Run the App (1 minute)

### Install Dependencies (if not done)
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Open in Browser
- Go to [http://localhost:3000](http://localhost:3000)
- You should see the Chem LMS dashboard!

---

## ✅ Testing Your Setup

### Test Authentication
1. Click **Sign in** in the top right
2. Enter your email
3. Check your email for magic link
4. Click the link to sign in

### Test Video Search
1. Go to **Videos** page
2. Search for "Chemistry"
3. You should see YouTube results
4. Click a video to watch

### Test Notes
1. Make sure you're signed in
2. Go to **My Notes**
3. Click **Create Note**
4. Write a test note and save
5. Should appear in your notes list

### Test Resources
1. Go to **Resources**
2. Click **Upload Resource**
3. Upload a test PDF file
4. Should appear in resources list
5. Click to download

---

## 🐛 Troubleshooting

### "YouTube API key not configured"
- Check `.env.local` has `YOUTUBE_API_KEY=...`
- Make sure there's no `NEXT_PUBLIC_` prefix
- Restart dev server after adding env vars

### "Failed to fetch" errors
- Check Supabase URL and key are correct
- Verify database schema was run successfully
- Check browser console for specific error messages

### "Not signed in" when uploading
- Make sure you completed the magic link auth flow
- Check email spam folder for magic link
- Try signing out and back in

### Resources won't download
- Verify `resources` bucket exists in Supabase Storage
- Make sure bucket is set to **Public**
- Check file was uploaded successfully

---

## 🎯 Next Steps

Once everything is working:

1. **Customize the UI** - Edit Tailwind classes to match your brand
2. **Add more subjects** - Extend beyond Chemistry
3. **Enable Row Level Security** - Secure your database (see Supabase docs)
4. **Deploy to Vercel** - See main README.md for instructions
5. **Add quiz features** - Uncomment quiz tables in schema.sql

---

## 📱 Going Live

When you're ready to deploy:

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/chem-lms.git
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add the same environment variables from `.env.local`
4. Change `NEXT_PUBLIC_SITE_URL` to your Vercel domain
5. Deploy!

### 3. Update Supabase
1. In Supabase project → **Authentication** → **URL Configuration**
2. Add your Vercel URL to:
   - **Site URL**
   - **Redirect URLs**
3. Save changes

---

## 🎉 You're Done!

Your Chemistry LMS is now ready to use. Share it with your classmates and start learning together!

Need help? Check the main README.md or open an issue on GitHub.
