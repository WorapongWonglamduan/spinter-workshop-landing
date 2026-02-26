'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import helper from './helper';

export default function TrackRecordPage() {
  const t = useTranslations('trackRecord');
  const { projects } = helper();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#213559]">{t('title')}</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#213559] to-[#263f6b] text-white text-sm font-semibold rounded-full">
                  {project.category}
                </span>
                <span className="text-gray-500 font-medium">{project.year}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#213559]">{project.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
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

      <div className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-center text-[#213559]">{t('globalReach')}</h2>
        <p className="text-center mb-6 text-sm text-gray-600">
          {t('globalReachDescription')}
        </p>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-[350px] bg-[#213559]/5 rounded-lg flex items-center justify-center border border-[#213559]/10">
            <p className="text-gray-500 italic text-sm">{t('mapPlaceholder')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
