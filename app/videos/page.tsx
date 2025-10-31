'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VideosPage() {
  const [q, setQ] = useState('A-Level Chemistry');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const search = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/youtube/search?q=${encodeURIComponent(q)}`);
      const json = await res.json();
      setItems(json.items || []);
    } catch (error) {
      console.error('Search error:', error);
      alert('Failed to search videos');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Chemistry Videos</h1>
        <p className="text-zinc-400">Search curated YouTube lectures and tutorials</p>
      </div>

      <form onSubmit={search} className="flex gap-2">
        <input 
          value={q} 
          onChange={e => setQ(e.target.value)}
          placeholder="Search Chemistry topics…"
          className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 outline-none focus:border-zinc-700 transition-colors" 
        />
        <button 
          type="submit"
          disabled={loading}
          className="rounded-xl border border-zinc-700 px-6 py-2.5 hover:bg-zinc-800 transition-colors disabled:opacity-50"
        >
          {loading ? 'Searching…' : 'Search'}
        </button>
      </form>

      {loading && <p className="text-zinc-400">Searching YouTube…</p>}

      {!loading && items.length === 0 && (
        <div className="text-center py-12 text-zinc-400">
          <p>No videos found. Try searching for a topic!</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it: any) => {
          const v = it.id?.videoId;
          const s = it.snippet;
          if (!v) return null;
          
          return (
            <Link 
              key={v} 
              href={`/videos/${v}`} 
              className="block rounded-xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors group"
            >
              <div className="relative aspect-video bg-zinc-900">
                <img 
                  src={s.thumbnails?.medium?.url} 
                  alt={s.title} 
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" 
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium line-clamp-2 mb-1">{s.title}</h3>
                <p className="text-sm text-zinc-400 line-clamp-1">{s.channelTitle}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
