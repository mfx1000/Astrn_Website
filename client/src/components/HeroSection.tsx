import ParticleBackground from "./ParticleBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden" id="about">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                The Training Data Engine for 
                <span className="gradient-text"> Physical Intelligence</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Building the world's first Neural Trajectory Factory - generating infinite, high-quality training data for physical AI systems through breakthrough neural trajectory synthesis.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:investors@astrian.ai" 
                className="gradient-bg text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 text-center font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Right Content - Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-astrian-teal/20 to-astrian-blue/20 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-bg rounded-full flex items-center justify-center animate-pulse-soft">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 19H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <p className="text-gray-400 font-medium">Robot Training Demo Video</p>
                <p className="text-sm text-gray-500">Neural trajectory learning in unseen environments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
