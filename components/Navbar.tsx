"use client";

import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 text-white bg-blue-600 shadow-md ">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-xl font-bold mr-8 cursor-pointer"
        >
          SPinter Workshop
        </Link>
        <div className="flex gap-6">
          <Link
            href="/"
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/our-team"
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Our Team
          </Link>
          <Link
            href="/services"
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Services
          </Link>
          <Link
            href="/track-record"
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Track Record
          </Link>
          <Link
            href="/vacancies"
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Open Vacancies
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="hover:text-blue-200 transition-colors cursor-pointer"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="hover:text-blue-200 transition-colors cursor-pointer"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
