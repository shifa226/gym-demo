import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Youtube, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { GYM_PHONE, GYM_EMAIL, GYM_ADDRESS, whatsappLink } from '@/lib/supabase';

export default function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gold-500 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-ink-950" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-wider">VYRA</span>
                <span className="font-heading text-[9px] tracking-widest text-gold-500 uppercase">Fitness</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Premium fitness club in Whitefield, Bengaluru. Train hard, live strong — with expert coaching and world-class equipment.
            </p>
            <p className="font-display text-2xl text-gold-500 tracking-wide">TRAIN HARD.<br />LIVE STRONG.</p>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Programs', path: '/programs' },
                { label: 'Membership', path: '/membership' },
                { label: 'Trainers', path: '/trainers' },
                { label: 'Classes', path: '/classes' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 text-sm hover:text-gold-500 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-white mb-5">Membership</h4>
            <ul className="space-y-3">
              <li><Link to="/membership" className="text-white/60 text-sm hover:text-gold-500 transition-colors">Plans</Link></li>
              <li><Link to="/book-trial" className="text-white/60 text-sm hover:text-gold-500 transition-colors">Free Trial</Link></li>
              <li><Link to="/programs" className="text-white/60 text-sm hover:text-gold-500 transition-colors">Personal Training</Link></li>
              <li><Link to="/classes" className="text-white/60 text-sm hover:text-gold-500 transition-colors">Class Schedule</Link></li>
              <li><Link to="/contact" className="text-white/60 text-sm hover:text-gold-500 transition-colors">Offers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${GYM_PHONE}`} className="flex items-start gap-3 text-white/60 text-sm hover:text-gold-500 transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{GYM_PHONE}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${GYM_EMAIL}`} className="flex items-start gap-3 text-white/60 text-sm hover:text-gold-500 transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{GYM_EMAIL}</span>
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" />
                  <span>{GYM_ADDRESS}</span>
                </span>
              </li>
              <li>
                <a
                  href={whatsappLink('Hi VYRA FITNESS, I would like to know more.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-gold-500 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:border-gold-500 hover:text-gold-500 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© 2026 VYRA FITNESS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-white/40 text-xs hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 text-xs hover:text-gold-500 transition-colors">Terms</Link>
            <Link to="/terms" className="text-white/40 text-xs hover:text-gold-500 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
