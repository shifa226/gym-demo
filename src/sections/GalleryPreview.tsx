import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { galleryItems } from '@/data/content';

const categories = ['All', 'Gym', 'Equipment', 'Training', 'Classes', 'Events'];

export default function GalleryPreview() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter);

  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <section id="gallery" className="py-24 md:py-32 bg-ink-900/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Gallery</span>
              <span className="w-10 h-px bg-gold-500" />
            </div>
            <h2 className="display-heading text-balance">Step Inside VYRA.</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
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

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={i * 50}>
              <button
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-xs text-gold-500 uppercase tracking-wider">{item.category}</p>
                    <p className="font-heading text-sm text-white">{item.title}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/95 backdrop-blur-md animate-fade-in p-4" onClick={closeLightbox}>
          <button className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-gold-500 hover:text-ink-950 transition-all" onClick={closeLightbox} aria-label="Close">
            <X className="w-5 h-5" />
          </button>
          <button className="absolute left-5 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-gold-500 hover:text-ink-950 transition-all" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img
            src={filtered[lightbox]?.image}
            alt={filtered[lightbox]?.title}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute right-5 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-gold-500 hover:text-ink-950 transition-all" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 glass px-5 py-2 rounded-full text-center">
            <p className="text-xs text-gold-500 uppercase tracking-wider">{filtered[lightbox]?.category}</p>
            <p className="font-heading text-sm text-white">{filtered[lightbox]?.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
