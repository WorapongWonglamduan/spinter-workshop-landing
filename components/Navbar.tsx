"use client";

import { useRouter } from "@/app/utils/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href, 800);
  };
  return (
    <nav className="flex justify-between p-4 text-white bg-blue-600 shadow-md">
      <div className="flex items-center">
        <button
          onClick={() => handleNavigation("/")}
          className="text-xl font-bold mr-8 cursor-pointer"
        >
          SPinter Workshop
        </button>
        <div className="flex gap-6">
          <button
            onClick={() => handleNavigation("/")}
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/our-team")}
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Our Team
          </button>
          <button
            onClick={() => handleNavigation("/services")}
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigation("/track-record")}
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Track Record
          </button>
          <button
            onClick={() => handleNavigation("/vacancies")}
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Open Vacancies
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="hover:text-blue-200 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => handleNavigation("/login")}
          className="hover:text-blue-200 transition-colors cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={() => handleNavigation("/register")}
          className="hover:text-blue-200 transition-colors cursor-pointer"
        >
          Register
        </button>
      </div>
    </nav>
  );
}
