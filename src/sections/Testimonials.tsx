import { Star, Quote } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-ink-900/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Testimonials</span>
              <span className="w-10 h-px bg-gold-500" />
            </div>
            <h2 className="display-heading text-balance">Real People.<br />Real Consistency.</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <div className="glass-card p-6 h-full flex flex-col group hover:border-gold-500/30 transition-all duration-300">
                <Quote className="w-8 h-8 text-gold-500/30 mb-4" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed text-sm flex-1 mb-5">"{t.text}"</p>
                <div className="border-t border-white/5 pt-4">
                  <p className="font-heading font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/50 mt-0.5">
                    Goal: {t.goal} • {t.duration} • Member since {t.memberSince}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
