import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import Counter from '@/components/Counter';

const heroImage = 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920';

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 5000, suffix: '+', label: 'Active Members' },
  { value: 25, suffix: '+', label: 'Expert Trainers' },
  { value: 50, suffix: '+', label: 'Premium Equipment' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="VYRA Fitness premium gym interior"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
      </div>

      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] animate-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold-600/5 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '1.5s' }} />

      {/* Vignette for cinematic depth */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(8,9,11,0.5) 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-20 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-10 h-px bg-gold-500" />
            <span className="section-label">Premium Fitness Club</span>
          </div>

          <h1 className="display-heading text-balance animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Build Your
            <br />
            <span className="gold-shimmer">Strongest</span> Self.
          </h1>

          <p className="text-white/70 text-lg md:text-xl mt-6 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Premium training, expert coaching and an environment designed to push you beyond ordinary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/membership" className="btn-primary group">
              Join Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/book-trial" className="btn-ghost group">
              <Calendar className="w-4 h-4" />
              Book Free Trial
            </Link>
          </div>

          <p className="text-white/50 text-sm mt-6 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Open today • 5:00 AM – 11:00 PM
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl animate-fade-up" style={{ animationDelay: '1s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="group relative">
              <div className="absolute -inset-2 rounded-2xl bg-gold-500/0 group-hover:bg-gold-500/5 blur-xl transition-all duration-500" />
              <div className="relative font-display text-3xl md:text-5xl text-white group-hover:text-gold-400 transition-colors duration-300 glow-text">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="relative text-xs uppercase tracking-wider text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#info-bar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
