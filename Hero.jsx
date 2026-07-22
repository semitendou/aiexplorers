import { ArrowRight, BookOpen } from "lucide-react";
import FadeIn from "./FadeIn";

const HERO_BG = "https://media.base44.com/images/public/6a606d612ebb50f97e4b5674/03696e7e9_generated_72550861.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#1E2229] overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2229] via-[#1E2229]/80 to-[#1E2229]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E2229] via-transparent to-[#1E2229]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
              Youth-Led · Aotearoa New Zealand
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight max-w-5xl">
            Technology is moving fast.
            <br />
            <span className="text-[#3B82F6]">Who is establishing</span> the
            guardrails?
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
            A youth-led initiative equipping high school students across
            Aotearoa NZ with advanced ML literacy and frontier digital ethics.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#leadership"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold transition-all duration-200 shadow-lg shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/50 hover:-translate-y-0.5"
            >
              Apply to Executive Board
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              <BookOpen className="w-4 h-4" />
              Explore Our Curriculum
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
