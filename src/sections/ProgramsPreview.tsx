import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import ProgramCard from '@/components/ProgramCard';
import ProgramModal from '@/components/ProgramModal';
import { programs } from '@/data/content';
import type { Program } from '@/types';

export default function ProgramsPreview() {
  const [selected, setSelected] = useState<Program | null>(null);

  return (
    <section id="programs" className="py-24 md:py-32 bg-ink-900/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold-500" />
                <span className="section-label">Our Programs</span>
              </div>
              <h2 className="display-heading text-balance">Train With Purpose.</h2>
            </div>
            <Link to="/programs" className="btn-ghost group text-sm self-start md:self-auto">
              View All Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.slice(0, 8).map((program, i) => (
            <Reveal key={program.id} delay={i * 80}>
              <ProgramCard program={program} onSelect={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProgramModal program={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
