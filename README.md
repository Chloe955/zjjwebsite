# Personal Brand Website

A modern, full-stack personal brand website built with Next.js (App Router, TypeScript), Tailwind CSS, and Supabase. Features dynamic content, comments, search, and contact form, with deployment on Vercel.

## Features
- Homepage, About, Reviews, Analysis, Learning, Hobbies, Reflections, Contact
- Dynamic blog/content sections (from Supabase)
- Comment system (per post)
- Search across posts
- Responsive, accessible, SEO-friendly
- Social/professional links (GitHub, LinkedIn, WeChat)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Set up environment variables:**
   - Create a `.env.local` file with:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
- `app/` — Next.js app directory (pages, layouts, routes)
- `components/` — Reusable React components (Header, Footer, Layout, PostCard, CommentList, etc.)
- `lib/` — Supabase client and utilities
- `types/` — TypeScript interfaces

## Deployment
- Push to GitHub/GitLab and connect to [Vercel](https://vercel.com/)
- Set environment variables in Vercel dashboard
- Deploy!

## Customization
- Update About, social links, and branding in `/app/about/page.tsx`, `components/Header.tsx`, and `components/Footer.tsx`
- Configure Supabase tables (posts, comments, contact_submissions) as described in the PRD/DEV docs

## License
MIT
