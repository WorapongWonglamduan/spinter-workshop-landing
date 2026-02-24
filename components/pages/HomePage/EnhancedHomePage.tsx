"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DelayedLink from "../../DelayedLink";
import AnimatedCard from "../../AnimatedCard";
import WorkshopGallery from "../../WorkshopGallery";
import WorkshopShowcase from "../../WorkshopShowcase";
import {
  ParallaxScroll,
  ScrollReveal,
  ScrollRotate,
  ScrollScale,
  ScrollProgressBar,
  ScrollFade,
  ScrollPerspective,
} from "../../ScrollAnimations";
import teamHelper from "../OurTeamPage/helper";
import contactHelper from "../ContactPage/helper";
import Slider from "react-slick";
import EnhancedHero from "./EnhancedHero";

export default function EnhancedHomePage() {
  const { useContactForm } = contactHelper();
  const { formData, handleChange, handleSubmit } = useContactForm();

  // Workshop training photos
  const workshopPhotos = [
    "/images/photos/LINE_ALBUM_7169_260224_1.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_5.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_10.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_15.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_20.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_25.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_30.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_35.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_40.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_45.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_50.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_55.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_60.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_65.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_70.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_75.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_80.jpg",
  ];

  // Workshop facility photos
  const facilityPhotos = [
    "/images/photos/LINE_ALBUM_7169_260224_2.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_3.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_4.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_6.jpg",
  ];

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Company Profile Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image with Parallax Animation */}
            <ParallaxScroll offset={100} className="w-full md:w-1/2">
              <ScrollScale scaleRange={[0.9, 1.05]}>
                <div className="relative image-zoom rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/SP-COMPANY-PROFILE-2025-02.png"
                    alt="SP Inter Service & Supply Workshop"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </ScrollScale>
            </ParallaxScroll>

            {/* Content with Scroll Reveal */}
            <ScrollReveal
              direction="right"
              className="w-full md:w-1/2 space-y-6"
            >
              <div className="inline-block">
                <h2 className="text-5xl font-bold text-[#213559] mb-2 animated-underline">
                  COMPANY PROFILE
                </h2>
                <div className="w-24 h-1 bg-[#263f6b] mt-4"></div>
              </div>
              <h3 className="text-3xl font-semibold text-[#263f6b]">
                SP INTER SERVICE & SUPPLY Co.,Ltd
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                SP INTER SERVICE & SUPPLY Co.,Ltd was established in 2015 in
                Thailand to provide high-quality welding to customers worldwide.
                After successfully exporting welders to customers, our founder
                began to start a welding workshop rental service in 2020.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Moreover, we believe customer satisfaction is more important
                than large profits. With customer satisfaction comes repeat
                business, it makes our company have more customers and works
                which assist our company growth.
              </p>
              <div className="pt-4">
                <DelayedLink
                  href="/about"
                  className="btn-smooth bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-4 px-10 rounded-md inline-block shadow-lg text-lg"
                  delay={800}
                  showLoading={true}
                >
                  LEARN MORE
                </DelayedLink>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Goal Section */}
      <section className="py-24 bg-gradient-to-br from-[#213559] via-[#263f6b] to-[#182a45] text-white relative overflow-hidden">
        <ParallaxScroll offset={-80} className="absolute inset-0 opacity-10">
          <Image
            src="/images/SP-COMPANY-PROFILE-2025-11.png"
            alt="Company Goal Background"
            fill
            className="object-cover object-center"
            priority
          />
        </ParallaxScroll>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollPerspective className="text-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              COMPANY GOAL
            </h2>
            <div className="w-32 h-1 bg-white mx-auto mb-12"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="backdrop-blur-custom bg-white/10 p-12 rounded-2xl shadow-2xl border border-white/20"
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
                &ldquo;SAFETY IS AN INTEGRAL PART OF OUR COMPANY&rdquo;
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed">
                To provide our customers with skilled welders and welding
                workshop rental service that exceed our customers expectations
                while maintaining the safety of personal and plant equipment.
              </p>
            </motion.div>
          </ScrollPerspective>
        </div>
      </section>

      {/* Workshop Showcase */}
      <WorkshopShowcase />

      {/* Company Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#213559] mb-4">
              COMPANY SERVICES
            </h2>
            <div className="w-32 h-1 bg-[#263f6b] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive welding solutions tailored to your needs
            </p>
          </ScrollReveal>

          {/* SP Welding Workshop */}
          <ScrollScale scaleRange={[0.95, 1]} className="mb-20">
            <div className="card-hover bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 bg-gradient-to-r from-[#213559] to-[#263f6b] text-white">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="flex flex-col items-center justify-center w-20 h-20"
                    >
                      <div className="text-3xl font-bold">SP</div>
                      <div className="w-16 h-0.5 bg-white mt-1"></div>
                    </motion.div>
                    <h3 className="text-4xl font-bold">WELDING WORKSHOP</h3>
                  </div>
                </div>
              </div>

              <div className="p-10">
                <div className="mb-10">
                  <h4 className="text-2xl font-bold mb-6 text-[#213559]">
                    Provide Workshop for rental
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <li className="flex items-center text-gray-700 text-lg">
                      <span className="w-2 h-2 bg-[#213559] rounded-full mr-3"></span>
                      Welding Machine
                    </li>
                    <li className="flex items-center text-gray-700 text-lg">
                      <span className="w-2 h-2 bg-[#213559] rounded-full mr-3"></span>
                      Consumables
                    </li>
                    <li className="flex items-center text-gray-700 text-lg">
                      <span className="w-2 h-2 bg-[#213559] rounded-full mr-3"></span>
                      And more...
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {["BAY", "OVERVIEW", "STORAGE", "MEETING ROOM"].map(
                    (item, index) => (
                      <ScrollRotate key={item} rotation={5}>
                        <AnimatedCard delay={index * 0.1}>
                          <div className="card-hover bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md">
                            <div className="h-48 relative overflow-hidden">
                              <Image
                                src={facilityPhotos[index]}
                                alt={item}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#213559]/90 to-transparent flex items-end justify-center pb-4">
                                <p className="text-white text-lg font-semibold">
                                  {item}
                                </p>
                              </div>
                            </div>
                            <div className="p-4 bg-gradient-to-r from-[#213559] to-[#263f6b] text-white text-center font-bold text-lg">
                              {item}
                            </div>
                          </div>
                        </AnimatedCard>
                      </ScrollRotate>
                    ),
                  )}
                </div>
              </div>
            </div>
          </ScrollScale>

          {/* Our Clients */}
          <ScrollFade className="mb-12">
            <div className="card-hover rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 bg-gradient-to-r from-[#213559] to-[#263f6b] text-white">
                <h3 className="text-4xl font-bold">OUR CLIENTS</h3>
              </div>

              <div className="p-10 bg-gradient-to-br from-gray-50 to-white">
                <Slider
                  dots={true}
                  infinite={true}
                  speed={800}
                  slidesToShow={3}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                  cssEase="ease-in-out"
                  pauseOnHover={true}
                  centerMode={false}
                  arrows={false}
                  swipe={true}
                  waitForAnimate={true}
                  responsive={[
                    {
                      breakpoint: 1024,
                      settings: { slidesToShow: 2, slidesToScroll: 1 },
                    },
                    {
                      breakpoint: 640,
                      settings: { slidesToShow: 1, slidesToScroll: 1 },
                    },
                  ]}
                  className="client-slider"
                >
                  {[
                    {
                      logo: "/images/icons/LT-hydrocarbon-engineering-limited-logo.png",
                      name: "L&T Hydrocarbon Engineering",
                      full: "Larsen & Toubro Limited",
                      desc: "A leading multinational conglomerate with businesses in engineering, construction, technology and financial services.",
                    },
                    {
                      logo: "/images/icons/saudi-aramco-png.png",
                      name: "Saudi Aramco",
                      full: "SAUDI ARAMCO",
                      desc: "Largest integrated energy and chemical companies, creating value across the hydrocarbon chain, and delivering societal benefits.",
                    },
                    {
                      logo: "/images/icons/mermaid-maritime-logo.png",
                      name: "Mermaid Maritime",
                      full: "MERMAID MARITIME",
                      desc: "A leading international subsea and offshore drilling services company with headquarters in Thailand.",
                    },
                    {
                      logo: "/images/icons/sapurakencana_total-logo-png.png",
                      name: "Sapura Kencana",
                      full: "SAPURA KENCANA",
                      desc: "The Group's spectrum of capabilities covers exploration through to production.",
                    },
                    {
                      logo: "/images/icons/logosapura-energy.png",
                      name: "Sapura Energy",
                      full: "Sapura Energy",
                      desc: "It's a global integrated energy services provider operating across the entire upstream value chain, including renewables.",
                    },
                    {
                      logo: "/images/icons/chevron-corporation-logo.png",
                      name: "Chevron",
                      full: "Chevron Thailand",
                      desc: "Chevron is a global energy company operating in Thailand since 1948.",
                    },
                    {
                      logo: "/images/icons/vantris-energy-logo-1x.png",
                      name: "Vantris Energy",
                      full: "Vantris Energy",
                      desc: "Energy services and solutions provider.",
                    },
                  ].map((client) => (
                    <div
                      key={client.name}
                      className="client-logo-container px-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="group client-logo bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                      >
                        <div className="h-32 mb-6 flex items-center justify-center">
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={300}
                            height={128}
                            className="max-h-32 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="client-logo-text text-center">
                          <h4 className="text-xl font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                            {client.full}
                          </h4>
                          <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300 line-clamp-3">
                            {client.desc}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </ScrollFade>

          <ScrollReveal direction="up" className="text-center">
            <DelayedLink
              href="/services"
              className="btn-smooth bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-4 px-10 rounded-md inline-block shadow-lg text-lg"
              delay={800}
              showLoading={true}
            >
              VIEW ALL SERVICES
            </DelayedLink>
          </ScrollReveal>
        </div>
      </section>

      {/* Workshop Training Gallery */}
      <WorkshopGallery
        photos={workshopPhotos}
        title="WELDING WORKSHOP TRAINING"
        description="Our professional welding training programs - Hands-on experience with skilled instructors and industry-standard equipment"
      />

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#213559] mb-4">OUR TEAM</h2>
            <div className="w-32 h-1 bg-[#263f6b] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals behind SP INTER SERVICE &
              SUPPLY Workshop. Our leadership team brings decades of combined
              expertise in offshore operations, crew management, and specialized
              services.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamHelper()
              .teamMembers.slice(0, 3)
              .map((member, index) => (
                <ParallaxScroll key={member.id} offset={30}>
                  <AnimatedCard delay={index * 0.15}>
                    <div className="card-hover bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div className="h-72 bg-gradient-to-br from-[#f0f4f8] to-[#dbeafe] flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="w-40 h-40 rounded-full bg-gradient-to-br from-[#213559] to-[#263f6b] flex items-center justify-center text-white text-5xl font-bold shadow-2xl"
                        >
                          {member.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </motion.div>
                      </div>
                      <div className="p-8">
                        <h2 className="text-2xl font-bold mb-2 text-[#213559]">
                          {member.name}
                        </h2>
                        <p className="text-[#263f6b] font-semibold mb-4 text-lg">
                          {member.position}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                </ParallaxScroll>
              ))}
          </div>

          <ScrollReveal direction="up" className="mt-16 text-center">
            <DelayedLink
              href="/our-team"
              className="btn-smooth bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-4 px-10 rounded-md inline-block shadow-lg text-lg"
              delay={800}
              showLoading={true}
            >
              VIEW ALL TEAM MEMBERS
            </DelayedLink>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#213559] mb-4">
              CONTACT US
            </h2>
            <div className="w-32 h-1 bg-[#263f6b] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for inquiries about our services,
              career opportunities, or any other questions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollReveal direction="left">
              <div className="card-hover bg-white rounded-2xl shadow-xl p-10">
                <h3 className="text-3xl font-bold mb-8 text-[#213559]">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-gray-700 font-semibold mb-2 text-lg"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213559] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-gray-700 font-semibold mb-2 text-lg"
                      >
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213559] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-semibold mb-2 text-lg"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213559] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-semibold mb-2 text-lg"
                    >
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213559] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-semibold mb-2 text-lg"
                    >
                      Message*
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#213559] focus:border-transparent transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-smooth w-full bg-[#213559] hover:bg-[#263f6b] text-white font-bold py-4 px-8 rounded-lg shadow-lg text-lg"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ParallaxScroll offset={50}>
              <ScrollReveal direction="right">
                <div className="card-hover bg-gradient-to-br from-[#213559] to-[#263f6b] rounded-2xl shadow-xl p-10 text-white h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-8">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
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
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Address</h4>
                        <p className="text-white/90">
                          60 Paya Lebar Road, #11-11 Paya Lebar Square,
                          Singapore 409051
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Email</h4>
                        <p className="text-white/90">
                          contact@spinterworkshop.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Phone</h4>
                        <p className="text-white/90">+65 6123 4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Business Hours
                        </h4>
                        <p className="text-white/90">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-white/90">
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </ParallaxScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
