import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CursorGlow from '@/components/CursorGlow';

export default function PublicLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
