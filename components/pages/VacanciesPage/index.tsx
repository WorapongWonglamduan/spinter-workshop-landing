'use client';

import React from "react";
import { useTranslations } from "next-intl";
import helper from "./helper";

export default function VacanciesPage() {
  const t = useTranslations('vacancies');
  const { vacancies } = helper();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#213559]">{t('title')}</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      <div className="mb-6">
        <div className="bg-gradient-to-r from-[#213559] to-[#263f6b] text-white p-3 rounded-t-lg">
          <h2 className="text-lg font-bold">{t('currentOpportunities')}</h2>
        </div>
        <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
          {vacancies.map((vacancy) => (
            <div
              key={vacancy.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <div className="p-5">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-[#213559]">
                    {vacancy.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-[#213559]/10 text-[#213559] text-sm font-semibold rounded-full">
                    {vacancy.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-600">
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

                <p className="text-gray-600 mb-3 text-sm">{vacancy.description}</p>

                <div className="mb-3">
                  <h4 className="font-semibold mb-2 text-sm">{t('requirements')}:</h4>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                    {vacancy.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <button className="bg-gradient-to-r from-[#213559] to-[#263f6b] hover:from-[#263f6b] hover:to-[#213559] text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                  {t('applyButton')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 text-center border border-gray-200">
        <h2 className="text-xl font-bold mb-3 text-[#213559]">{t('noPositionTitle')}</h2>
        <p className="mb-4 max-w-xl mx-auto text-sm text-gray-600">
          {t('noPositionDescription')}
        </p>
        <button className="bg-gradient-to-r from-[#213559] to-[#263f6b] hover:from-[#263f6b] hover:to-[#213559] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
          {t('submitCVButton')}
        </button>
      </div>
    </div>
  );
}
