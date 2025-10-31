import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="glass p-5 space-y-6">
        {/* profile */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent2 grid place-items-center text-2xl">
            🧪
          </div>
          <div>
            <div className="font-semibold text-text">Chemistry Student</div>
            <div className="text-xs text-mute">Junior Learner</div>
          </div>
        </div>
        
        {/* progress */}
        <div>
          <div className="text-xs text-mute mb-1">250/500 points</div>
          <div className="h-2 bg-line/60 rounded-full overflow-hidden">
            <div className="h-2 rounded-full bg-gradient-to-r from-accent to-accent2" style={{ width: "50%" }}/>
          </div>
          <div className="text-xs text-mute mt-1">Level 3</div>
        </div>
        
        {/* badges */}
        <div>
          <div className="text-sm mb-2 text-text">Badges</div>
          <div className="flex gap-2">
            <span className="h-8 w-8 rounded-full bg-accent/30 grid place-items-center">🥇</span>
            <span className="h-8 w-8 rounded-full bg-accent2/30 grid place-items-center">🔥</span>
            <span className="h-8 w-8 rounded-full bg-success/30 grid place-items-center">⏱</span>
          </div>
        </div>
        
        {/* leaderboard */}
        <div>
          <div className="text-sm mb-2 text-text">Top Learners</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between">
              <span className="text-mute">🥇 Mya</span>
              <span className="text-accent">1280 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-mute">🥈 Kavin</span>
              <span className="text-accent2">1170 pts</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-mute">🥉 Steph</span>
              <span className="text-success">960 pts</span>
            </li>
          </ul>
        </div>

        {/* study streak */}
        <div>
          <div className="text-sm mb-2 text-text">Study Streak</div>
          <div className="flex gap-1">
            {[1,2,3,4,5,6,7].map((d) => (
              <div 
                key={d} 
                className={`h-8 w-full rounded ${d <= 5 ? 'bg-success/40' : 'bg-line/40'}`}
                title={`Day ${d}`}
              />
            ))}
          </div>
          <div className="text-xs text-mute mt-1">5 day streak 🔥</div>
        </div>
      </div>
    </aside>
  );
}
