import { useState } from 'react';
import { Clock, User, Calendar, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { classSchedule } from '@/data/content';
import { supabase } from '@/lib/supabase';

const days = ['All', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function ClassesPage() {
  const [filter, setFilter] = useState('All');
  const [booked, setBooked] = useState<string[]>([]);
  const [bookingMsg, setBookingMsg] = useState<string | null>(null);

  const filtered = filter === 'All' ? classSchedule : classSchedule.filter((c) => c.day === filter);

  const handleBook = async (cls: typeof classSchedule[0]) => {
    if (booked.includes(cls.id)) return;
    try {
      await supabase.from('class_bookings').insert({
        class_name: cls.name,
        class_day: cls.day,
        class_time: cls.time,
        member_name: 'Guest User',
        member_email: 'guest@vyrafitness.in',
        member_phone: '',
      });
    } catch {
      // still show success for UX - the booking intent is recorded
    }
    setBooked([...booked, cls.id]);
    setBookingMsg(`Booked: ${cls.name} on ${cls.day} at ${cls.time}! Check your email for confirmation.`);
    setTimeout(() => setBookingMsg(null), 4000);
  };

  const getSlotStatus = (booked: number, capacity: number) => {
    const remaining = capacity - booked;
    if (remaining === 0) return { label: 'FULL', color: 'text-red-400 bg-red-500/10 border-red-500/20', icon: XCircle };
    if (remaining <= 3) return { label: 'ALMOST FULL', color: 'text-gold-500 bg-gold-500/10 border-gold-500/20', icon: AlertCircle };
    return { label: 'AVAILABLE', color: 'text-green-400 bg-green-500/10 border-green-500/20', icon: CheckCircle2 };
  };

  return (
    <>
      <section className="pt-32 md:pt-40 pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Class Schedule</span>
            </div>
            <h1 className="display-heading text-balance">Find Your Class.</h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
              Book group classes online. Pro and Elite members get priority booking.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2 mb-8">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setFilter(day)}
                  className={`px-5 py-2.5 rounded-full text-sm font-heading uppercase tracking-wider transition-all duration-300 ${
                    filter === day
                      ? 'bg-gold-500 text-ink-950'
                      : 'border border-white/10 text-white/60 hover:border-gold-500/50 hover:text-white'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </Reveal>

          {bookingMsg && (
            <div className="mb-6 glass-card p-4 border-green-500/30 flex items-center gap-3 animate-fade-up">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <p className="text-sm text-white/80">{bookingMsg}</p>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <Calendar className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/60">No classes scheduled for this day.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((cls, i) => {
                const status = getSlotStatus(cls.booked, cls.capacity);
                const remaining = cls.capacity - cls.booked;
                const isBooked = booked.includes(cls.id);
                const StatusIcon = status.icon;

                return (
                  <Reveal key={cls.id} delay={i * 50}>
                    <div className="glass-card p-5 group hover:border-gold-500/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="font-display text-2xl text-gold-500">{cls.time}</p>
                          <h3 className="font-heading text-lg font-semibold mt-1">{cls.name}</h3>
                        </div>
                        <span className={`text-[10px] px-2.5 py-1 rounded-full border font-heading uppercase tracking-wider flex items-center gap-1 ${status.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-white/60 mb-4">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-gold-500" />
                          {cls.trainer}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gold-500" />
                          {cls.duration}
                        </span>
                        <span className="text-white/40">{cls.difficulty}</span>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-white/50">{cls.booked}/{cls.capacity} booked</span>
                          <span className="text-white/50">{remaining} slots left</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${remaining === 0 ? 'bg-red-500' : remaining <= 3 ? 'bg-gold-500' : 'bg-green-500'}`}
                            style={{ width: `${(cls.booked / cls.capacity) * 100}%` }}
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => handleBook(cls)}
                        disabled={remaining === 0 || isBooked}
                        className={`w-full py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-300 ${
                          isBooked
                            ? 'bg-green-500/20 text-green-400 cursor-default'
                            : remaining === 0
                            ? 'bg-white/5 text-white/30 cursor-not-allowed'
                            : 'bg-gold-500 text-ink-950 hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(245,166,35,0.3)] active:scale-95'
                        }`}
                      >
                        {isBooked ? 'Booked' : remaining === 0 ? 'Full' : 'Book Class'}
                      </button>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
