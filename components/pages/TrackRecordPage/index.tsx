'use client';

import React from 'react';
import helper from './helper';

export default function TrackRecordPage() {
  const { projects } = helper();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Track Record</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We have a proven history of delivering exceptional crew and support services for major projects worldwide.
          Below are some highlights from our extensive portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                  {project.category}
                </span>
                <span className="text-gray-500 font-medium">{project.year}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Global Reach</h2>
        <p className="text-center mb-8">
          We have successfully completed projects across multiple continents, providing specialized crew and support services in challenging environments.
        </p>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-[400px] bg-blue-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 italic">World map visualization would appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
