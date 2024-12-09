import React from 'react';
import { BookOpen, Users, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    name: 'Expert Mentorship',
    description: 'Get 1-on-1 guidance from successful 7-figure store owners',
    icon: BookOpen,
  },
  {
    name: 'Proven Framework',
    description: 'Follow our battle-tested system for scaling Shopify stores',
    icon: TrendingUp,
  },
  {
    name: 'Community Support',
    description: 'Join an exclusive network of ambitious entrepreneurs',
    icon: Users,
  },
  {
    name: 'Guaranteed Results',
    description: 'We stand behind our program with a 30-day guarantee',
    icon: Award,
  },
];

export function Features() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Brainbox Ecom Lab?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We provide everything you need to build and scale your Shopify business
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                <div className="h-12 w-12 rounded-md bg-green-600 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}