import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { faqs } from '@/data/content';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">FAQ</span>
            </div>
            <h1 className="display-heading text-balance">Questions?<br />Answered.</h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
              Everything you need to know about VYRA FITNESS memberships, classes, and facilities.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
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

          <Reveal delay={300}>
            <div className="glass-card p-6 text-center mt-8">
              <p className="text-white/60 text-sm mb-4">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn-primary text-sm">Contact Us</Link>
                <Link to="/book-trial" className="btn-ghost text-sm">Book Free Trial</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
