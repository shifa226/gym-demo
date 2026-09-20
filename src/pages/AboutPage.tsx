import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Wrench, Dumbbell, Target, Heart, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';

const aboutImage = 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200';
const interiorImage = 'https://images.pexels.com/photos/236303/pexels-photo-236303.jpeg?auto=compress&cs=tinysrgb&w=800';

const pillars = [
  { icon: Dumbbell, title: 'Strength Training', desc: 'Progressive overload with compound lifts and periodised programming.' },
  { icon: Wrench, title: 'Modern Equipment', desc: 'Commercial-grade machines and free weights, maintained weekly.' },
  { icon: Award, title: 'Expert Coaching', desc: 'Certified trainers who build plans around your goals and body.' },
  { icon: Target, title: 'Personalized Programs', desc: 'No cookie-cutter routines. Your program is yours alone.' },
  { icon: Users, title: 'Community', desc: 'A supportive culture that keeps you accountable and motivated.' },
  { icon: Heart, title: 'Recovery', desc: 'Mobility, stretching, and recovery protocols built into every plan.' },
];

const stats = [
  { icon: Award, value: 10, suffix: '+', label: 'Years' },
  { icon: Wrench, value: 50, suffix: '+', label: 'Equipment' },
  { icon: Users, value: 25, suffix: '+', label: 'Trainers' },
  { icon: Dumbbell, value: 5000, suffix: '+', label: 'Members' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">About VYRA Fitness</span>
            </div>
            <h1 className="display-heading text-balance max-w-4xl">
              More Than A Gym.<br />
              <span className="gold-gradient-text">A Standard.</span>
            </h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
              VYRA FITNESS was founded in Whitefield, Bengaluru with a single mission — to build a training space where serious fitness meets serious coaching. No frills. No gimmicks. Just results.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="rounded-2xl overflow-hidden">
                <img src={interiorImage} alt="VYRA Fitness cardio area" loading="lazy" className="w-full h-[450px] object-cover" />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Sparkles className="w-5 h-5 text-gold-500" />
                  <span className="section-label">Our Philosophy</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-balance">
                  Built for people who are serious about progress.
                </h2>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    We believe fitness is not about quick fixes or six-week transformations. It is about showing up, training smart, and building habits that last a lifetime. Every program at VYRA is designed with that philosophy at its core.
                  </p>
                  <p>
                    Our coaches do not just count reps. They analyse movement, track progress, adjust programming, and hold you accountable. Whether your goal is fat loss, strength, muscle gain, or simply feeling better in your body — we build the path, you walk it.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink-900/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold-500" />
                <span className="section-label">What We Offer</span>
                <span className="w-10 h-px bg-gold-500" />
              </div>
              <h2 className="display-heading text-balance">Six Pillars of VYRA.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="glass-card p-6 group hover:border-gold-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                    <p.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-gold-500 transition-colors">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="glass rounded-3xl p-10 md:p-14 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">A Decade of Dedication</h2>
              <p className="text-white/60 mb-10">Numbers that speak for themselves.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <stat.icon className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                    <div className="font-display text-4xl md:text-5xl text-white">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs uppercase tracking-wider text-white/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/membership" className="btn-primary mt-10 group">
                Join VYRA Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
