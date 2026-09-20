import { useState } from 'react';
import { Dumbbell, Heart, Activity, Zap, Shield, User, Flame, HeartPulse, Music, Snowflake } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { equipment, equipmentCategories } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell, Heart, Activity, Zap, Shield, User, Flame, HeartPulse, Music, Snowflake,
};

export default function Equipment() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? equipment : equipment.filter((e) => e.category === filter);

  return (
    <section id="equipment" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Equipment</span>
              <span className="w-10 h-px bg-gold-500" />
            </div>
            <h2 className="display-heading text-balance">Engineered For Performance.</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Every piece of equipment at VYRA is commercial-grade, meticulously maintained, and chosen for results.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {equipmentCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-heading uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gold-500 text-ink-950'
                    : 'border border-white/10 text-white/60 hover:border-gold-500/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => {
            const Icon = iconMap[item.category === 'Free Weights' ? 'Dumbbell' : item.category === 'Cardio' ? 'HeartPulse' : item.category === 'Strength' ? 'Shield' : item.category === 'Functional' ? 'Activity' : 'Snowflake'] || Dumbbell;
            return (
              <Reveal key={item.id} delay={i * 60}>
                <div className="glass-card p-5 group hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-gold-500" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-1 group-hover:text-gold-500 transition-colors">{item.name}</h3>
                  <p className="text-xs text-gold-500/70 mb-2">{item.muscle}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
