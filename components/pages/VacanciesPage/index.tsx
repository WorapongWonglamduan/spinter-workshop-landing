'use client';

import React from "react";
import helper from "./helper";

export default function VacanciesPage() {
  const { vacancies } = helper();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Open Vacancies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our team of offshore professionals. We are constantly looking for
          talented individuals to support our global operations in wind farm,
          oil & gas, and deep-sea shipping industries.
        </p>
      </div>

      <div className="mb-8">
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Current Opportunities</h2>
        </div>
        <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
          {vacancies.map((vacancy) => (
            <div
              key={vacancy.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-800">
                    {vacancy.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {vacancy.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {vacancy.location}
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {vacancy.type}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{vacancy.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {vacancy.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">{`Don't See a Suitable Position?`}</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          {`We're always looking for talented professionals to join our team. Send us your CV and we'll keep it on file for future opportunities.`}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
          Submit Your CV
        </button>
      </div>
    </div>
  );
}
