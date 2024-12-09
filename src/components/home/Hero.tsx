import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-white pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none">
            <h1 className="mt-12 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-10 sm:text-5xl lg:mt-20 lg:text-6xl">
              Scale Your <span className="text-green-600">Shopify Store</span> to 7 Figures
            </h1>
            
            <p className="mt-6 text-xl text-gray-500">
              Join over 1,000+ entrepreneurs who have scaled their businesses with our proven mentorship program.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="https://calendly.com/brainbox-ecom/call_session"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-300"
              >
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
            
            <div className="mt-12">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {[
                  ['1,000+', 'Active Students'],
                  ['$50M+', 'Student Revenue'],
                  ['97%', 'Success Rate'],
                  ['24/7', 'Support']
                ].map(([stat, label]) => (
                  <div key={label} className="border-l-2 border-green-200 pl-4">
                    <dt className="text-sm text-gray-500">{label}</dt>
                    <dd className="mt-1 text-2xl font-semibold text-green-600">{stat}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:h-full">
              <img
                className="w-full rounded-2xl shadow-2xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80"
                alt="Entrepreneur success"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}