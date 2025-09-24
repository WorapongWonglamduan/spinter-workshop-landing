"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import DelayedLink from "../../DelayedLink";
import teamHelper from "../OurTeamPage/helper";
import contactHelper from "../ContactPage/helper";
import servicesHelper from "../ServicesPage/helper";

export default function HomePage() {
  const { useContactForm } = contactHelper();
  const { formData, handleChange, handleSubmit } = useContactForm();
  // สร้าง refs แยกก่อน
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();

    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Width Banner */}
      <section
        ref={heroRef}
        id="home"
        className="relative w-full h-[20vh] md:h-[40vh] lg:h-[50vh] xl:h-screen"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-[#213559]">
          <div className="absolute inset-0 bg-[url('/images/SP-COMPANY-PROFILE-2025-01.png')] bg-cover"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#182a45]/40"></div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#263f6b] rounded-tl-3xl"></div>
                <Image
                  src="/images/SP-COMPANY-PROFILE-2025-05.png"
                  alt="SP Inter Service & Supply Workshop"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl relative z-1 w-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#213559] rounded-br-3xl"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block">
                <h2 className="text-4xl font-bold text-[#213559] border-b-4 border-[#263f6b] pb-2 mb-2">
                  COMPANY PROFILE
                </h2>
              </div>
              <h3 className="text-2xl font-semibold text-[#263f6b]">
                SP INTER SERVICE & SUPPLY Co.,Ltd
              </h3>
              <p className="text-gray-700">
                SP INTER SERVICE & SUPPLY Co.,Ltd was established in 2015 in
                Thailand to provide high-quality welding to customers worldwide.
                After successfully exporting welders to customers, our founder
                began to start a welding workshop rental service in 2020.
              </p>
              <p className="text-gray-700">
                Moreover, we believe customer satisfaction is more important
                than large profits. With customer satisfaction comes repeat
                business, it makes our company have more customers and works
                which assist our company growth.
              </p>
              <div className="pt-4">
                <DelayedLink
                  href="/about"
                  className="bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-3 px-8 rounded-md transition-all inline-block hover:shadow-lg"
                  delay={800}
                  showLoading={true}
                >
                  LEARN MORE
                </DelayedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Goal Section */}
      <section
        id="goal"
        className="py-16 bg-gradient-to-b from-[#213559] to-[#263f6b] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/SP-COMPANY-PROFILE-2025-11.png"
            alt="Company Goal Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-1">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6 relative inline-block">
              COMPANY GOAL
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-white"></div>
            </h2>
            <div className="bg-[#213559]/80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                &ldquo;SAFETY IS AN INTEGRAL PART OF OUR COMPANY&rdquo;
              </h3>
              <p className="text-lg mb-6">
                To provide our customers with skilled welders and welding
                workshop rental service that exceed our customers expectations
                while maintaining the safety of personal and plant equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Services Section */}
      <section className="py-16 bg-gray-100" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#213559] mb-2">
              COMPANY SERVICES
            </h2>
            <div className="w-24 h-1 bg-[#263f6b] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive crew supply and support services for
              offshore operations in the wind farm, oil & gas, and deep-sea
              shipping industries.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-[url('/images/SP-COMPANY-PROFILE-2025-07.png')] bg-cover bg-center"></div>
              <div className="p-6 bg-[#213559] text-white">
                <h3 className="text-xl font-bold mb-4">WELDER SUPPLY</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Welder Superintendent</li>
                  <li>Welder Foreman</li>
                  <li>Welders</li>
                  <li>Fitter/Spacer</li>
                  <li>Auto Welder and Structure</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-[url('/images/SP-COMPANY-PROFILE-2025-08.png')] bg-cover bg-center"></div>
              <div className="p-6 bg-[#263f6b] text-white">
                <h3 className="text-xl font-bold mb-4">
                  TECHNICAL CAPABILITIES
                </h3>
                <p className="mb-4">Manpower 120 persons+</p>
                <p>
                  Our team consists of highly skilled professionals with
                  extensive experience in welding and fabrication for offshore
                  and industrial projects.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="space-y-8 mb-12">
            {servicesHelper()
              .services.slice(0, 2)
              .map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 flex flex-col items-center md:items-start">
                      <div className="mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-[#213559]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={service.iconPath}
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-center md:text-left text-[#213559]">
                        {service.title}
                      </h3>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <h4 className="font-semibold mb-3 text-[#263f6b]">
                        Key Features:
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Industries We Serve */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-[#213559]">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesHelper().industries.map((industry) => (
                <div
                  key={industry.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
                >
                  <div className="h-40 bg-[#f0f4f8] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#213559] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-[#213559]">
                      {industry.name}
                    </h4>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <DelayedLink
              href="/services"
              className="bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-3 px-8 rounded-md transition-all inline-block hover:shadow-lg"
              delay={800}
              showLoading={true}
            >
              VIEW ALL SERVICES
            </DelayedLink>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#213559] mb-2">OUR TEAM</h2>
            <div className="w-24 h-1 bg-[#263f6b] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals behind SP INTER SERVICE &
              SUPPLY Workshop. Our leadership team brings decades of combined
              expertise in offshore operations, crew management, and specialized
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamHelper()
              .teamMembers.slice(0, 3)
              .map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <div className="h-64 bg-[#f0f4f8] flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-[#213559] flex items-center justify-center text-white text-4xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-1 text-[#213559]">
                      {member.name}
                    </h2>
                    <p className="text-[#263f6b] font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-12 text-center">
            <DelayedLink
              href="/our-team"
              className="bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-3 px-8 rounded-md transition-all inline-block hover:shadow-lg"
              delay={800}
              showLoading={true}
            >
              VIEW ALL TEAM MEMBERS
            </DelayedLink>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#213559] mb-2">
              CONTACT US
            </h2>
            <div className="w-24 h-1 bg-[#263f6b] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for inquiries about our services,
              career opportunities, or any other questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - Simplified */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#213559]">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#213559]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#213559]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#213559]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#213559]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#213559]"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-3 px-4 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-[#213559] text-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 mt-1"
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
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="mt-1">
                      60 Paya Lebar Road, #11-11 Paya Lebar Square, Singapore
                      409051
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="mt-1">contact@spinterworkshop.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="mt-1">+65 6123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-lg">Business Hours</h4>
                    <p className="mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <DelayedLink
                  href="/contact"
                  className="bg-white text-[#213559] hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-colors inline-block w-full text-center"
                  delay={800}
                  showLoading={true}
                >
                  VIEW FULL CONTACT PAGE
                </DelayedLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
