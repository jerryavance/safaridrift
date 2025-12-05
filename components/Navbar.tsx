'use client';

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-3 sm:py-4 md:py-5 bg-white/95 backdrop-blur-md sticky top-0 shadow-sm">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image 
            src="/logo-white.svg" 
            alt="SafariDrift" 
            width={180} 
            height={180}
            className="w-32 sm:w-48 md:w-60 lg:w-72 h-auto"
          />
        </Link>

        <ul className="hidden h-full gap-4 md:gap-6 lg:gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link 
              href={link.href} 
              key={link.key} 
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-uganda-red relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-uganda-yellow transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Link href="/contact">
            <button className="btn_black">
              Join Us
            </button>
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="inline-block cursor-pointer lg:hidden transition-transform hover:scale-110 w-7 h-7 relative z-50"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <Image 
              src="/close.svg"
              alt="close menu"
              width={28}
              height={28}
            />
          ) : (
            <Image 
              src="/menu.svg"
              alt="open menu"
              width={28}
              height={28}
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-[60px] right-0 h-[calc(100vh-60px)] w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <ul className="flex flex-col gap-2 p-6">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link 
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block py-3 px-4 text-gray-50 hover:bg-uganda-yellow/10 hover:text-uganda-red rounded-lg transition-all bold-16"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto p-6 border-t border-gray-200">
            <Link href="/contact" onClick={closeMobileMenu}>
              <button className="btn_yellow w-full">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar