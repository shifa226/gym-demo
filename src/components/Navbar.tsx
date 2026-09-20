import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { whatsappLink } from '@/lib/supabase';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Trainers', path: '/trainers' },
  { label: 'Classes', path: '/classes' },
  { label: 'Membership', path: '/membership' },
  { label: 'Gallery', path: '/gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNav = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'glass shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-ink-950/40 to-transparent'
        }`}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent transition-opacity duration-500" style={{ opacity: scrolled ? 1 : 0 }} />
        <nav className="relative max-w-7xl mx-auto px-5 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" aria-label="VYRA FITNESS home">
            <div className="relative w-9 h-9 rounded-lg bg-gold-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500" style={{ boxShadow: '0 0 20px rgba(245,166,35,0.3)' }}>
              <div className="absolute inset-0 rounded-lg bg-gold-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <Dumbbell className="relative w-5 h-5 text-ink-950" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-wider">VYRA</span>
              <span className="font-heading text-[9px] tracking-widest text-gold-500 uppercase">Fitness</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm transition-colors duration-200 relative group ${
                  location.pathname === link.path
                    ? 'text-gold-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} style={{ boxShadow: location.pathname === link.path ? '0 0 8px rgba(245,166,35,0.5)' : 'none' }} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/book-trial" className="btn-ghost text-sm px-5 py-2.5">
              Book Trial
            </Link>
            <Link to="/membership" className="btn-primary text-sm px-5 py-2.5">
              Join Now
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-400 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-ink-900 border-l border-white/5 p-6 transition-transform duration-400 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between mb-10">
            <span className="font-display text-2xl tracking-wider">VYRA</span>
            <button onClick={() => setMenuOpen(false)} className="text-white p-2" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`text-left font-heading text-lg py-3 px-4 rounded-xl transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-gold-500/10 text-gold-500'
                    : 'text-white/80 hover:bg-white/5'
                }`}
                style={{
                  animation: menuOpen ? `slideIn 0.3s ease-out ${i * 0.05}s both` : 'none',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <Link to="/book-trial" className="btn-ghost w-full" onClick={() => setMenuOpen(false)}>
              Book Free Trial
            </Link>
            <Link to="/membership" className="btn-primary w-full" onClick={() => setMenuOpen(false)}>
              Join Now
            </Link>
            <a
              href={whatsappLink('Hi VYRA FITNESS, I would like to know more about your membership plans.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full border-green-500/40 text-green-400 hover:border-green-500"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
