import NeuralVisualization from "./NeuralVisualization";

export default function TechnologySection() {
  return (
    <section className="py-24 bg-space-black relative" id="technology">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold gradient-text">
                Neural Trajectory Synthesis
              </h3>
              <h4 className="text-xl text-gray-300 font-medium">
                The First Technology to Generate Infinite Photorealistic Robot Interaction Data
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Our proprietary Physics-Aware Video Foundation Model generates pixel-perfect robot interaction videos from single frames, understanding complex physics like liquids, deformation, and contact dynamics that traditional simulation can't capture.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-2 border-astrian-teal pl-6">
                <h5 className="font-semibold text-white mb-2">HyperRealistic World Simulator</h5>
                <p className="text-gray-400 text-sm">Generates pixel-perfect robot interaction videos with complex physics understanding</p>
              </div>
              <div className="border-l-2 border-astrian-blue pl-6">
                <h5 className="font-semibold text-white mb-2">Action Extraction Engine</h5>
                <p className="text-gray-400 text-sm">Converts synthetic videos into precise motor trajectories and control policies</p>
              </div>
              <div className="border-l-2 border-astrian-teal pl-6">
                <h5 className="font-semibold text-white mb-2">Embodiment Adaptation Layer</h5>
                <p className="text-gray-400 text-sm">Instantly adapts to any robot morphology with multi-viewpoint consistency</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Neural Network Visualization */}
          <div className="relative flex justify-center">
            <NeuralVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}
