'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseBrowser } from '@/lib/supabase-client';

export default function UploadResourcePage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const onUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file || !title) {
      alert('Please provide a title and select a file');
      return;
    }

    setUploading(true);
    const supabase = supabaseBrowser();

    try {
      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert('Please sign in to upload resources');
        setUploading(false);
        return;
      }

      // Upload file to Supabase Storage
      const path = `resources/${Date.now()}_${file.name}`;
      const { error: upErr } = await supabase.storage
        .from('resources')
        .upload(path, file);

      if (upErr) {
        console.error('Upload error:', upErr);
        alert(upErr.message);
        setUploading(false);
        return;
      }

      // Get chemistry subject
      const { data: subj } = await supabase
        .from('subjects')
        .select('id')
        .eq('slug', 'chemistry')
        .single();

      // Insert resource metadata
      const { error: insErr } = await supabase.from('resources').insert({
        title,
        description,
        file_path: path,
        subject_id: subj?.id ?? null,
      });

      if (insErr) {
        console.error('Insert error:', insErr);
        alert(insErr.message);
        setUploading(false);
        return;
      }

      alert('Resource uploaded successfully!');
      router.push('/resources');
      router.refresh();
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload resource');
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Upload Resource</h1>
        <p className="text-zinc-400">Share textbooks, PDFs, and study materials with the community</p>
      </div>

      <form onSubmit={onUpload} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Title *</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="e.g., Organic Chemistry Textbook Chapter 5"
            required
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 outline-none focus:border-zinc-700 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description (optional)</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Brief description of the resource…"
            rows={3}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 outline-none focus:border-zinc-700 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">File *</label>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
            <input
              type="file"
              onChange={e => setFile(e.target.files?.[0] || null)}
              accept=".pdf,.doc,.docx,.ppt,.pptx"
              required
              className="w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-zinc-800 file:text-zinc-300 hover:file:bg-zinc-700 file:cursor-pointer"
            />
            {file && (
              <p className="mt-2 text-sm text-zinc-400">
                Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={uploading}
            className="rounded-lg border border-zinc-700 px-4 py-2 hover:bg-zinc-800 transition-colors disabled:opacity-50"
          >
            {uploading ? 'Uploading…' : 'Upload Resource'}
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
