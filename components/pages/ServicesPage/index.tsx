"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DelayedLink from "../../DelayedLink";
import AnimatedCard from "../../AnimatedCard";
import { ScrollReveal, ScrollScale, ScrollRotate, ScrollFade } from "../../ScrollAnimations";
import Slider from "react-slick";
import { useTranslations } from "next-intl";
import helper from "./helper";

export default function ServicesSection() {
  const { facilityPhotos, facilities, clients } = helper();
  const t = useTranslations("companyServices");

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#213559] mb-4">
            {t("title")}
          </h2>
          <div className="w-32 h-1 bg-[#263f6b] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </ScrollReveal>

        {/* SP Welding Workshop */}
        <ScrollScale scaleRange={[0.95, 1]} className="mb-20">
          <div className="card-hover bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-[#213559] to-[#263f6b] text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  {/* <motion.div
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
                  </motion.div> */}
                  <h3 className="text-4xl font-bold">{t("weldingWorkshop.title")}</h3>
                </div>
              </div>
            </div>

            <div className="p-10">
              <div className="mb-10">
                <h4 className="text-2xl font-bold mb-6 text-[#213559]">
                  {t("weldingWorkshop.subtitle")}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <li className="flex items-center text-gray-700 text-lg">
                    <span className="w-2 h-2 bg-[#213559] rounded-full mr-3"></span>
                    {t("weldingWorkshop.items.weldingMachine")}
                  </li>
                  <li className="flex items-center text-gray-700 text-lg">
                    <span className="w-2 h-2 bg-[#213559] rounded-full mr-3"></span>
                    {t("weldingWorkshop.items.consumables")}
                  </li>
                  <li className="flex items-center text-gray-700 text-lg">
                    <span className="w-2 h-2 bg-[#213559] rounded-full mr-3"></span>
                    {t("weldingWorkshop.items.more")}
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {facilities.map((item, index) => (
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
              <h3 className="text-4xl font-bold">{t("ourClients.title")}</h3>
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
                {clients.map((client) => (
                  <div
                    key={client.name}
                    className="client-logo-container px-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="group client-logo bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                      <div className="h-32 mb-6 flex items-center justify-center relative">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={300}
                          height={128}
                          unoptimized
                          priority
                          className="max-h-32 w-auto object-contain transition-all duration-500"
                          style={{ maxWidth: '100%', height: 'auto' }}
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
            {t("viewAllButton")}
          </DelayedLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
