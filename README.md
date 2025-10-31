# Chem LMS - Chemistry Learning Management System

A modern, full-featured Chemistry Learning Management System built with Next.js, Supabase, and Tailwind CSS.

## 🚀 Features

- **📺 YouTube Video Search** - Search and watch curated chemistry lectures
- **📚 Resources Library** - Upload and download PDFs, textbooks, and study materials
- **📝 Personal Notes** - Write and organize study notes in Markdown
- **👥 Community** - Share notes and connect with other learners
- **🔐 Authentication** - Secure email-based authentication via Supabase
- **🎨 Modern UI** - Clean, dark-themed interface with Tailwind CSS

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (free tier works great)
- YouTube Data API v3 key (free from Google Cloud Console)

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd chem-lms-web
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Project Settings** → **API** and copy:
   - Project URL
   - Anon/public key
3. Go to **Storage** → Create a new bucket named `resources` (make it public for downloads)
4. Go to **SQL Editor** and run the schema from `db/schema.sql`

### 3. YouTube API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable **YouTube Data API v3**
4. Create credentials → API Key
5. Copy the API key

### 4. Environment Variables

Create `.env.local` in the project root:

```ini
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
YOUTUBE_API_KEY=YOUR_YT_API_KEY
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
chem-lms-web/
├── app/
│   ├── api/
│   │   ├── notes/route.ts          # Notes CRUD API
│   │   └── youtube/search/route.ts # YouTube search proxy
│   ├── videos/
│   │   ├── page.tsx                # Video search & list
│   │   └── [id]/page.tsx           # Video player
│   ├── resources/
│   │   ├── page.tsx                # Resources library
│   │   └── upload/page.tsx         # Upload resources
│   ├── notes/
│   │   ├── page.tsx                # Notes list
│   │   └── new/page.tsx            # Create note
│   ├── community/
│   │   └── page.tsx                # Community feed
│   ├── layout.tsx                  # Root layout with nav
│   └── page.tsx                    # Dashboard
├── components/
│   └── SignIn.tsx                  # Auth component
├── lib/
│   ├── supabase-client.ts          # Browser client
│   └── supabase-server.ts          # Server client
├── db/
│   └── schema.sql                  # Database schema
└── public/
```

## 🗄️ Database Schema

The app uses these main tables:

- `subjects` - Chemistry topics (Organic, Physical, Inorganic, etc.)
- `videos` - Cached YouTube video metadata
- `resources` - File metadata for uploaded PDFs/documents
- `notes` - User study notes with markdown support
- `posts` & `comments` - Community features (ready for future expansion)

See `db/schema.sql` for the complete schema.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `YOUTUBE_API_KEY`
   - `NEXT_PUBLIC_SITE_URL` (set to your Vercel domain)
4. Deploy!

### Update Supabase Auth Settings

In your Supabase project:
1. Go to **Authentication** → **URL Configuration**
2. Add your Vercel domain to **Site URL** and **Redirect URLs**

## 🎯 Roadmap

- [ ] Quiz system with timer and auto-grading
- [ ] Advanced search and filtering
- [ ] User profiles and achievements
- [ ] Discussion threads with comments
- [ ] Bookmarking and favorites
- [ ] Mobile app (React Native)
- [ ] PDF annotation tools
- [ ] Collaborative study rooms
- [ ] Progress tracking and analytics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **APIs**: YouTube Data API v3
- **Markdown**: react-markdown
- **Deployment**: Vercel

## 🆘 Support

If you encounter any issues:

1. Check that all environment variables are set correctly
2. Verify Supabase database schema is created (`db/schema.sql`)
3. Ensure the `resources` bucket exists in Supabase Storage
4. Check browser console and terminal for error messages

For bugs or feature requests, please open an issue on GitHub.

---

Built with ❤️ for chemistry students worldwide
