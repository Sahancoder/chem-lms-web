import MotionFade from "@/components/motion/MotionFade";
import Link from "next/link";
import Image from "next/image";
import TypewriterText from "@/components/TypewriterText";

export default function HomePage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <MotionFade>
        <div className="text-center space-y-6 py-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent2/20 blur-3xl rounded-full"></div>
              <Image 
                src="/website Logo.png" 
                alt="Chem LMS Logo" 
                width={200} 
                height={200}
                className="object-contain relative z-10"
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold min-h-[80px] flex items-center justify-center gap-3">
            <TypewriterText 
              text="Welcome to" 
              speed={80}
              className="text-text"
              loop={true}
              pauseDelay={1500}
            />
            <span className="text-text">Chem LMS</span>
          </h1>
          <p className="text-xl text-mute max-w-2xl mx-auto">
            Your complete Chemistry learning hub with curated videos, resources, notes, and community
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <Link 
              href="/dashboard" 
              className="glass px-8 py-4 hover:bg-panel/80 hover:-translate-y-0.5 transition-all font-semibold text-text text-lg hover:shadow-2xl"
            >
              Get Started →
            </Link>
            <Link 
              href="/videos" 
              className="glass px-8 py-4 hover:bg-panel/80 hover:-translate-y-0.5 transition-all font-semibold text-mute hover:text-text text-lg hover:shadow-2xl"
            >
              Browse Videos
            </Link>
          </div>
        </div>
      </MotionFade>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <MotionFade delay={0.1}>
          <div className="glass p-6 hover:bg-panel/70 transition-all">
            <div className="text-3xl mb-3">📺</div>
            <h2 className="text-xl font-semibold text-text mb-2">Curated Video Lectures</h2>
            <p className="text-mute mb-4">
              Search and watch chemistry lectures from YouTube. Focus on Organic, Physical, and Inorganic chemistry.
            </p>
            <Link href="/videos" className="text-accent hover:text-accent2 transition-colors text-sm">
              Explore videos →
            </Link>
          </div>
        </MotionFade>

        <MotionFade delay={0.15}>
          <div className="glass p-6 hover:bg-panel/70 transition-all">
            <div className="text-3xl mb-3">📚</div>
            <h2 className="text-xl font-semibold text-text mb-2">Resource Library</h2>
            <p className="text-mute mb-4">
              Upload and download PDFs, textbooks, and study materials. Share resources with the community.
            </p>
            <Link href="/resources" className="text-accent hover:text-accent2 transition-colors text-sm">
              Browse resources →
            </Link>
          </div>
        </MotionFade>

        <MotionFade delay={0.2}>
          <div className="glass p-6 hover:bg-panel/70 transition-all">
            <div className="text-3xl mb-3">📝</div>
            <h2 className="text-xl font-semibold text-text mb-2">Personal Notes</h2>
            <p className="text-mute mb-4">
              Write and organize study notes in Markdown. Share publicly or keep them private.
            </p>
            <Link href="/notes" className="text-accent hover:text-accent2 transition-colors text-sm">
              My notes →
            </Link>
          </div>
        </MotionFade>

        <MotionFade delay={0.25}>
          <div className="glass p-6 hover:bg-panel/70 transition-all">
            <div className="text-3xl mb-3">👥</div>
            <h2 className="text-xl font-semibold text-text mb-2">Community Feed</h2>
            <p className="text-mute mb-4">
              Connect with other learners. Share notes, discuss topics, and learn together.
            </p>
            <Link href="/community" className="text-accent hover:text-accent2 transition-colors text-sm">
              Join community →
            </Link>
          </div>
        </MotionFade>
      </div>

      {/* Topics Covered */}
      <MotionFade delay={0.3}>
        <div className="glass p-6">
          <h2 className="text-lg font-semibold text-text mb-4">Topics Covered</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Organic Chemistry',
              'Physical Chemistry',
              'Inorganic Chemistry',
              'Analytical Chemistry',
              'Biochemistry',
              'Chemical Kinetics',
              'Thermodynamics',
              'Electrochemistry'
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full bg-panel/40 text-sm text-mute hover:text-accent hover:bg-panel/60 transition-colors cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </MotionFade>
    </div>
  );
}
