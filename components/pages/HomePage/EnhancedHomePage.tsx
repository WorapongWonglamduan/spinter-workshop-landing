"use client";

import { useEffect } from "react";
import { ScrollProgressBar } from "../../ScrollAnimations";
import EnhancedHero from "./EnhancedHero";
import ContactSection from "../ContactPage";
import OurTeamSection from "../OurTeamPage";
import ServicesSection from "../ServicesPage";
import CompanyProfileSection from "../CompanyProfilePage";
import CompanyGoalSection from "../CompanyGoalPage";
import WorkshopGallerySection from "../WorkshopGalleryPage";
import WorkshopShowcaseSection from "../WorkshopShowcasePage";

export default function EnhancedHomePage() {

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
      <CompanyProfileSection />

      {/* Company Goal Section */}
      <CompanyGoalSection />

      {/* Workshop Showcase */}
      <WorkshopShowcaseSection />

      {/* Company Services Section */}
      <ServicesSection />

      {/* Workshop Training Gallery */}
      <WorkshopGallerySection />

      {/* Our Team Section */}
      <OurTeamSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
