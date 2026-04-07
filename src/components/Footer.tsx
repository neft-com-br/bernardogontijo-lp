'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-noir-deep border-t border-noir-border">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-semibold text-cream/40">BG</span>
        <p className="font-mono text-[10px] tracking-wider uppercase text-cream-faint">
          &copy; {new Date().getFullYear()} Bernardo Gontijo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
