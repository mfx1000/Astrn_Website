import GrainyBackground from "./GrainyBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden" id="about">
      <GrainyBackground />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                The Training Data Engine for 
                <span className="gradient-text"> Physical Intelligence</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Building the world's first Neural Trajectory Factory - generating infinite, high-quality training data for physical AI systems through breakthrough neural trajectory synthesis.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:investors@astrian.ai" 
                className="gradient-bg text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 text-center font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Right Content - Robot Training Video */}
          <div className="relative">
            <div className="aspect-video rounded-2xl border border-white/10 overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://qxikapaxhmoiouxagyly.supabase.co/storage/v1/object/public/astrian-asset//robotics%20learning%20showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
