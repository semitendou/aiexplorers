import { Network, Mail } from "lucide-react";

const SOCIAL = [
  { label: "TikTok", handle: "@aiexplorers", href: "https://tiktok.com/@aiexplorers" },
];

const FOOTER_LINKS = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E2229] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo & description */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <Network className="w-6 h-6 text-[#3B82F6]" strokeWidth={2} />
              <span className="font-display font-bold text-white text-lg tracking-tight">
                AI EXPLORERS
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              A youth-led initiative bridging machine learning literacy and
              digital ethics across Aotearoa New Zealand.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-[#3B82F6] transition-colors"
                  >
                    {s.label} · {s.handle}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@aiexplorers.nz"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#3B82F6] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@aiexplorers.nz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AI Explorers. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built by youth, for the future of Aotearoa.
          </p>
        </div>
      </div>
    </footer>
  );
}
