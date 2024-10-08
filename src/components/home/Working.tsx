import React from 'react';
import { UserPlus, Palette, Code } from 'lucide-react';

const steps  = [
  {
    title: 'Step 1: Sign Up',
    description: 'Create your account with basic information. Its quick and hassle-free, allowing you to get started immediately!',
    icon: UserPlus,
  },
  {
    title: 'Step 2: Customize',
    description: 'Select from our carefully curated templates and personalize your testimonials wall to align perfectly with your brand identity.',
    icon: Palette,
  },
  {
    title: 'Step 3: Integrate',
    description: 'Simply copy and paste the provided HTML code into your website. No coding expertise required—effortless integration!',
    icon: Code,
  },
];

export default function WorkingSection() {
  return (
    <section className="bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 mt-[50px] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          How It Works
        </h2>
        <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
          A simple 3-step process to enhance your website with powerful testimonials!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 border border-gray-700 hover:border-gray-600"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}