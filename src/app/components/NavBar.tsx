"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/InteliEQLogo.png";

export default function NavBar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<null | "engine" | "resources">(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<null | "engine" | "resources">(null);
  const [visible, setVisible] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const lastScroll = useRef(0);
  const [animClass, setAnimClass] = useState("nav-hidden");

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // visibility behavior for landing page scroll
  useEffect(() => {
    const rootPath = pathname === "/" || pathname === "";
    const THRESHOLD = 250;
    if (!rootPath) {
      setVisible(true);
      setAnimClass("nav-enter");
      return;
    }

    const onScroll = () => {
      const y = window.scrollY;
      const direction = y > lastScroll.current ? "down" : "up";
      lastScroll.current = y;

      const nextVisible = y > THRESHOLD;
      setVisible((prev) => {
        if (prev === nextVisible) return prev;

        if (nextVisible) {
          setAnimClass(direction === "up" ? "nav-enter" : "nav-fade-enter");
        } else {
          setAnimClass("nav-exit");
        }
        return nextVisible;
      });
    };

    const initialY = typeof window !== "undefined" ? window.scrollY : 0;
    lastScroll.current = initialY;
    const initialVisible = initialY > THRESHOLD;
    setVisible(initialVisible);
    setAnimClass(initialVisible ? "nav-enter" : "nav-hidden");

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const dropdowns = {
    engine: [
      { name: "Full-Stack", path: "/engine/full-stack" },
      { name: "Products", path: "/engine/products" },
    ],
    resources: [
      { name: "About Us", path: "/resources/about-us" },
      { name: "Blog", path: "/resources/blog" },
      { name: "Case Studies", path: "/resources/case-studies" },
      { name: "News & Press", path: "/resources/news-press" },
    ],
  } as const;

  const toggleDropdown = (menu: typeof openDropdown) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 bg-brand-black shadow-sm ${animClass}`}
      aria-hidden={!visible}
    >
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

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold">
            {/* Engine Dropdown */}
            <div className="relative inline-block">
              <button
                onClick={() => toggleDropdown("engine")}
                className={`inline-flex items-center px-3 py-2 text-sm font-bold transition ${pathname.startsWith("/engine")
                  ? "text-brand-orange border-b-2 border-brand-orange"
                  : "text-brand-white hover:text-brand-orange"
                  }`}
              >
                The Engine
              </button>

              {openDropdown === "engine" && (
                <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-brand-black shadow-lg">
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

            <Link
              href="/sectors"
              className={`inline-flex items-center px-3 py-2 text-sm font-bold transition ${pathname.startsWith("/sectors")
                ? "text-brand-orange border-b-2 border-brand-orange"
                : "text-brand-white hover:text-brand-orange"
                }`}
            >
              Sectors
            </Link>

            {/* Resources Dropdown */}
            <div className="relative inline-block">
              <button
                onClick={() => toggleDropdown("resources")}
                className={`inline-flex items-center px-3 py-2 text-sm font-bold transition ${pathname.startsWith("/resources")
                  ? "text-brand-orange border-b-2 border-brand-orange"
                  : "text-brand-white hover:text-brand-orange"
                  }`}
              >
                Resources
              </button>

              {openDropdown === "resources" && (
                <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-brand-black shadow-lg">
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

            <Link
              href="/contact"
              className={`inline-flex items-center px-3 py-2 text-sm font-bold transition ${pathname === "/contact"
                ? "text-brand-orange border-b-2 border-brand-orange"
                : "text-brand-white hover:text-brand-orange"
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-white hover:text-brand-orange"
            >
              <svg
                className={`h-6 w-6 transition-transform ${mobileOpen ? "rotate-90" : ""
                  }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-black border-t border-black/10">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/solutions"
              className={`block px-3 py-2 rounded text-brand-white ${pathname === "/solutions" ? "text-brand-orange" : ""
                }`}
              onClick={() => setMobileOpen(false)}
            >
              Solutions For
            </Link>

            {/* Engine Mobile Dropdown */}
            <div>
              <button
                onClick={() =>
                  setMobileSubmenu((s) => (s === "engine" ? null : "engine"))
                }
                className="w-full text-left px-3 py-2 text-brand-white flex items-center justify-between"
              >
                The Engine
                <span className="ml-2">
                  {mobileSubmenu === "engine" ? "−" : "+"}
                </span>
              </button>
              {mobileSubmenu === "engine" && (
                <div className="pl-6">
                  {dropdowns.engine.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-3 py-2 text-sm text-brand-white hover:text-brand-orange"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sectors — now a normal mobile link */}
            <Link
              href="/sectors"
              className={`block px-3 py-2 rounded text-brand-white ${pathname.startsWith("/sectors") ? "text-brand-orange" : ""
                }`}
              onClick={() => setMobileOpen(false)}
            >
              Sectors
            </Link>

            {/* Resources Mobile Dropdown */}
            <div>
              <button
                onClick={() =>
                  setMobileSubmenu((s) =>
                    s === "resources" ? null : "resources"
                  )
                }
                className="w-full text-left px-3 py-2 text-brand-white flex items-center justify-between"
              >
                Resources
                <span className="ml-2">
                  {mobileSubmenu === "resources" ? "−" : "+"}
                </span>
              </button>
              {mobileSubmenu === "resources" && (
                <div className="pl-6">
                  {dropdowns.resources.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-3 py-2 text-sm text-brand-white hover:text-brand-orange"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`block px-3 py-2 rounded text-brand-white ${pathname === "/contact" ? "text-brand-orange" : ""
                }`}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
