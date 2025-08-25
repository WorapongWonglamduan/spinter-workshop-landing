"use client";

import Link from "next/link";
import helper from "./helper";

export default function HomePage() {
  const { statistics, services, contactInfo } = helper();

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
              Your Trusted Partner for Offshore Success
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-600">
              Specialized Crew for Wind Farm, Oil & Gas, and Deep-Sea Shipping
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              Welcome to SPinter Workshop – Your Trusted Partner in Crew Supply
              & Project Support. We specialize in providing top-tier crew and
              manpower solutions for the demanding wind farm, oil & gas, and
              deep-sea shipping industries.
            </p>
            <Link
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
            >
              Our Services
            </Link>
          </div>
          <div className="relative h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 italic">Hero image would appear here</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50 rounded-lg px-8 my-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Tailored Solutions for Project Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond crew supply, we offer a full suite of services to support
            your projects, encompassing vessel operations, maintenance, marine
            services, and uninterrupted catering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={service.icon}
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 my-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose SPinter Workshop
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With years of experience in the offshore industry, we bring
            unmatched expertise and reliability to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white rounded-lg px-8 my-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Offshore Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our specialized crew and support
            services can enhance your project&apos;s success.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer with Contact Info */}
      <footer className="py-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Location</h3>
            <p className="text-gray-600">{contactInfo.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">{contactInfo.email}</p>
            <p className="text-gray-600">{contactInfo.phone}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <p className="text-gray-600 mb-2">
              {contactInfo.businessHours.weekdays}
            </p>
            <p className="text-gray-600">{contactInfo.businessHours.weekend}</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} SPinter Workshop. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
