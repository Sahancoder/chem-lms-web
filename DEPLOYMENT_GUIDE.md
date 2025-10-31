# 🚀 Publishing Chem LMS to GitHub - Step by Step Guide

## ✅ Step 1: Verify Credentials are Hidden

Your `.env.local` file contains:
- ✅ Supabase URL and keys
- ✅ YouTube API key
- ✅ Site URL

These are already in `.env.local` which is gitignored ✓

## ✅ Step 2: Files Created for Security

1. **`.env.example`** - Template file (safe to commit)
   - Contains variable names only, no actual credentials
   - Teammates can copy this to `.env.local` and add their own keys

2. **`.gitignore`** - Updated to block secrets
   - Blocks all `.env.local` files
   - Never commits credentials

## 📋 Step 3: Initialize Git & Push to GitHub

Run these commands in PowerShell:

```powershell
# Navigate to project
cd E:\chem-lms-web

# Initialize git repository
git init

# Add all files (credentials are auto-excluded by .gitignore)
git add .

# Create first commit
git commit -m "Initial commit: Chem LMS - Modern Chemistry Learning Platform"

# Link to your GitHub repo
git remote add origin https://github.com/Sahancoder/chem-lms-web.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🔒 Step 4: Verify Secrets Are Hidden

After pushing, check GitHub:
1. Go to https://github.com/Sahancoder/chem-lms-web
2. Look for `.env.local` - it should NOT be there ✓
3. Look for `.env.example` - it SHOULD be there ✓
4. Check `README.md` - should have setup instructions ✓

## ⚙️ Step 5: For Teammates (or Deployment)

When someone clones your repo:

```powershell
# Clone the repository
git clone https://github.com/Sahancoder/chem-lms-web.git
cd chem-lms-web

# Install dependencies
npm install

# Copy the template
copy .env.example .env.local

# Edit .env.local and add real credentials
# (each person uses their own keys)

# Run the app
npm run dev
```

## 🌐 Step 6: Deploy to Vercel (Optional)

1. Go to https://vercel.com
2. Import your GitHub repo
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `YOUTUBE_API_KEY`
   - `NEXT_PUBLIC_SITE_URL` (set to your Vercel domain)
4. Deploy!

## ✨ What's Protected

- ❌ `.env.local` - NEVER committed (has real credentials)
- ❌ `.env` - NEVER committed
- ❌ `.env*.local` - NEVER committed
- ❌ `node_modules/` - NEVER committed
- ❌ `.next/` - NEVER committed

## ✅ What's Safe to Commit

- ✅ `.env.example` - Template only, no secrets
- ✅ All source code
- ✅ README.md with instructions
- ✅ Database schema
- ✅ Public assets

## 🆘 If You Accidentally Committed Secrets

If `.env.local` was already committed before:

```powershell
# Remove from git history but keep local file
git rm --cached .env.local

# Commit the removal
git commit -m "Remove .env.local from tracking"

# Push the fix
git push origin main
```

Then immediately:
1. Rotate your Supabase keys (generate new ones)
2. Rotate your YouTube API key
3. Update your local `.env.local` with new keys

---

## 🎉 You're Ready!

Your code is now safe to publish without exposing any credentials!

Run the Step 3 commands to push to GitHub.
