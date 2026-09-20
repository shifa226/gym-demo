import { MapPin, Phone, Mail, Navigation, MessageCircle, Car, Train } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { GYM_PHONE, GYM_EMAIL, GYM_ADDRESS, GYM_MAPS_URL, whatsappLink } from '@/lib/supabase';

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-ink-900/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Find Us</span>
              <span className="w-10 h-px bg-gold-500" />
            </div>
            <h2 className="display-heading text-balance">Visit VYRA Fitness.</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="glass-card p-7 h-full">
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold mb-1">VYRA FITNESS</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{GYM_ADDRESS}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <a href={`tel:${GYM_PHONE}`} className="flex items-center gap-3 text-white/70 hover:text-gold-500 transition-colors group">
                  <Phone className="w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{GYM_PHONE}</span>
                </a>
                <a href={`mailto:${GYM_EMAIL}`} className="flex items-center gap-3 text-white/70 hover:text-gold-500 transition-colors group">
                  <Mail className="w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{GYM_EMAIL}</span>
                </a>
                <a href={whatsappLink('Hi VYRA FITNESS, I would like to visit your gym.')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-green-500 transition-colors group">
                  <MessageCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <Car className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/50">Parking</p>
                    <p className="text-sm text-white/80">Available on-site</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <Train className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white/50">Nearest Metro</p>
                    <p className="text-sm text-white/80">Whitefield (2km)</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 mb-6">
                <p className="text-xs text-white/50 mb-1">Nearby Landmark</p>
                <p className="text-sm text-white/80">Opposite Phoenix Marketcity, Whitefield</p>
              </div>

              <a href={GYM_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass-card p-2 h-full min-h-[400px] overflow-hidden">
              <iframe
                title="VYRA Fitness Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.987654321!2d77.7596!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11d9b1c1c1c1%3A0x0!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full min-h-[384px] rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
