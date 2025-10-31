import { NextResponse } from 'next/server';

export const revalidate = 60 * 30; // cache 30 min

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || 'A-Level Chemistry';
  const key = process.env.YOUTUBE_API_KEY!;
  
  if (!key) {
    return NextResponse.json({ error: 'YouTube API key not configured' }, { status: 500 });
  }

  const url = new URL('https://www.googleapis.com/youtube/v3/search');
  url.searchParams.set('part', 'snippet');
  url.searchParams.set('maxResults', '20');
  url.searchParams.set('type', 'video');
  url.searchParams.set('q', q);
  url.searchParams.set('key', key);

  try {
    const r = await fetch(url.toString(), { cache: 'force-cache' });
    const data = await r.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('YouTube API error:', error);
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}
