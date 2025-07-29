export default function ContactSection() {
  return (
    <section className="py-24 bg-space-black border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h3 className="text-3xl lg:text-4xl font-bold">
            Ready to Transform <span className="gradient-text">Physical AI</span>?
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join us in building the future of robotics with infinite, high-quality training data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:investors@astrian.ai" 
              className="gradient-bg text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 font-medium"
            >
              Contact Investors Team
            </a>
            <a 
              href="mailto:partnerships@astrian.ai" 
              className="border border-white/20 text-white px-6 py-2.5 rounded-full hover:border-astrian-teal/50 transition-all duration-300 font-medium"
            >
              Partnership Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
