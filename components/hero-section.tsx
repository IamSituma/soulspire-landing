"use client"

import Link from "next/link"
import { useState } from "react"

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = ["Our Company", "Voltspire"]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-black to-blue-950 flex flex-col">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      {/* Header / Nav */}
      <header className="relative z-10 w-full px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        {/* Optional site title / logo */}
        <div className="flex items-center">
          <Link href="/" className="text-white text-lg md:text-2xl font-bold">
            Soulspire
          </Link>
        </div>

        {/* Desktop nav (centered) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((s) => !s)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile menu (overlay) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-95 z-20 p-4">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-300 hover:text-white text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main content (centers vertically and horizontally) */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Soulspire Group
        </h1>

        <h2 className="mt-4 text-lg md:text-2xl text-gray-300 max-w-3xl">
          Inspiring Innovation, Empowering Progress.
        </h2>

        <p className="mt-6 text-sm md:text-lg text-gray-300 max-w-2xl">
          At Soulspire Group, we deliver trusted energy solutions, cutting-edge electronics, and precision cameras — empowering homes,
          businesses, and creators with products that fuel progress and spark inspiration.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-white text-gray-900 text-sm font-medium"
          >
            Explore Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-white text-gray-900 text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Partners / Logos */}
        <div className="w-full mt-8">
          <p className="mb-4 text-gray-400">Our Partners Include:</p>

          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {/* Logos scale down on mobile (w-10) and up on md (w-20) */}
            <img src="/logos/amd.png" alt="AMD Logo" className="w-10 md:w-20 h-auto" />
            <img src="/logos/intel.png" alt="Intel Logo" className="w-10 md:w-20 h-auto" />
            <img src="/logos/gizzu.png" alt="Gizzu Logo" className="w-10 md:w-20 h-auto" />
            <img src="/logos/redragon.png" alt="Redragon Logo" className="w-10 md:w-20 h-auto" />
          </div>
        </div>
      </main>

      {/* Footer (always visible at bottom) */}
      <footer className="relative z-10 py-3 text-center text-gray-400 bg-black">
        © {new Date().getFullYear()} Soulspire Group. All Rights Reserved.
      </footer>
    </div>
  )
}