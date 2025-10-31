import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';

export async function GET() {
  const supabase = await supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return NextResponse.json([], { status: 200 });
  }

  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('owner', user.id)
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('Error fetching notes:', error);
    return NextResponse.json([], { status: 200 });
  }

  return NextResponse.json(data ?? []);
}

export async function POST(req: Request) {
  const supabase = await supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  }

  const body = await req.formData();
  const title = String(body.get('title') || 'Untitled');
  const md = String(body.get('body') || '');
  const subject = 'chemistry';

  const { data: subj } = await supabase
    .from('subjects')
    .select('id')
    .eq('slug', subject)
    .single();

  const { error } = await supabase.from('notes').insert({
    owner: user.id,
    title,
    body: md,
    subject_id: subj?.id ?? null,
  });

  if (error) {
    console.error('Error creating note:', error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
