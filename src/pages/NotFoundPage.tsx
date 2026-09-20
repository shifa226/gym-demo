import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center">
        <h1 className="font-display text-[120px] md:text-[200px] leading-none gold-gradient-text">404</h1>
        <p className="text-white/70 text-lg mb-2">This page took a rest day.</p>
        <p className="text-white/40 text-sm mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="btn-primary group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
