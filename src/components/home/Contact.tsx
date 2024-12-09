import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Ready to scale your business? Contact us through your preferred channel
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
          <a
            href="https://t.me/brainbox_0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
          >
            <MessageSquare className="h-6 w-6 text-blue-500 mr-3" />
            <span className="text-gray-900 font-medium">Telegram</span>
          </a>

          <a
            href="https://wa.me/15089759510"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
          >
            <Phone className="h-6 w-6 text-green-500 mr-3" />
            <span className="text-gray-900 font-medium">WhatsApp</span>
          </a>

          <a
            href="https://discord.gg/brainbox-ecom-lab-1153608350790062160"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
          >
            <MessageSquare className="h-6 w-6 text-indigo-500 mr-3" />
            <span className="text-gray-900 font-medium">Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
}