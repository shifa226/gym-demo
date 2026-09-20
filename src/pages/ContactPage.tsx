import { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { supabase, GYM_PHONE, GYM_EMAIL, GYM_ADDRESS, whatsappLink } from '@/lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('enquiries').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        source: 'contact_form',
      });
      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMsg('Could not submit. Please try again or WhatsApp us directly.');
    }
  };

  return (
    <>
      <section className="pt-32 md:pt-40 pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Contact</span>
            </div>
            <h1 className="display-heading text-balance">Get In Touch.</h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
              Questions about membership, classes, or personal training? We respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Reveal>
              <div className="space-y-4">
                <a href={`tel:${GYM_PHONE}`} className="glass-card p-5 flex items-start gap-4 group hover:border-gold-500/30 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm text-white/90">{GYM_PHONE}</p>
                  </div>
                </a>
                <a href={`mailto:${GYM_EMAIL}`} className="glass-card p-5 flex items-start gap-4 group hover:border-gold-500/30 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm text-white/90">{GYM_EMAIL}</p>
                  </div>
                </a>
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-sm text-white/90">{GYM_ADDRESS}</p>
                  </div>
                </div>
                <a href={whatsappLink('Hi VYRA FITNESS, I have a question.')} target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex items-start gap-4 group hover:border-green-500/30 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <p className="text-sm text-white/90">Chat with us instantly</p>
                  </div>
                </a>
                <div className="glass-card p-5">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-3">Follow Us</p>
                  <div className="flex items-center gap-3">
                    {[{ icon: Instagram, href: 'https://instagram.com' }, { icon: Facebook, href: 'https://facebook.com' }, { icon: Youtube, href: 'https://youtube.com' }].map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:border-gold-500 hover:text-gold-500 transition-all hover:scale-110">
                        <s.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Name <span className="text-gold-500">*</span></label>
                      <input name="name" value={formData.name} onChange={handleChange} required className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Email <span className="text-gold-500">*</span></label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Phone <span className="text-gold-500">*</span></label>
                      <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Subject <span className="text-gold-500">*</span></label>
                      <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-500 focus:outline-none transition-colors">
                        <option value="">Select</option>
                        <option value="Membership">Membership Enquiry</option>
                        <option value="Personal Training">Personal Training</option>
                        <option value="Class Booking">Class Booking</option>
                        <option value="Corporate">Corporate Membership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Message <span className="text-gold-500">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors resize-none" placeholder="Tell us how we can help..." />
                  </div>

                  {status === 'success' && (
                    <div className="glass-card p-4 border-green-500/30 flex items-center gap-3 animate-fade-up">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <p className="text-sm text-white/80">Thank you! Your enquiry has been received. We will respond within 24 hours.</p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="glass-card p-4 border-red-500/30 flex items-center gap-3">
                      <p className="text-sm text-red-400">{errorMsg}</p>
                    </div>
                  )}

                  <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-50">
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    {status !== 'submitting' && <Send className="w-4 h-4" />}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
