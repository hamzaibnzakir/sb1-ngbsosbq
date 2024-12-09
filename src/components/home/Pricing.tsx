import React from 'react';
import { PricingCard } from '../pricing/PricingCard';

const pricingPlans = [
  {
    name: 'Starter',
    price: 299,
    description: 'Perfect for beginners ready to start their journey',
    features: [
      'Weekly group coaching calls',
      'Basic store setup guide',
      'Essential marketing templates',
      'Access to community forum',
      'Product research framework',
      'Basic supplier connections',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: 599,
    description: 'For serious entrepreneurs ready to scale',
    features: [
      'Everything in Starter, plus:',
      '2 monthly 1-on-1 mentoring calls',
      'Advanced marketing strategies',
      'High-converting product research',
      'Premium supplier network access',
      'Performance tracking tools',
      'Priority email & chat support',
      'Custom growth roadmap'
    ]
  },
  {
    name: 'Scale',
    price: 999,
    description: 'Comprehensive support for rapid scaling',
    features: [
      'Everything in Growth, plus:',
      'Weekly 1-on-1 mentoring calls',
      'Custom marketing campaigns',
      'Direct supplier introductions',
      'Advanced automation setup',
      'Revenue optimization strategy',
      '24/7 VIP support access',
      'Monthly strategy review'
    ]
  }
];

export function Pricing() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Investment Plans
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect plan to accelerate your ecommerce journey
          </p>
        </div>

        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              {...plan}
              featured={index === 1} // Makes the middle plan featured
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            All plans include a 30-day satisfaction guarantee. Need a custom solution?{' '}
            <a
              href="https://wa.me/15089759510"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}