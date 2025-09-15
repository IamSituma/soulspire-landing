"use client"

import Link from "next/link"
import { useState } from "react"

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = ["Our Company", "Volspire"]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-black to-blue-950">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(30,64,175,0.3),transparent_70%)]"></div>

      {/* Navigation */}
      <header className="relative z-10 px-6 py-12 mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="text-white text-2xl font-bold">
          scale
        </Link>

        {/* Desktop nav (centered) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="absolute top-24 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden z-20">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-32 mx-auto text-center max-w-7xl">
        <h1 className="max-w-4xl mx-auto text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Soulspire Group
          <br />
          Powering Innovation
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300">
          At Soulspire Group, we deliver trusted energy solutions,
          <br />
          cutting-edge electronics, and precision cameras, empowering
          <br />
          homes, businesses, and creators with products that fuel
          <br />
          progress and spark inspiration.
        </p>

        {/* Hero buttons */}
        <div className="flex flex-col mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            href="/demo"
            className="flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Explore Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2"
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
            className="flex items-center justify-center px-8 py-3 text-lg font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Partners Section */}
        <div className="w-full mt-24">
          <p className="mb-8 text-gray-400">Our Partners Include:</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center space-x-6 text-white">
              <img src="/logos/Xiaomi-logo.png" alt="Xiaomi Logo" className="h-10" />
              <img src="/logos/amd.png" alt="AMD Logo" className="h-8" />
              <img src="/logos/intel.png" alt="Intel Logo" className="h-8" />
              <img src="/logos/gizzu.png" alt="Gizzu Logo" className="h-8" />
              <img src="/logos/redragon.png" alt="Redragon Logo" className="h-8" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
