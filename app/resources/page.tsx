import { supabaseServer } from '@/lib/supabase-server';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function ResourcesPage() {
  const supabase = await supabaseServer();
  const { data: resources } = await supabase
    .from('resources')
    .select('*')
    .order('created_at', { ascending: false });

  // Generate signed URLs for downloads
  const rows = await Promise.all(
    (resources ?? []).map(async (r) => {
      const { data: signedData } = await supabase.storage
        .from('resources')
        .createSignedUrl(r.file_path, 60 * 10); // 10 min expiry
      return { ...r, url: signedData?.signedUrl };
    })
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Resources</h1>
          <p className="text-zinc-400">Download chemistry textbooks, PDFs, and study materials</p>
        </div>
        <Link
          href="/resources/upload"
          className="rounded-lg border border-zinc-700 px-4 py-2 hover:bg-zinc-800 transition-colors"
        >
          Upload Resource
        </Link>
      </div>

      {rows.length === 0 ? (
        <div className="text-center py-12 rounded-xl border border-zinc-800 bg-zinc-900/50">
          <p className="text-zinc-400 mb-4">No resources available yet.</p>
          <Link
            href="/resources/upload"
            className="inline-block rounded-lg border border-zinc-700 px-4 py-2 hover:bg-zinc-800 transition-colors"
          >
            Upload the first resource
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rows.map((r: any) => (
            <a
              key={r.id}
              href={r.url!}
              download
              className="block rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-zinc-800 p-2.5 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium mb-1 line-clamp-2">{r.title}</h3>
                  {r.description && (
                    <p className="text-sm text-zinc-400 line-clamp-2 mb-2">{r.description}</p>
                  )}
                  <p className="text-xs text-zinc-500">
                    {new Date(r.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
