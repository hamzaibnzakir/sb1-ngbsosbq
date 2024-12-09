import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  featured?: boolean;
}

export function PricingCard({ name, price, description, features, featured = false }: PricingCardProps) {
  return (
    <div
      className={`relative p-8 bg-white border rounded-2xl shadow-lg ${
        featured ? 'ring-2 ring-green-600 scale-105' : ''
      }`}
    >
      {featured && (
        <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide text-white bg-green-600">
          Most Popular
        </span>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
        <p className="mt-4 text-gray-500">{description}</p>
        <p className="mt-8">
          <span className="text-4xl font-extrabold text-gray-900">${price}</span>
          <span className="text-base font-medium text-gray-500">/month</span>
        </p>
        <a
          href={`https://wa.me/15089759510?text=Hi,%20I'm%20interested%20in%20the%20${name}%20plan`}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 w-full inline-flex justify-center items-center rounded-lg px-6 py-3 text-base font-medium transition-all duration-200 ${
            featured
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
          }`}
        >
          Chat on WhatsApp
        </a>
      </div>
      <div className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <Check className={`h-6 w-6 ${featured ? 'text-green-500' : 'text-gray-400'}`} />
            </div>
            <p className="ml-3 text-base text-gray-500">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}