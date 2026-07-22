import { useState, useEffect } from "react";
import { Network, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Core Initiatives", href: "#initiatives" },
  { label: "Resource Hub", href: "#resources" },
  { label: "Exec Board", href: "#leadership" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1E2229]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#1E2229]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Network className="w-6 h-6 text-[#3B82F6]" strokeWidth={2} />
              <div className="absolute inset-0 bg-[#3B82F6] blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">
              AI EXPLORERS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#leadership"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-[#3B82F6]/20 hover:shadow-[#3B82F6]/40 hover:-translate-y-0.5"
            >
              Book Workshop
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-6 space-y-1 border-t border-white/10 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#leadership"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-3 rounded-lg bg-[#3B82F6] text-white text-center text-sm font-semibold"
            >
              Book Workshop
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
