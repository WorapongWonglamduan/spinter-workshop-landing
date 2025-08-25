"use client";

import DelayedLink from "./DelayedLink";
export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 text-white bg-blue-600 shadow-md ">
      <div className="flex items-center">
        <DelayedLink
          href="/"
          className="text-xl font-bold mr-8 cursor-pointer"
          delay={2000}
        >
          SPinter Workshop
        </DelayedLink>
        <div className="flex gap-6">
          <DelayedLink
            href="/"
            className="hover:text-blue-200 transition-colors cursor-pointer"
            delay={800}
          >
            Home
          </DelayedLink>
          <DelayedLink
            href="/our-team"
            className="hover:text-blue-200 transition-colors cursor-pointer"
            delay={800}
          >
            Our Team
          </DelayedLink>
          <DelayedLink
            href="/services"
            className="hover:text-blue-200 transition-colors cursor-pointer"
            delay={800}
          >
            Services
          </DelayedLink>
          <DelayedLink
            href="/track-record"
            className="hover:text-blue-200 transition-colors cursor-pointer"
            delay={800}
          >
            Track Record
          </DelayedLink>
          <DelayedLink
            href="/vacancies"
            className="hover:text-blue-200 transition-colors cursor-pointer"
            delay={800}
          >
            Open Vacancies
          </DelayedLink>
          <DelayedLink
            href="/contact"
            className="hover:text-blue-200 transition-colors cursor-pointer"
            delay={800}
          >
            Contact
          </DelayedLink>
        </div>
      </div>
      <div className="flex gap-4">
        <DelayedLink
          href="/login"
          className="hover:text-blue-200 transition-colors cursor-pointer"
          delay={800}
        >
          Login
        </DelayedLink>
        <DelayedLink
          href="/register"
          className="hover:text-blue-200 transition-colors cursor-pointer"
          delay={800}
        >
          Register
        </DelayedLink>
      </div>
    </nav>
  );
}
