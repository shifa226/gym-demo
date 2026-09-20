import { Tag, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { offers } from '@/data/content';

export default function Offers() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  const active = offers.filter((o) => o.active);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Special Offers</span>
              <span className="w-10 h-px bg-gold-500" />
            </div>
            <h2 className="display-heading text-balance">Save On Your Journey.</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {active.map((offer, i) => (
            <Reveal key={offer.id} delay={i * 120}>
              <div className="relative glass-card-hover p-7 overflow-hidden group h-full">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500/0 group-hover:bg-gold-500/15 rounded-full blur-3xl transition-all duration-700" />
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-gold-500" />
                  <span className="font-heading text-xs uppercase tracking-widest text-gold-500">{offer.title}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{offer.subtitle}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{offer.description}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-ink-950/60 border border-dashed border-gold-500/30">
                    <span className="font-mono text-sm text-gold-500">{offer.code}</span>
                  </div>
                  <button
                    onClick={() => copyCode(offer.code)}
                    className="flex items-center gap-1.5 text-xs text-white/60 hover:text-gold-500 transition-colors"
                  >
                    {copied === offer.code ? (
                      <><Check className="w-3.5 h-3.5 text-green-500" /> Copied</>
                    ) : (
                      <><Copy className="w-3.5 h-3.5" /> Copy code</>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
