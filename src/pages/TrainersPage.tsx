import { Link } from 'react-router-dom';
import { Award, Languages, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { trainers } from '@/data/content';
import { whatsappLink } from '@/lib/supabase';

export default function TrainersPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Trainers</span>
            </div>
            <h1 className="display-heading text-balance">Train With Experts.</h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
              Certified, experienced, and genuinely invested in your progress. Meet the coaches who make VYRA different.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-8">
          {trainers.map((trainer, i) => (
            <Reveal key={trainer.id} delay={i * 100}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 glass-card p-6 md:p-8">
                <div className="relative rounded-2xl overflow-hidden h-80 lg:h-full min-h-[300px]">
                  <img src={trainer.image} alt={trainer.name} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                </div>

                <div className="lg:col-span-2">
                  <h2 className="font-heading text-2xl font-bold">{trainer.name}</h2>
                  <p className="text-gold-500 font-heading text-sm uppercase tracking-wider mt-1">{trainer.role}</p>
                  <p className="text-white/50 text-sm mt-1">{trainer.experience} Experience</p>

                  <p className="text-white/70 text-sm leading-relaxed mt-4">{trainer.bio}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div>
                      <div className="flex items-center gap-2 text-gold-500 mb-2">
                        <Award className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider font-heading">Certifications</span>
                      </div>
                      <ul className="space-y-1">
                        {trainer.certifications.map((c) => (
                          <li key={c} className="text-sm text-white/60 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 mt-1 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gold-500 mb-2">
                        <Languages className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-wider font-heading">Languages</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {trainer.languages.map((lang) => (
                          <span key={lang} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-gold-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider font-heading">Available Classes</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trainer.availableClasses.map((c) => (
                        <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-500 border border-gold-500/20">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Link to="/classes" className="btn-primary text-sm">
                      Book Session
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={whatsappLink(`Hi VYRA FITNESS, I would like to book a personal training session with ${trainer.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-sm"
                    >
                      Personal Training Enquiry
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
