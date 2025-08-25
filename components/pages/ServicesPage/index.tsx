'use client';

import React from 'react';
import Link from 'next/link';
import helper from './helper';

export default function ServicesPage() {
  const { services, industries } = helper();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We provide comprehensive crew supply and support services for offshore operations in the wind farm, oil & gas, and deep-sea shipping industries.
        </p>
      </div>

      {/* Main Services */}
      <div className="space-y-16">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 flex flex-col items-center md:items-start">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">{service.title}</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <h3 className="font-semibold mb-3">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Industries We Serve */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 italic">Industry image would appear here</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Specialized Crew for Your Project?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us today to discuss your specific requirements and how our services can support your offshore operations.
        </p>
        <Link 
          href="/contact" 
          className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
