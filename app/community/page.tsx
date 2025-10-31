import ReactMarkdown from 'react-markdown';
import { supabaseServer } from '@/lib/supabase-server';
import MotionFade from '@/components/motion/MotionFade';

export const dynamic = 'force-dynamic';

export default async function CommunityPage() {
  const supabase = await supabaseServer();
  const { data: notes } = await supabase
    .from('notes')
    .select('id, title, body, created_at, owner')
    .eq('is_public', true)
    .order('created_at', { ascending: false })
    .limit(50);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-text mb-2">Community</h1>
        <p className="text-mute">Shared notes and discussions from the chemistry learning community</p>
      </div>

      {!notes || notes.length === 0 ? (
        <MotionFade>
          <div className="text-center py-12 glass">
            <p className="text-mute mb-4">No public notes shared yet.</p>
            <p className="text-sm text-mute">
              Create a note and mark it as public to share with the community
            </p>
          </div>
        </MotionFade>
      ) : (
        <div className="space-y-4">
          {notes.map((n, i) => (
            <MotionFade key={n.id} delay={i * 0.05}>
              <article className="glass p-6 hover:bg-panel/70 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-text">{n.title}</h3>
                  <span className="text-xs text-mute">
                    {new Date(n.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>{n.body}</ReactMarkdown>
                </div>
              </article>
            </MotionFade>
          ))}
        </div>
      )}

      <MotionFade delay={0.3}>
        <div className="glass p-6">
          <h2 className="text-lg font-semibold text-text mb-3">Coming Soon</h2>
          <ul className="space-y-2 text-mute">
            <li className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>Discussion threads and comments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>Study groups and collaboration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>Question & answer forum</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>Upvoting and bookmarking posts</span>
            </li>
          </ul>
        </div>
      </MotionFade>
    </div>
  );
}
