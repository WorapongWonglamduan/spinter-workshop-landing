import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 text-white bg-blue-600 shadow-md">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold mr-8">
          SPinter Workshop
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/our-team" className="hover:text-blue-200 transition-colors">
            Our Team
          </Link>
          <Link href="/services" className="hover:text-blue-200 transition-colors">
            Services
          </Link>
          <Link href="/track-record" className="hover:text-blue-200 transition-colors">
            Track Record
          </Link>
          <Link href="/vacancies" className="hover:text-blue-200 transition-colors">
            Open Vacancies
          </Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/login" className="hover:text-blue-200 transition-colors">
          Login
        </Link>
        <Link href="/register" className="hover:text-blue-200 transition-colors">
          Register
        </Link>
      </div>
    </nav>
  );
}
