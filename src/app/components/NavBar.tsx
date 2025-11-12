'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import logo from '../assets/InteliEQLogo.png';

export default function NavBar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<null | 'engine' | 'sectors' | 'resources'>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<null | 'engine' | 'sectors' | 'resources'>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const dropdowns = {
    engine: [
      { name: 'Full-Stack', path: '/engine/full-stack' },
      { name: 'Products', path: '/engine/products' },
    ],
    sectors: [
      { name: 'Education', path: '/sectors/education' },
      { name: 'Healthcare', path: '/sectors/healthcare' },
      { name: 'Hospitality', path: '/sectors/hospitality' },
      { name: 'Commercial Real Estate', path: '/sectors/commercial-real-estate' },
    ],
    resources: [
      { name: 'About Us', path: '/resources/about-us' },
      { name: 'Blog', path: '/resources/blog' },
      { name: 'Case Studies', path: '/resources/case-studies' },
      { name: 'News & Press', path: '/resources/news-press' },
    ],
  };


  const toggleDropdown = (menu: typeof openDropdown) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="bg-brand-black shadow-sm w-full z-50" ref={navRef}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="InteliEQ Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="flex space-x-8 text-sm font-semibold">
            <div className="relative inline-block">
              <button
                onClick={() => toggleDropdown('engine')}
                className={`inline-flex items-center px-3 py-2 text-sm font-bold transition ${pathname.startsWith('/engine')
                  ? 'text-brand-orange border-b-2 border-brand-orange'
                  : 'text-brand-white hover:text-brand-orange'
                  }`}
              >
                The Engine
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06Z"
                  />
                </svg>
              </button>

              {openDropdown === 'engine' && (
                <div
                  className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-brand-black shadow-lg outline outline-1 outline-black/5 transition-transform duration-150 scale-100 opacity-100"
                >
                  <div className="py-1">
                    {dropdowns.engine.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2 text-sm text-brand-white hover:text-brand-orange"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative inline-block">
              <button
                onClick={() => toggleDropdown('sectors')}
                className={`inline-flex items-center px-3 py-2 text-sm font-bold transition ${pathname.startsWith('/sectors')
                  ? 'text-brand-orange border-b-2 border-brand-orange'
                  : 'text-brand-white hover:text-brand-orange'
                  }`}
              >
                Sectors
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06Z"
                  />
                </svg>
              </button>

              {openDropdown === 'sectors' && (
                <div className="absolute left-0 mt-2 w-64 origin-top-right rounded-md bg-brand-black shadow-lg outline outline-1 outline-black/5 transition-transform duration-150 scale-100 opacity-100">
                  <div className="py-1">
                    {dropdowns.sectors.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2 text-sm text-brand-white hover:text-brand-orange"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>


            <div className="relative inline-block">
              <button
                onClick={() => toggleDropdown('resources')}
                className={`inline-flex items-center px-3 py-2 text-sm font-bold transition ${pathname.startsWith('/resources')
                  ? 'text-brand-orange border-b-2 border-brand-orange'
                  : 'text-brand-white hover:text-brand-orange'
                  }`}
              >
                Resources
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06Z"
                  />
                </svg>
              </button>

              {openDropdown === 'resources' && (
                <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-brand-black shadow-lg outline outline-1 outline-black/5 transition-transform duration-150 scale-100 opacity-100">
                  <div className="py-1">
                    {dropdowns.resources.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="block px-4 py-2 text-sm text-brand-white hover:text-brand-orange"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            \            <Link
              href="/contact"
              className={`inline-flex items-center px-3 py-2 text-sm font-bold transition ${pathname === '/contact'
                ? 'text-brand-orange border-b-2 border-brand-orange'
                : 'text-brand-white hover:text-brand-orange'
                }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
