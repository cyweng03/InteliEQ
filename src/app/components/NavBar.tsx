'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../assets/InteliEQLogo.png';

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'The Engine', path: '/engine' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Solutions For', path: '/solutions' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-brand-black shadow-sm">
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

          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`inline-flex items-center px-1 pt-1 text-sm font-bold border-b-2 transition-colors duration-200 ${pathname === item.path
                  ? 'border-brand-orange text-brand-orange'
                  : 'border-transparent text-brand-white hover:text-brand-orange hover:border-brand-orange'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}