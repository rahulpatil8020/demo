import React from 'react';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Experience
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover a new way to manage your digital life with our innovative platform.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200 flex items-center space-x-2 mx-auto">
            <span>Get Started</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white px-4" id="features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="text-blue-600" size={24} />}
              title="Lightning Fast"
              description="Experience blazing fast performance with our optimized platform."
            />
            <FeatureCard
              icon={<Shield className="text-blue-600" size={24} />}
              title="Secure by Design"
              description="Your data is protected with enterprise-grade security measures."
            />
            <FeatureCard
              icon={<Globe className="text-blue-600" size={24} />}
              title="Global Access"
              description="Access your content from anywhere in the world, anytime."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-200">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;