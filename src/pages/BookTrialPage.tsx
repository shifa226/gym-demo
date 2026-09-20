import { useState } from 'react';
import { Calendar, CheckCircle2, MessageCircle, Clock } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { supabase, whatsappLink } from '@/lib/supabase';

const goals = ['Muscle Gain', 'Fat Loss', 'Strength', 'General Fitness', 'Mobility', 'Other'];
const timeSlots = ['5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

export default function BookTrialPage() {
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', preferredDate: '', preferredTime: '', fitnessGoal: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('trial_bookings').insert({
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        fitness_goal: formData.fitnessGoal,
      });
      if (error) throw error;
      setStatus('success');
      setFormData({ fullName: '', phone: '', email: '', preferredDate: '', preferredTime: '', fitnessGoal: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Could not submit. Please try again or WhatsApp us.');
    }
  };

  if (status === 'success') {
    return (
      <section className="pt-32 md:pt-40 pb-24 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-5 lg:px-8 text-center w-full">
          <Reveal>
            <div className="glass-card p-10 md:p-14">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold mb-3">Trial Booked!</h1>
              <p className="text-white/70 mb-6">
                Your free trial session has been scheduled. Our team will call you within 24 hours to confirm the details.
                Get ready to experience VYRA!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={whatsappLink('Hi VYRA FITNESS, I just booked a free trial. Looking forward to it!')} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="w-4 h-4" /> Confirm on WhatsApp
                </a>
                <a href="/" className="btn-ghost">Back to Home</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 md:pt-40 pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Free Trial</span>
            </div>
            <h1 className="display-heading text-balance">Your First Session<br />Is On Us.</h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
              Experience VYRA FITNESS with a complimentary trial session. No commitment, no pressure.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-2xl mx-auto px-5 lg:px-8">
          <Reveal delay={150}>
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-2 text-gold-500 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-heading text-sm uppercase tracking-wider">Book Your Free Trial</span>
              </div>

              <div>
                <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Full Name <span className="text-gold-500">*</span></label>
                <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" placeholder="Your name" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Phone <span className="text-gold-500">*</span></label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Email <span className="text-gold-500">*</span></label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" placeholder="you@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Preferred Date <span className="text-gold-500">*</span></label>
                  <input name="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Preferred Time <span className="text-gold-500">*</span></label>
                  <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} required className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-500 focus:outline-none transition-colors">
                    <option value="">Select time</option>
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Fitness Goal <span className="text-gold-500">*</span></label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {goals.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setFormData({ ...formData, fitnessGoal: goal })}
                      className={`py-2.5 px-3 rounded-xl text-sm border transition-all duration-200 ${
                        formData.fitnessGoal === goal
                          ? 'bg-gold-500/10 border-gold-500 text-gold-500'
                          : 'border-white/10 text-white/60 hover:border-gold-500/50'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="fitnessGoal" value={formData.fitnessGoal} required />
              </div>

              {status === 'error' && (
                <div className="glass-card p-4 border-red-500/30">
                  <p className="text-sm text-red-400">{errorMsg}</p>
                </div>
              )}

              <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-50">
                {status === 'submitting' ? 'Booking...' : 'Book My Free Trial'}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-white/40">
                <Clock className="w-3.5 h-3.5" />
                We will confirm your slot within 24 hours
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
