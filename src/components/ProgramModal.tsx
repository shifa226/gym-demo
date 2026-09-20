import { useEffect } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Program } from '@/types';

interface Props {
  program: Program | null;
  onClose: () => void;
}

export default function ProgramModal({ program, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (program) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-ink-950/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative glass max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl scrollbar-hide animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-ink-950/60 backdrop-blur flex items-center justify-center text-white hover:bg-gold-500 hover:text-ink-950 transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="relative h-64 md:h-72 overflow-hidden rounded-t-2xl">
          <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent" />
          <div className="absolute bottom-5 left-6">
            <span className="font-display text-3xl text-gold-500">{program.number}</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-1">{program.title}</h2>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <p className="text-white/70 leading-relaxed mb-6">{program.longDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 text-gold-500 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider">Duration</span>
              </div>
              <p className="text-sm text-white/80">{program.duration}</p>
            </div>
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 text-gold-500 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider">Schedule</span>
              </div>
              <p className="text-sm text-white/80">{program.schedule}</p>
            </div>
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 text-gold-500 mb-2">
                <User className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider">Trainer</span>
              </div>
              <p className="text-sm text-white/80">{program.trainer}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-heading text-sm uppercase tracking-widest text-gold-500 mb-3">Benefits</h4>
              <ul className="space-y-2">
                {program.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm uppercase tracking-widest text-gold-500 mb-3">Ideal For</h4>
              <ul className="space-y-2">
                {program.idealFor.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/classes" className="btn-primary flex-1" onClick={onClose}>
              Book Class
            </Link>
            <Link to="/book-trial" className="btn-ghost flex-1" onClick={onClose}>
              <Phone className="w-4 h-4" /> Book Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
