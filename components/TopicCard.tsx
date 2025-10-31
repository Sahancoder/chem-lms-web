import Link from "next/link";
import { ReactNode } from "react";

export default function TopicCard({
  title, members, courses, href, icon
}: {
  title: string;
  members: number;
  courses: number;
  href: string;
  icon: ReactNode; // pass an SVG (Lucide/Heroicons) or a processed PNG <img>
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-[#1e293b] bg-[#101828]/80
                 backdrop-blur-md p-4 hover:-translate-y-0.5 transition
                 hover:shadow-[0_8px_24px_rgba(0,0,0,.35)]"
    >
      <div className="flex items-start gap-3">
        {/* Clean icon - no background tile */}
        <div className="h-10 w-10 flex items-center justify-center">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-base font-semibold truncate text-text group-hover:text-accent transition-colors">{title}</h4>
          <p className="mt-1 text-xs text-slate-400 flex gap-4">
            <span>👥 {members.toLocaleString()}</span>
            <span>📚 {courses} courses</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
