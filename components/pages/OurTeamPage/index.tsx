"use client";

import React from "react";
import helper from "./helper";

export default function OurTeamPage() {
  const { teamMembers } = helper();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the experienced professionals behind SP INTER SERVICE & SUPPLY Workshop. Our
          leadership team brings decades of combined expertise in offshore
          operations, crew management, and specialized services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 italic">
                Team member photo would appear here
              </p>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-1">{member.name}</h2>
              <p className="text-blue-600 font-medium mb-4">
                {member.position}
              </p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          {`We're always looking for talented professionals to join our growing team. Check out our current openings or send us your CV for future opportunities.`}
        </p>
        <a
          href="/vacancies"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
        >
          View Open Positions
        </a>
      </div>
    </div>
  );
}
