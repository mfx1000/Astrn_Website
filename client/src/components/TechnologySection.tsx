import ASCIIIntelligence from "./ASCIIIntelligence";

export default function TechnologySection() {
  return (
    <section className="py-24 bg-space-black relative" id="technology">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold gradient-text">
                Neural Trajectory Synthesis
              </h3>
              <h4 className="text-lg text-gray-300 font-medium">
                The First Technology to Generate Infinite Photorealistic Robot Interaction Data
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Our proprietary Physics-Aware Video Foundation Model generates pixel-perfect robot interaction videos from single frames, understanding complex physics like liquids, deformation, and contact dynamics that traditional simulation can't capture.
              </p>
            </div>
            

          </div>
          
          {/* Right Content - ASCII Intelligence Visualization */}
          <div className="relative flex justify-center">
            <ASCIIIntelligence />
          </div>
        </div>
      </div>
    </section>
  );
}
