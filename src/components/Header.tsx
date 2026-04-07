'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Trajetória', href: '#experiencia' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-noir-deep/95 backdrop-blur-md border-b border-noir-border py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group flex items-center">
          <span className="font-display text-2xl font-semibold text-cream tracking-wide group-hover:text-gold transition-colors duration-300">
            BG
          </span>
          <span className="hidden sm:inline ml-3 font-mono text-[10px] tracking-[0.25em] uppercase text-cream-muted">
            Bernardo Gontijo
          </span>
        </Link>

        <button
          className="text-cream-muted focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-cream-muted hover:text-gold transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-noir-deep border-t border-noir-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-mono text-xs tracking-[0.15em] uppercase text-cream-muted hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
