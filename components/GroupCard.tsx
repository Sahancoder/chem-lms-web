import Link from "next/link";

export default function GroupCard({
  title,
  members,
  courses,
  href,
  icon = "📚"
}: {
  title: string;
  members: number;
  courses: number;
  href: string;
  icon?: string;
}) {
  return (
    <Link 
      href={href} 
      className="glass p-6 hover:bg-panel/70 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Large Icon at Top */}
      <div className="mb-4">
        <span className="text-6xl block group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
      </div>
      
      {/* Title and Badge */}
      <div className="flex items-start justify-between mb-4">
        <h4 className="font-semibold text-lg text-text group-hover:text-accent transition-colors leading-tight">
          {title}
        </h4>
        <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full flex-shrink-0 ml-2">
          Open
        </span>
      </div>
      
      {/* Stats */}
      <div className="flex gap-5 text-sm text-mute">
        <span className="flex items-center gap-1.5">
          <span className="text-base">👥</span>
          <span className="font-medium">{members.toLocaleString()}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-base">📚</span>
          <span className="font-medium">{courses} courses</span>
        </span>
      </div>
    </Link>
  );
}
