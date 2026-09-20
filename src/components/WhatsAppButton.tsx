import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '@/lib/supabase';

const quickMessages = [
  { label: 'Membership Enquiry', msg: 'Hi VYRA FITNESS, I would like to know more about your membership plans.' },
  { label: 'Personal Training', msg: 'Hi VYRA FITNESS, I am interested in personal training. Can you share details?' },
  { label: 'Free Trial', msg: 'Hi VYRA FITNESS, I would like to book a free trial session.' },
  { label: 'Class Enquiry', msg: 'Hi VYRA FITNESS, I want to know about your class schedule and bookings.' },
  { label: 'General Enquiry', msg: 'Hi VYRA FITNESS, I have a general question.' },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const close = () => setOpen(false);
      document.addEventListener('click', close);
      return () => document.removeEventListener('click', close);
    }
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="glass-card p-4 w-72 animate-fade-up shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-3">
            <span className="font-heading text-sm font-semibold text-white">Chat with us</span>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white" aria-label="Close">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {quickMessages.map((qm) => (
              <a
                key={qm.label}
                href={whatsappLink(qm.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-sm text-white/70 hover:text-gold-500 hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-200"
              >
                {qm.label}
              </a>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Open WhatsApp menu"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
