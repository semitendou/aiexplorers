import { Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Mission() {
  return (
    <section id="mission" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Mission */}
          <FadeIn>
            <div>
              <span className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="mt-4 font-display font-bold text-[#1E2229] text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight">
                Moving beyond basic internet safety
              </h2>
              <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
                We teach machine learning mechanics, algorithmic bias, cloud
                architecture, and automation's socio-economic impacts —
                preparing the next generation to shape, not just consume, the
                technologies redefining their world.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "ML mechanics & algorithmic bias",
                  "Cloud architecture fundamentals",
                  "Automation's socio-economic impacts",
                  "Frontier digital ethics frameworks",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
                    <span className="text-[#1E2229] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Founder Bio Card */}
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#3B82F6]/5 to-transparent rounded-3xl" />
              <div className="relative bg-[#1E2229] rounded-2xl p-8 lg:p-10 shadow-xl shadow-black/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-7 h-7 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-xl">
                      Founded by Summer
                    </h3>
                    <p className="text-sm text-gray-400 mt-0.5">
                      Founder & Executive Director
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  2026 Netsafe Youth Action Squad member & Amnesty International
                  NZ Youth Advocate, Summer founded AI Explorers to empower
                  secondary students to become{" "}
                  <span className="text-white font-semibold">
                    ethical architects of the digital future.
                  </span>
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-display font-bold text-[#3B82F6]">
                      Netsafe
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Youth Action Squad
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-[#3B82F6]">
                      Amnesty NZ
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Youth Advocate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
