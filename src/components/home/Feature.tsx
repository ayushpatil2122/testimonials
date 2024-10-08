import React from 'react';
import { Zap, Palette, Code, Smartphone, Video, RefreshCw } from 'lucide-react';

const features = [
  {
    title: 'Easy Setup',
    description: 'Quickly set up your testimonial wall in just a few minutes with our user-friendly interface.',
    icon: Zap,
  },
  {
    title: 'Customizable Design',
    description: 'Easily customize colors, fonts, and layout to match your brand identity perfectly.',
    icon: Palette,
  },
  {
    title: 'No Coding Required',
    description: 'Embed your testimonial wall with a simple HTML code — no development skills needed.',
    icon: Code,
  },
  {
    title: 'Mobile Friendly',
    description: 'Your testimonials will look stunning on any device, ensuring a seamless experience for all users.',
    icon: Smartphone,
  },
  {
    title: 'Video Testimonials',
    description: 'Integrate video testimonials effortlessly to add a personal and authentic touch.',
    icon: Video,
  },
  {
    title: 'Real-Time Updates',
    description: 'Any changes or updates will be reflected instantly on your website, no manual syncing needed.',
    icon: RefreshCw,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-900 p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Powerful Features to Elevate Your Brand
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-800 bg-opacity-75 p-8 rounded-2xl shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-700 hover:bg-opacity-100 border border-gray-700 hover:border-gray-600"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-20 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-300">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}