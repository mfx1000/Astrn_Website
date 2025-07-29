import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import ApplicationsSection from "@/components/ApplicationsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="bg-space-black text-white font-inter overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <TechnologySection />
      <ApplicationsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 bg-space-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <h2 className="text-xl font-hammersmith gradient-text tracking-wide">ASTRIAN</h2>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Astrian. Building the future of Physical Intelligence.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
