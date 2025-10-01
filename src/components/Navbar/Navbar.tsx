"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assests/logo.svg";
import { Typography } from "@/components/UI/Typography"; // adjust path
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const list = listRef.current;
    if (!panel) return;

    if (isMenuOpen) {
      gsap.set(panel, { display: "block" });
      gsap.fromTo(
        panel,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );

      if (list) {
        gsap.fromTo(
          Array.from(list.children),
          { y: -6, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05,
          }
        );
      }
    } else {
      gsap.to(panel, {
        autoAlpha: 0,
        y: -12,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(panel, { display: "none" });
        },
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className="relative flex items-center md:items-start justify-between w-[90%] mx-auto py-6">
      {/* Left: Logo */}
      <div className="flex-1 flex items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Lampros DAO logo"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Right: Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-end">
        <ul className="flex flex-col items-end gap-2">
          <li>
            <Link href="/" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="accent"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                Home
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="primary"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                About Us
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/governance" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="primary"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                Governance
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/contribution" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="primary"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                Contribution
              </Typography>
            </Link>
          </li>
        </ul>
      </div>

      {/* Right: Mobile Hamburger */}
      <div className="flex md:hidden flex-1 justify-end">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex text-black items-center justify-center p-2 rounded-md "
        >
          {/* Icon */}
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel (animated with GSAP) */}
      <div className="absolute top-full left-0 w-full md:hidden z-50">
        <div
          ref={panelRef}
          style={{ display: "none" }}
          className="w-full mx-auto mt-3 rounded-xl border border-white/10 bg-black shadow-2xl backdrop-blur-md p-4"
        >
          <ul ref={listRef} className="flex flex-col items-end gap-3">
            <li>
              <Link
                href="/"
                className="group"
                onClick={() => setIsMenuOpen(false)}
              >
                <Typography
                  variant="body1"
                  weight="medium"
                  color="accent"
                  className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors text-white"
                >
                  Home
                </Typography>
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="group"
                onClick={() => setIsMenuOpen(false)}
              >
                <Typography
                  variant="body1"
                  weight="medium"
                  color="primary"
                  className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors text-white"
                >
                  About Us
                </Typography>
              </Link>
            </li>
            <li>
              <Link
                href="/governance"
                className="group"
                onClick={() => setIsMenuOpen(false)}
              >
                <Typography
                  variant="body1"
                  weight="medium"
                  color="primary"
                  className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors text-white"
                >
                  Governance
                </Typography>
              </Link>
            </li>
            <li>
              <Link
                href="/contribution"
                className="group"
                onClick={() => setIsMenuOpen(false)}
              >
                <Typography
                  variant="body1"
                  weight="medium"
                  color="primary"
                  className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors text-white"
                >
                  Contribution
                </Typography>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
