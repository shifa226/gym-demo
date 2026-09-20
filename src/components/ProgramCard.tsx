import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Program } from '@/types';

interface Props {
  program: Program;
  onSelect: (program: Program) => void;
}

export default function ProgramCard({ program, onSelect }: Props) {
  return (
    <div
      className="group relative glass-card-hover overflow-hidden cursor-pointer hover:-translate-y-1.5"
      onClick={() => onSelect(program)}
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/0 group-hover:bg-gold-500/10 rounded-full blur-3xl transition-all duration-700 z-0" />
      <div className="relative h-52 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gold-500/0 via-gold-500/0 to-gold-500/0 group-hover:from-gold-500/10 transition-all duration-700" />
        <span className="absolute top-4 left-4 font-display text-2xl text-gold-500/80 group-hover:text-gold-400 group-hover:drop-shadow-[0_0_10px_rgba(245,166,35,0.5)] transition-all">{program.number}</span>
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-ink-950/70 backdrop-blur text-white/80 border border-white/10">
            {program.difficulty}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-ink-950/70 backdrop-blur text-white/80 border border-white/10">
            {program.duration}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-gold-400 transition-colors duration-300">{program.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">{program.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">Trainer: {program.trainer}</span>
          <button className="flex items-center gap-1 text-xs font-heading uppercase tracking-wider text-gold-500 group-hover:gap-2 transition-all">
            View Program
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
