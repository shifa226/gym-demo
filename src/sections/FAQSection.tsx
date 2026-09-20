import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { faqs } from '@/data/content';

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">FAQ</span>
              <span className="w-10 h-px bg-gold-500" />
            </div>
            <h2 className="display-heading text-balance">Questions? Answered.</h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.id} delay={i * 50}>
              <div className={`glass-card overflow-hidden transition-all duration-300 ${open === faq.id ? 'border-gold-500/30' : ''}`}>
                <button
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={open === faq.id}
                >
                  <span className="font-heading text-base font-medium text-white/90">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 ${open === faq.id ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
