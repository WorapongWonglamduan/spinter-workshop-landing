"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import DelayedLink from "../../DelayedLink";
import helper from "./helper";

export default function HomePage() {
  const { statistics, services, contactInfo } = helper();
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  
  // สร้าง refs แยกก่อน
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // จัดเก็บ refs ใน object ด้วย useMemo
  const sectionRefs = useMemo(() => ({
    hero: heroRef,
    services: servicesRef,
    stats: statsRef,
    cta: ctaRef
  }), [heroRef, servicesRef, statsRef, ctaRef]);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.id = key;
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return (
    <div className="container mx-auto px-4 overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-16 md:py-24"
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 relative">
              <span className="bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">Your Trusted Partner</span> for Offshore Success
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-600"></div>
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
            <DelayedLink
              href="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all inline-block hover:shadow-lg hover:scale-105 group"
              delay={800}
            >
              <span className="flex items-center">
                Our Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </DelayedLink>
          </div>
          <div className="relative h-[400px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600 opacity-10 group-hover:opacity-5 transition-opacity"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Global Reach</h3>
                <p className="text-blue-700">Serving offshore projects worldwide with excellence</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-200 to-transparent opacity-50"></div>
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-yellow-400 opacity-20 group-hover:opacity-30 transition-opacity"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section 
        ref={servicesRef}
        className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg px-8 my-12 shadow-sm"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Tailored Solutions</span> for Project Success
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-600"></div>
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
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-t-4 border-blue-600 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 transform transition-transform hover:rotate-12 hover:scale-110 group-hover:bg-blue-200">
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
              <DelayedLink
                href="/services"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                delay={800}
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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
              </DelayedLink>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        ref={statsRef}
        className="py-16 my-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Why Choose <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">SPinter Workshop</span>
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-blue-600"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With years of experience in the offshore industry, we bring
            unmatched expertise and reliability to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:border-blue-300 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 mb-3 transform transition-transform hover:scale-110">
                {stat.value}
              </div>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section 
        ref={ctaRef}
        className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg px-8 my-12 shadow-lg relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className={`text-center relative z-10 transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Offshore Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our specialized crew and support
            services can enhance your project&apos;s success.
          </p>
          <DelayedLink
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-10 rounded-full transition-all inline-block hover:shadow-lg hover:scale-105 group"
            delay={800}
          >
            <span className="flex items-center">
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </DelayedLink>
        </div>
      </section>

      {/* Footer with Contact Info */}
      <footer className="py-12 border-t border-gray-200 bg-gray-50 rounded-lg mt-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Location
            </h3>
            <p className="text-gray-600">{contactInfo.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </h3>
            <p className="text-gray-600 mb-2">{contactInfo.email}</p>
            <p className="text-gray-600">{contactInfo.phone}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Business Hours
            </h3>
            <p className="text-gray-600 mb-2">
              {contactInfo.businessHours.weekdays}
            </p>
            <p className="text-gray-600">{contactInfo.businessHours.weekend}</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} SPinter Workshop. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
