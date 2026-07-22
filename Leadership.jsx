import { ArrowRight, Briefcase } from "lucide-react";
import FadeIn from "./FadeIn";

const ROLES = [
  "Director of Curriculum",
  "Director of Technology",
  "Head of Schools & Outreach",
  "Chapter President",
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative bg-[#1E2229] py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-8">
              <Briefcase className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-xs font-semibold text-[#3B82F6] tracking-wide uppercase">
                Leadership Recruitment
              </span>
            </div>
            <h2 className="font-display font-bold text-white text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight">
              Join the Founding Executive Board
              <br />
              <span className="text-[#3B82F6]">& Lead a Chapter</span>
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We're recruiting Year 10–12 NZ student leaders to build AI
              Explorers from the ground up — shaping curriculum, technology, and
              outreach for the next generation.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ROLES.map((role) => (
              <div
                key={role}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#3B82F6]/30 rounded-xl p-5 lg:p-6 text-center transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 group-hover:bg-[#3B82F6] flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 text-[#3B82F6] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm font-semibold text-white leading-snug">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="YOUR_GOOGLE_FORM_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold transition-all duration-200 shadow-lg shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/50 hover:-translate-y-0.5"
            >
              Apply for a Leadership Role
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Applications open to Year 10–12 students enrolled in NZ secondary
              schools
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
