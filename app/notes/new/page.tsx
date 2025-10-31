'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default function NewNotePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);

    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        router.push('/notes');
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to save note');
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save note');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Create Note</h1>
        <p className="text-zinc-400">Write your chemistry study notes in markdown</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Note title"
            required
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 outline-none focus:border-zinc-700 transition-colors"
          />
        </div>

        <div className="flex gap-2 border-b border-zinc-800 pb-2">
          <button
            type="button"
            onClick={() => setPreview(false)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              !preview ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:text-zinc-300'
            }`}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => setPreview(true)}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              preview ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:text-zinc-300'
            }`}
          >
            Preview
          </button>
        </div>

        {!preview ? (
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder="Write your notes in markdown…

**Example:**
- Use `**bold**` for emphasis
- Use `#` for headings
- Use `-` for lists"
            required
            rows={16}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 outline-none focus:border-zinc-700 transition-colors font-mono text-sm"
          />
        ) : (
          <div className="min-h-[400px] rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{body || '*No content yet*'}</ReactMarkdown>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg border border-zinc-700 px-4 py-2 hover:bg-zinc-800 transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save Note'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-lg border border-zinc-800 px-4 py-2 text-zinc-400 hover:text-zinc-300 hover:border-zinc-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
