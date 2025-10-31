'use client';
import { supabaseBrowser } from '@/lib/supabase-client';
import { useState, useEffect } from 'react';

export function SignIn() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = supabaseBrowser();
    
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async () => {
    const email = prompt('Enter your email for a magic link:');
    if (!email) return;
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.signInWithOtp({ 
      email,
      options: {
        emailRedirectTo: window.location.origin,
      }
    });
    if (error) alert(error.message); 
    else alert('Check your email for the magic link!');
  };

  const signOut = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="glass px-3 py-1.5 text-sm text-mute">
        Loading...
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-mute hidden sm:inline">
          {user.email}
        </span>
        <button 
          onClick={signOut} 
          className="glass px-3 py-1.5 text-sm text-mute hover:text-text hover:bg-panel/80 transition-all"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={signIn} 
      className="glass px-4 py-1.5 text-sm text-text hover:bg-panel/80 hover:text-accent transition-all"
    >
      Sign in
    </button>
  );
}
