import { Link } from 'react-router-dom';
import { ArrowRight, Award, Languages, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { trainers } from '@/data/content';

export default function TrainersPreview() {
  return (
    <section id="trainers" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold-500" />
                <span className="section-label">Our Trainers</span>
              </div>
              <h2 className="display-heading text-balance">Train With Experts.</h2>
            </div>
            <Link to="/trainers" className="btn-ghost text-sm group self-start md:self-auto">
              View All Trainers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainers.map((trainer, i) => (
            <Reveal key={trainer.id} delay={i * 100}>
              <Link to="/trainers" className="group block">
                <div className="relative rounded-2xl overflow-hidden h-80 mb-4">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-lg font-bold">{trainer.name}</h3>
                    <p className="text-sm text-gold-500">{trainer.role}</p>
                    <p className="text-xs text-white/50 mt-1">{trainer.experience}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {trainer.specialization.slice(0, 2).map((s) => (
                    <span key={s} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
