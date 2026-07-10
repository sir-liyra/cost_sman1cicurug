'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/about' },
    { label: 'Kegiatan', href: '/events' },
    { label: 'Blog', href: '/blog' },
    { label: 'Galeri', href: '/gallery' },
    { label: 'Kontak', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="font-bold text-lg hidden sm:inline text-secondary-500">COST</span>
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-3">
          <Link href="/login" className="btn btn-outline">
            Login
          </Link>
          <Link href="/register" className="btn btn-primary">
            Daftar
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 container">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <Link href="/login" className="flex-1 btn btn-outline text-center">
                Login
              </Link>
              <Link href="/register" className="flex-1 btn btn-primary text-center">
                Daftar
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
