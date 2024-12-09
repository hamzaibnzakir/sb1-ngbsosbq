import React from 'react';

const metrics = [
  { id: 1, stat: '1,000+', emphasis: 'Successful Students', rest: 'across the globe' },
  { id: 2, stat: '$50M+', emphasis: 'Revenue Generated', rest: 'by our students' },
  { id: 3, stat: '97%', emphasis: 'Success Rate', rest: 'for committed students' },
  { id: 4, stat: '24/7', emphasis: 'Support Available', rest: 'for all members' },
];

export function Metrics() {
  return (
    <div className="bg-green-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by Growing Businesses Around the World
          </h2>
          <p className="mt-3 text-xl text-green-200 sm:mt-4">
            Our numbers speak for themselves
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.id} className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2">
                <span className="text-lg leading-6 font-medium text-green-200">
                  {metric.emphasis}
                </span>
                <span className="block text-base text-green-100">{metric.rest}</span>
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">{metric.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}