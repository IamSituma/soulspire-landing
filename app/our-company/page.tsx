"use client"

import Link from "next/link"
import { useState } from "react"

export default function OurCompanyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Company", href: "/our-company" },
    { name: "Voltspire", href: "/voltspire" },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg4.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navbar */}
      <header className="relative z-10 w-full px-4 sm:px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-white text-lg sm:text-2xl font-bold">
            Soulspire
          </Link>
        </div>

        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 md:space-x-8 whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors text-sm md:text-base"
            >
              {item.name}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-95 z-20 p-4">
          <nav className="flex flex-col items-center space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center max-w-5xl mx-auto space-y-7">
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white animate-fadeIn">
          Welcome to Soulspire Group
        </h1>

        {/* Expanded Intro paragraph */}
        <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-xl w-full animate-fadeIn delay-200">
          <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
            Soulspire Group is committed to delivering innovative energy solutions that empower communities and drive sustainable growth. Our mission is to create a brighter future by combining technology, creativity, and dedication to excellence. We believe in harnessing the power of innovation to solve real-world challenges, improving lives through sustainable and reliable solutions. With a focus on collaboration, integrity, and continuous improvement, we strive to inspire progress and create opportunities for individuals, businesses, and communities to thrive. At Soulspire Group, every project is driven by our passion for excellence, our dedication to positive impact, and our vision for a technologically advanced and inclusive future.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center w-full animate-fadeIn delay-400">
          {/* Mission */}
          <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-xl flex-1 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
            <span className="text-yellow-300 text-3xl sm:text-4xl mb-2 block">💡</span>
            <h3 className="text-lg sm:text-xl md:text-xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-gray-100 text-sm sm:text-base md:text-base">
              To deliver innovative, reliable, and sustainable energy solutions
              that empower communities and businesses to achieve progress.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-xl flex-1 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
            <span className="text-blue-400 text-3xl sm:text-4xl mb-2 block">👁️</span>
            <h3 className="text-lg sm:text-xl md:text-xl font-bold text-white mb-2">Our Vision</h3>
            <p className="text-gray-100 text-sm sm:text-base md:text-base">
              To be a leading organization driving technological advancement and
              positive impact globally.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 rounded-xl flex-1 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300">
            <span className="text-green-400 text-3xl sm:text-4xl mb-2 block">🤝</span>
            <h3 className="text-lg sm:text-xl md:text-xl font-bold text-white mb-2">Our Values</h3>
            <p className="text-gray-100 text-sm sm:text-base md:text-base">
              Innovation, integrity, sustainability, and excellence in every
              solution we provide.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-3 text-center text-small sm:text-base text-gray-400 bg-black/70">
        © {new Date().getFullYear()} Soulspire Group. All Rights Reserved.
      </footer>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
