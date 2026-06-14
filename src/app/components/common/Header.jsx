"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Real Estate
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about-us"
                className="hover:text-blue-600 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/product"
                className="hover:text-blue-600 transition"
              >
                Product
              </Link>
            </li>

            <li>
              <Link
                href="/pricing"
                className="hover:text-blue-600 transition"
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;