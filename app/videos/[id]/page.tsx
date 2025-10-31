'use client';

import { use } from 'react';

type Props = { 
  params: Promise<{ id: string }> 
};

export default function VideoPage({ params }: Props) {
  const { id } = use(params);
  
  return (
    <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
      <div className="space-y-4">
        <div className="aspect-video rounded-xl overflow-hidden border border-zinc-800">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">Chemistry Lecture</h1>
          <p className="text-zinc-400">Watch and take notes on this chemistry lecture</p>
        </div>
      </div>

      <aside className="space-y-4">
        <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <h2 className="font-semibold mb-2">Related Resources</h2>
          <p className="text-sm text-zinc-400">
            Resources matching this topic will appear here. Upload PDFs in the Resources section.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
          <h2 className="font-semibold mb-3">Quick Note</h2>
          <AddQuickNote videoId={id} />
        </section>
      </aside>
    </div>
  );
}

function AddQuickNote({ videoId }: { videoId: string }) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        body: formData,
      });
      
      if (res.ok) {
        alert('Note saved!');
        e.currentTarget.reset();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to save note');
      }
    } catch (error) {
      console.error('Save note error:', error);
      alert('Failed to save note');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="hidden" name="videoId" value={videoId} />
      <input 
        name="title" 
        placeholder="Note title" 
        required
        className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 outline-none focus:border-zinc-700" 
      />
      <textarea 
        name="body" 
        placeholder="Write markdown…" 
        rows={6}
        required
        className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 outline-none focus:border-zinc-700" 
      />
      <button 
        type="submit"
        className="self-start rounded-lg border border-zinc-700 px-3 py-1.5 hover:bg-zinc-800 transition-colors"
      >
        Save note
      </button>
    </form>
  );
}
