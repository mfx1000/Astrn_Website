import { Monitor, User, Zap } from "lucide-react";

export default function ApplicationsSection() {
  const applications = [
    {
      icon: Monitor,
      title: "Multi-Modal Foundation Models",
      description: "Feed vision and audio into foundation models with verified, rights-cleared synthetic data for comprehensive AI training.",
      borderColor: "hover:border-astrian-teal/50"
    },
    {
      icon: User,
      title: "Humanoid Robotics", 
      description: "Train complex manipulation tasks with first-person video data across diverse real-world environments and scenarios.",
      borderColor: "hover:border-astrian-blue/50"
    },
    {
      icon: Zap,
      title: "Autonomous Systems",
      description: "Capture edge-case behavioral data including night conditions, weather variations, and multi-agent interactions.",
      borderColor: "hover:border-astrian-teal/50"
    }
  ];

  return (
    <section className="py-24 bg-space-black" id="applications">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Powering <span className="gradient-text">Physical AI</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Astrian unlocks the data bottlenecks for next-generation AI systems across critical industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <div 
                key={index}
                className={`bg-white/5 border border-white/10 rounded-2xl p-8 ${app.borderColor} transition-all duration-300 group`}
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">{app.title}</h4>
                <p className="text-gray-400">{app.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
