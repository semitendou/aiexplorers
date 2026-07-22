import { MonitorPlay, Trophy, Package } from "lucide-react";
import FadeIn from "./FadeIn";

const INITIATIVES = [
  {
    icon: MonitorPlay,
    title: "Virtual Regional Outreach",
    description:
      "Live Zoom AI literacy classes delivered directly to rural and regional schools — breaking down geographic barriers to advanced ML education across Aotearoa.",
    tag: "Remote Learning",
  },
  {
    icon: Trophy,
    title: "Ethical AI Prompt-a-Thon",
    description:
      "24-hour hackathons where students build with AI tools under mandatory AI governance audits — proving that innovation and ethical responsibility go hand in hand.",
    tag: "24-Hr Events",
  },
  {
    icon: Package,
    title: "Chapter-in-a-Box Scaling",
    description:
      "Comprehensive playbooks and resources empowering students to launch and lead AI Explorers chapters on their own high school campuses nationwide.",
    tag: "National Network",
  },
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <span className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider">
              Core Initiatives
            </span>
            <h2 className="mt-4 font-display font-bold text-[#1E2229] text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight">
              Programs built for scale and depth
            </h2>
            <p className="mt-5 text-lg text-[#64748B] leading-relaxed">
              Three pillars driving ML literacy and digital ethics into every
              corner of Aotearoa's secondary school ecosystem.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {INITIATIVES.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="group relative h-full bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100 hover:border-[#3B82F6]/30 hover:bg-white hover:shadow-2xl hover:shadow-[#3B82F6]/5 transition-all duration-300 overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#3B82F6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#3B82F6]/25 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-[#1E2229] text-xl lg:text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
