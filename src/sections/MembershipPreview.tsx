import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import { membershipPlans } from '@/data/content';

const durations = [
  { key: 'monthly' as const, label: 'Monthly' },
  { key: 'quarterly' as const, label: 'Quarterly' },
  { key: 'halfYearly' as const, label: 'Half-Yearly' },
  { key: 'annual' as const, label: 'Annual' },
];

export default function MembershipPreview() {
  return (
    <section id="membership" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/8 rounded-full blur-[180px] animate-glow" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <Reveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Membership</span>
              <span className="w-10 h-px bg-gold-500" />
            </div>
            <h2 className="display-heading text-balance">Choose Your Membership.</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {membershipPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 120}>
              <div className={`relative glass-card-hover p-7 h-full flex flex-col ${
                plan.popular ? 'border-gold-500/40' : ''
              }`} style={plan.popular ? { boxShadow: '0 0 50px -10px rgba(245,166,35,0.2), 0 20px 60px -20px rgba(245,166,35,0.15)' } : {}}>
                {plan.popular && (
                  <>
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-ink-950 text-xs font-heading uppercase tracking-wider px-4 py-1 rounded-full" style={{ boxShadow: '0 0 20px rgba(245,166,35,0.4)' }}>
                      Most Popular
                    </span>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none" />
                  </>
                )}
                <div className="relative">
                <h3 className="font-display text-3xl tracking-wide relative">{plan.name}</h3>
                <p className="text-white/50 text-sm mb-5 relative">{plan.tagline}</p>

                <div className="mb-5 relative">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl text-gold-500 glow-text">₹{plan.monthly.toLocaleString('en-IN')}</span>
                    <span className="text-white/50 text-sm">/month</span>
                  </div>
                  <p className="text-xs text-white/40 mt-1">or save with annual plans</p>
                </div>

                <ul className="space-y-3 mb-6 flex-1 relative">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0 group-hover:drop-shadow-[0_0_6px_rgba(245,166,35,0.6)] transition-all" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/membership" className={`${plan.popular ? 'btn-primary' : 'btn-ghost'} w-full relative`}>
                  Choose {plan.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="text-center mt-10">
            <p className="text-white/50 text-sm mb-4">Also available in quarterly, half-yearly, and annual durations with significant savings.</p>
            <Link to="/membership" className="btn-ghost text-sm">
              <Calendar className="w-4 h-4" />
              View Full Pricing
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
