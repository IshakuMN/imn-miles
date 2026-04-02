'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Menu, User, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold bg-linear-to-r from-red-600 to-black bg-clip-text text-transparent uppercase tracking-tighter">
            Million Miles
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-black hover:text-red-600 transition-colors">CARS IN STOCK</Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">SELL YOUR CAR</Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">CONSIGNMENT</Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">FINANCE</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700">
            <Phone size={16} />
            <span>+971 4 333 3333</span>
          </div>
          <button className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors md:hidden">
            <Menu size={20} />
          </button>
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-all">
            <User size={16} />
            SIGN IN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
