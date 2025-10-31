import MotionFade from "@/components/motion/MotionFade";
import { Heading, SectionTitle } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import ProcessIcon from "@/components/ProcessIcon";

// Simulate async data fetch - replace with your Supabase query
async function getDashboardData() {
  return {
    topics: [
      { 
        title: "Organic Chemistry",
        description: "Study carbon compounds, reactions, and synthesis mechanisms",
        members: 85000,
        courses: 12,
        progress: 65,
        color: "accent",
        href: "/videos?topic=Organic+Chemistry"
      },
      { 
        title: "Physical Chemistry",
        description: "Explore thermodynamics, kinetics, and quantum mechanics",
        members: 24515,
        courses: 8,
        progress: 40,
        color: "accent2",
        href: "/videos?topic=Physical+Chemistry"
      },
      { 
        title: "Inorganic Chemistry",
        description: "Learn about metals, coordination compounds, and crystal structures",
        members: 77500,
        courses: 10,
        progress: 80,
        color: "emerald-400",
        href: "/videos?topic=Inorganic+Chemistry"
      },
      { 
        title: "Analytical Chemistry",
        description: "Master separation techniques and quantitative analysis",
        members: 48000,
        courses: 16,
        progress: 55,
        color: "purple-400",
        href: "/videos?topic=Analytical+Chemistry"
      },
      { 
        title: "Biochemistry",
        description: "Understand biological molecules and metabolic pathways",
        members: 62815,
        courses: 14,
        progress: 72,
        color: "pink-400",
        href: "/videos?topic=Biochemistry"
      },
      { 
        title: "Chemical Kinetics",
        description: "Study reaction rates and mechanisms",
        members: 31400,
        courses: 6,
        progress: 45,
        color: "orange-400",
        href: "/videos?topic=Chemical+Kinetics"
      },
    ],
    stats: {
      videosWatched: 24,
      notesCreated: 12,
      resourcesDownloaded: 8,
      studyHours: 47,
      completionRate: 68,
      currentStreak: 5
    }
  };
}

export default async function DashboardPage() {
  const { topics, stats } = await getDashboardData();

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Analytics Overview */}
      <MotionFade>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text mb-2">
            Learning Dashboard
          </h1>
          <p className="text-mute">Track your chemistry learning progress and explore topics</p>
        </div>
      </MotionFade>

      {/* Stats Grid - Analytics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <MotionFade delay={0.05}>
          <Card hover>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-3">
                <ProcessIcon src="/Videos Icon.png" size={24} />
              </div>
              <p className="text-2xl font-bold text-accent mb-1">{stats.videosWatched}</p>
              <p className="text-xs text-mute">Videos</p>
            </div>
          </Card>
        </MotionFade>
        
        <MotionFade delay={0.08}>
          <Card hover>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-accent2/20 to-accent2/10 flex items-center justify-center mb-3">
                <ProcessIcon src="/Notes Icon.png" size={24} />
              </div>
              <p className="text-2xl font-bold text-accent2 mb-1">{stats.notesCreated}</p>
              <p className="text-xs text-mute">Notes</p>
            </div>
          </Card>
        </MotionFade>
        
        <MotionFade delay={0.11}>
          <Card hover>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 flex items-center justify-center mb-3">
                <ProcessIcon src="/Resources Icon.png" size={24} />
              </div>
              <p className="text-2xl font-bold text-emerald-400 mb-1">{stats.resourcesDownloaded}</p>
              <p className="text-xs text-mute">Resources</p>
            </div>
          </Card>
        </MotionFade>

        <MotionFade delay={0.14}>
          <Card hover>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center mb-3">
                <span className="text-2xl">⏱️</span>
              </div>
              <p className="text-2xl font-bold text-purple-400 mb-1">{stats.studyHours}h</p>
              <p className="text-xs text-mute">Study Time</p>
            </div>
          </Card>
        </MotionFade>

        <MotionFade delay={0.17}>
          <Card hover>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/10 flex items-center justify-center mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <p className="text-2xl font-bold text-pink-400 mb-1">{stats.completionRate}%</p>
              <p className="text-xs text-mute">Completed</p>
            </div>
          </Card>
        </MotionFade>

        <MotionFade delay={0.20}>
          <Card hover>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/10 flex items-center justify-center mb-3">
                <span className="text-2xl">🔥</span>
              </div>
              <p className="text-2xl font-bold text-orange-400 mb-1">{stats.currentStreak}</p>
              <p className="text-xs text-mute">Day Streak</p>
            </div>
          </Card>
        </MotionFade>
      </div>

      {/* Browse Topics Section */}
      <div>
        <MotionFade delay={0.23}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <SectionTitle>Browse Topics</SectionTitle>
              <p className="text-sm text-mute mt-1">Click on any topic to start learning</p>
            </div>
          </div>
        </MotionFade>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <MotionFade key={topic.title} delay={0.26 + i * 0.04}>
              <Link
                href={topic.href}
                className="group glass p-6 hover:bg-panel/70 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative overflow-hidden block"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent2/0 group-hover:from-accent/5 group-hover:to-accent2/5 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Title */}
                  <h4 className="text-xl font-bold text-text group-hover:text-accent transition-colors mb-2">
                    {topic.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-mute mb-4 line-clamp-2">
                    {topic.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-mute">Your Progress</span>
                      <span className="text-xs font-semibold text-accent">{topic.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-panel/60 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${topic.color} to-${topic.color}/70 rounded-full transition-all duration-500`}
                        style={{ width: `${topic.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Stats Row */}
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-border/30">
                    <div className="flex items-center gap-4">
                      <span className="text-mute">{topic.members.toLocaleString()} learners</span>
                      <span className="text-mute">{topic.courses} courses</span>
                    </div>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </MotionFade>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <MotionFade delay={0.5}>
        <div>
          <SectionTitle className="mb-4">Quick Actions</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/videos" 
              className="group glass p-5 hover:bg-panel/70 transition-all hover:-translate-y-0.5 hover:shadow-xl text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ProcessIcon src="/Videos Icon.png" size={28} />
              </div>
              <p className="font-semibold text-sm text-text group-hover:text-accent transition-colors mb-1">Watch Lectures</p>
              <p className="text-xs text-mute">Browse videos</p>
            </Link>
            
            <Link 
              href="/notes" 
              className="group glass p-5 hover:bg-panel/70 transition-all hover:-translate-y-0.5 hover:shadow-xl text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-accent2/20 to-accent2/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ProcessIcon src="/Notes Icon.png" size={28} />
              </div>
              <p className="font-semibold text-sm text-text group-hover:text-accent2 transition-colors mb-1">My Notes</p>
              <p className="text-xs text-mute">Study notes</p>
            </Link>
            
            <Link 
              href="/resources" 
              className="group glass p-5 hover:bg-panel/70 transition-all hover:-translate-y-0.5 hover:shadow-xl text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ProcessIcon src="/Resources Icon.png" size={28} />
              </div>
              <p className="font-semibold text-sm text-text group-hover:text-emerald-400 transition-colors mb-1">Resources</p>
              <p className="text-xs text-mute">Study materials</p>
            </Link>
            
            <Link 
              href="/community" 
              className="group glass p-5 hover:bg-panel/70 transition-all hover:-translate-y-0.5 hover:shadow-xl text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ProcessIcon src="/Community Icon.png" size={28} />
              </div>
              <p className="font-semibold text-sm text-text group-hover:text-purple-400 transition-colors mb-1">Community</p>
              <p className="text-xs text-mute">Discussions</p>
            </Link>
          </div>
        </div>
      </MotionFade>
    </div>
  );
}

