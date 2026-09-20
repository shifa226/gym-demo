import { useState } from 'react';
import Reveal from '@/components/Reveal';
import ProgramCard from '@/components/ProgramCard';
import ProgramModal from '@/components/ProgramModal';
import { programs } from '@/data/content';
import type { Program } from '@/types';

export default function ProgramsPage() {
  const [selected, setSelected] = useState<Program | null>(null);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Programs</span>
            </div>
            <h1 className="display-heading text-balance">Train With Purpose.</h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
              Ten specialised programs, each designed by certified coaches. Find the one that matches your goal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((program, i) => (
              <Reveal key={program.id} delay={(i % 4) * 80}>
                <ProgramCard program={program} onSelect={setSelected} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProgramModal program={selected} onClose={() => setSelected(null)} />
    </>
  );
}
