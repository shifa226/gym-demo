import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-950 to-ink-900/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[180px] animate-glow" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-gold-600/5 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '2s' }} />
      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center relative">
        <Reveal>
          <div className="flex justify-center mb-6">
            <div className="relative w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-gold-500/20 blur-xl animate-glow" />
              <Sparkles className="relative w-7 h-7 text-gold-500" />
            </div>
          </div>
          <h2 className="display-heading text-balance mb-6">
            Your First Session<br /><span className="gold-shimmer">Is On Us.</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Experience VYRA FITNESS with a complimentary trial session. No commitment, no pressure — just bring your energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-trial" className="btn-primary group">
              Book Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/membership" className="btn-ghost">
              View Membership Plans
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
