import { FileText, ListChecks, Scale, Brain, Download, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

const RESOURCES = [
  {
    icon: FileText,
    title: "AI Literacy & Ethics Guide",
    description:
      "A comprehensive primer covering foundational ML concepts, ethical frameworks, and responsible AI principles for students.",
    action: "Download PDF",
    actionIcon: Download,
  },
  {
    icon: ListChecks,
    title: "Prompt Engineering Checklists",
    description:
      "Practical, reusable checklists for crafting effective prompts while identifying bias, misinformation, and ethical risks.",
    action: "View Docs",
    actionIcon: ExternalLink,
  },
  {
    icon: Scale,
    title: "Algorithmic Bias Case Study",
    description:
      "Real-world analysis of algorithmic discrimination — what went wrong, who was harmed, and how students can prevent it.",
    action: "Read Brief",
    actionIcon: ExternalLink,
  },
  {
    icon: Brain,
    title: "Deepfakes & Epistemology Framework",
    description:
      "A philosophical and technical framework for navigating synthetic media, truth, and epistemic trust in the AI era.",
    action: "Explore Framework",
    actionIcon: ExternalLink,
  },
];

export default function ResourceHub() {
  return (
    <section id="resources" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <span className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider">
              Resource Hub
            </span>
            <h2 className="mt-4 font-display font-bold text-[#1E2229] text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight">
              Open-access tools for ethical AI
            </h2>
            <p className="mt-5 text-lg text-[#64748B] leading-relaxed">
              Curated, student-friendly materials designed to build both
              technical fluency and critical ethical thinking.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {RESOURCES.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.08}>
              <div className="group h-full flex items-start gap-5 bg-white rounded-2xl p-7 lg:p-8 border border-gray-100 hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/5 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 group-hover:bg-[#3B82F6] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <r.icon className="w-6 h-6 text-[#3B82F6] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-[#1E2229] text-lg lg:text-xl tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                    {r.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#3B82F6] group-hover:gap-2.5 transition-all duration-200">
                    <r.actionIcon className="w-4 h-4" />
                    {r.action}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
