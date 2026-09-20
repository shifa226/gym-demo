import { Camera, Snowflake, Lock, ShowerHead, CircleParking, Droplets, Wifi, User, HeartPulse, Dumbbell, Activity, Heart, Shield, Sparkles, Music, Sparkle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { amenities } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera, Snowflake, Lock, ShowerHead, CircleParking, Droplets, Wifi, User, HeartPulse, Dumbbell, Activity, Heart, Shield, Sparkles, Music, Sparkle,
};

export default function Amenities() {
  const enabled = amenities.filter((a) => a.enabled);

  return (
    <section id="amenities" className="py-24 md:py-32 bg-ink-900/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Amenities</span>
              <span className="w-10 h-px bg-gold-500" />
            </div>
            <h2 className="display-heading text-balance">Everything You Need.</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Premium facilities designed for comfort, safety, and performance.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {enabled.map((amenity, i) => {
            const Icon = iconMap[amenity.icon] || Sparkles;
            return (
              <Reveal key={amenity.id} delay={i * 50}>
                <div className="glass-card p-5 flex items-center gap-4 group hover:border-gold-500/30 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <span className="text-sm font-heading text-white/80 group-hover:text-white transition-colors">{amenity.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
