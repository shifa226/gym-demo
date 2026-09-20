import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { GYM_PHONE, whatsappLink } from '@/lib/supabase';

const items = [
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: ['Mon–Sat: 5:00 AM – 11:00 PM', 'Sunday: 7:00 AM – 9:00 PM'],
    href: '/classes',
  },
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Whitefield, Bengaluru'],
    href: '/contact',
  },
  {
    icon: Phone,
    title: 'Contact',
    lines: [GYM_PHONE],
    href: `tel:${GYM_PHONE}`,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    lines: ['Chat With Us'],
    href: whatsappLink('Hi VYRA FITNESS, I would like to know more.'),
  },
];

export default function InfoBar() {
  return (
    <section id="info-bar" className="relative z-10 -mt-px bg-ink-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-start gap-3 p-5 md:p-6 hover:bg-white/[0.03] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-gold-500" />
              </div>
              <div className="min-w-0">
                <h4 className="font-heading text-xs uppercase tracking-widest text-white/50 mb-1">{item.title}</h4>
                {item.lines.map((line, i) => (
                  <p key={i} className={`text-sm ${i === 0 ? 'text-white/90' : 'text-white/50'}`}>{line}</p>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
