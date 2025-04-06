'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative flex justify-between items-center mb-20">
      <Link href="/" className="text-2xl font-bold text-primary">
        Saas Digital
      </Link>
      
      {/* Menu Mobile Button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden text-white focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link 
          href="/" 
          className={`${pathname === '/' ? 'text-primary' : 'hover:text-primary'}`}
        >
          Início
        </Link>
        <Link 
          href="/#pricing" 
          className={`${pathname === '/#pricing' ? 'text-primary' : 'hover:text-primary'}`}
        >
          Preços
        </Link>
        <Link 
          href="/sobre" 
          className={`${pathname === '/sobre' ? 'text-primary' : 'hover:text-primary'}`}
        >
          Sobre
        </Link>
        <Link 
          href="/#contact" 
          className={`${pathname === '/#contact' ? 'text-primary' : 'hover:text-primary'}`}
        >
          Contato
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full right-0 left-0 bg-dark/95 backdrop-blur-sm mt-2 p-4 rounded-lg md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'text-primary' : 'hover:text-primary'}`}
            onClick={closeMobileMenu}
          >
            Início
          </Link>
          <Link 
            href="/#pricing" 
            className={`${pathname === '/#pricing' ? 'text-primary' : 'hover:text-primary'}`}
            onClick={closeMobileMenu}
          >
            Preços
          </Link>
          <Link 
            href="/sobre" 
            className={`${pathname === '/sobre' ? 'text-primary' : 'hover:text-primary'}`}
            onClick={closeMobileMenu}
          >
            Sobre
          </Link>
          <Link 
            href="/#contact" 
            className={`${pathname === '/#contact' ? 'text-primary' : 'hover:text-primary'}`}
            onClick={closeMobileMenu}
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
} 