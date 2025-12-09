'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Bernardo Gontijo - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
