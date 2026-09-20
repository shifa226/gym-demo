import { Link } from 'react-router-dom';
import { ArrowRight, Dumbbell, Users, Award, Wrench } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';

const aboutImage = 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1000';

const stats = [
  { icon: Award, value: 10, suffix: '+', label: 'Years' },
  { icon: Wrench, value: 50, suffix: '+', label: 'Equipment' },
  { icon: Users, value: 25, suffix: '+', label: 'Trainers' },
  { icon: Dumbbell, value: 5000, suffix: '+', label: 'Members' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-500/8 rounded-full blur-[150px] animate-glow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold-600/5 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '2s' }} />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden group glow-border">
                <img
                  src={aboutImage}
                  alt="VYRA Fitness gym interior"
                  loading="lazy"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/0 via-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-transparent transition-all duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 max-w-[200px] hidden md:block glow-border" style={{ boxShadow: '0 0 40px -10px rgba(245,166,35,0.15)' }}>
                <div className="font-display text-4xl text-gold-500">
                  <Counter target={10} suffix="+" />
                </div>
                <p className="text-xs text-white/60 mt-1">Years of building champions in Bengaluru</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold-500" />
                <span className="section-label">About VYRA</span>
              </div>
              <h2 className="display-heading mb-6 text-balance">
                More Than<br />A Gym.
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  VYRA FITNESS is Whitefield's premier training facility — built for people who are serious about progress. We combine world-class equipment, certified coaches, and a culture that pushes you to show up consistently.
                </p>
                <p>
                  From strength training and functional fitness to yoga, boxing, and recovery — everything you need to build your strongest self is under one roof. No gimmicks. Just intelligent programming, expert guidance, and a community that keeps you accountable.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass-card-hover p-4 text-center group cursor-default">
                    <stat.icon className="w-5 h-5 text-gold-500 mx-auto mb-2 group-hover:drop-shadow-[0_0_8px_rgba(245,166,35,0.5)] transition-all" />
                    <div className="font-display text-2xl text-white group-hover:text-gold-400 transition-colors duration-300">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-primary mt-8 group">
                Explore Our Facility
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
