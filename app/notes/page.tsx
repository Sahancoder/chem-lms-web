import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { supabaseServer } from '@/lib/supabase-server';
import MotionFade from '@/components/motion/MotionFade';

async function getNotes() {
  try {
    const supabase = await supabaseServer();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return [];
    }

    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('owner', user.id)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Error fetching notes:', error);
      return [];
    }

    return data ?? [];
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text mb-2">My Notes</h1>
          <p className="text-mute">Your personal chemistry study notes</p>
        </div>
        <Link
          href="/notes/new"
          className="glass px-4 py-2 hover:bg-panel/80 transition-all text-text"
        >
          Create Note
        </Link>
      </div>

      {notes.length === 0 ? (
        <MotionFade>
          <div className="text-center py-12 glass">
            <p className="text-mute mb-4">You haven&apos;t created any notes yet.</p>
            <Link
              href="/notes/new"
              className="inline-block glass px-4 py-2 hover:bg-panel/80 transition-all text-accent"
            >
              Create your first note
            </Link>
          </div>
        </MotionFade>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {notes.map((n: any, i: number) => (
            <MotionFade key={n.id} delay={i * 0.05}>
              <div className="glass p-4 hover:bg-panel/70 hover:-translate-y-0.5 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-lg text-text">{n.title}</h3>
                  {n.is_public && (
                    <span className="text-xs rounded-full bg-success/20 px-2 py-1 text-success">
                      Public
                    </span>
                  )}
                </div>
                <div className="prose prose-invert prose-sm max-w-none mb-3">
                  <ReactMarkdown>
                    {n.body.slice(0, 200) + (n.body.length > 200 ? '…' : '')}
                  </ReactMarkdown>
                </div>
                <p className="text-xs text-mute">
                  {new Date(n.updated_at).toLocaleDateString()}
                </p>
              </div>
            </MotionFade>
          ))}
        </div>
      )}
    </div>
  );
}
