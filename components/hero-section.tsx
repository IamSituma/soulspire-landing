"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = ["Our Company", "Voltspire"]

  // Background items (videos/photos)
  const backgrounds = [
    { type: "video", src: "/bg1.mp4" },
    { type: "image", src: "/bg2.jpg" },
    { type: "video", src: "/bg3.mp4" },
    { type: "image", src: "/bg4.jpg" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length)
    }, 8000) // switch every 8 seconds
    return () => clearInterval(interval)
  }, [backgrounds.length])

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {bg.type === "video" ? (
              <video
                src={bg.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={bg.src}
                alt={`Background ${index}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Header / Nav */}
      <header className="relative z-10 w-full px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-white text-lg md:text-2xl font-bold">
            Soulspire
          </Link>
        </div>

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

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Soulspire Group
        </h1>

        <h2 className="mt-4 text-lg md:text-2xl text-gray-300 max-w-3xl">
          Inspiring Innovation, Empowering Progress.
        </h2>

        <p className="mt-6 text-sm md:text-lg text-gray-300 max-w-2xl">
          At Soulspire Group, we deliver trusted energy solutions, cutting-edge
          electronics, and precision cameras — empowering homes, businesses, and
          creators with products that fuel progress and spark inspiration.
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

          {/* Email Contact Us */}
          <Link
            href="mailto:info@soulspiregroup.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20Soulspire%20Group%27s%20products%20and%20services."
            className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-white text-gray-900 text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Partners / Logos */}
        <div className="w-full mt-8">
          <p className="mb-4 text-gray-400">Our Partners Include:</p>
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            <img
              src="/logos/amd.png"
              alt="AMD Logo"
              className="w-10 md:w-20 h-auto"
            />
            <img
              src="/logos/intel.png"
              alt="Intel Logo"
              className="w-10 md:w-20 h-auto"
            />
            <img
              src="/logos/gizzu.png"
              alt="Gizzu Logo"
              className="w-10 md:w-20 h-auto"
            />
            <img
              src="/logos/redragon.png"
              alt="Redragon Logo"
              className="w-10 md:w-20 h-auto"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-3 text-center text-small text-gray-400 bg-black/70">
        © {new Date().getFullYear()} Soulspire Group. All Rights Reserved.
      </footer>
    </div>
  )
}
