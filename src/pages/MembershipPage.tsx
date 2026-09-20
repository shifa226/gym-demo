import { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { membershipPlans } from '@/data/content';
import { whatsappLink } from '@/lib/supabase';

type Step = 'plan' | 'duration' | 'account' | 'review' | 'success';

const durations = [
  { key: 'monthly' as const, label: 'Monthly', months: 1 },
  { key: 'quarterly' as const, label: 'Quarterly', months: 3 },
  { key: 'halfYearly' as const, label: 'Half-Yearly', months: 6 },
  { key: 'annual' as const, label: 'Annual', months: 12 },
];

export default function MembershipPage() {
  const [step, setStep] = useState<Step>('plan');
  const [selectedPlan, setSelectedPlan] = useState<typeof membershipPlans[0] | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<typeof durations[0] | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    emergencyContact: '',
    startDate: '',
  });

  const handlePlanSelect = (plan: typeof membershipPlans[0]) => {
    setSelectedPlan(plan);
    setStep('duration');
  };

  const handleDurationSelect = (duration: typeof durations[0]) => {
    setSelectedDuration(duration);
    setStep('account');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('review');
  };

  const handleConfirm = () => {
    setStep('success');
  };

  const formatPrice = (n: number) => `₹${n.toLocaleString('en-IN')}`;

  const price = selectedPlan && selectedDuration ? selectedPlan[selectedDuration.key] : 0;
  const tax = Math.round(price * 0.18);
  const total = price + tax;

  return (
    <>
      <section className="pt-32 md:pt-40 pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Membership</span>
            </div>
            <h1 className="display-heading text-balance">Choose Your Membership.</h1>
            <p className="text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
              Transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Step indicator */}
      {step !== 'plan' && step !== 'success' && (
        <div className="max-w-3xl mx-auto px-5 lg:px-8 mb-8">
          <div className="flex items-center justify-between">
            {['Plan', 'Duration', 'Account', 'Review'].map((label, i) => {
              const stepOrder = ['plan', 'duration', 'account', 'review'];
              const currentIdx = stepOrder.indexOf(step);
              const isActive = i <= currentIdx;
              return (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${isActive ? 'bg-gold-500 text-ink-950' : 'bg-white/5 text-white/40'}`}>
                      {i + 1}
                    </div>
                    <span className={`text-xs ${isActive ? 'text-gold-500' : 'text-white/40'}`}>{label}</span>
                  </div>
                  {i < 3 && <div className={`flex-1 h-px mx-2 ${i < currentIdx ? 'bg-gold-500' : 'bg-white/10'}`} />}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Step: Plan Selection */}
      {step === 'plan' && (
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {membershipPlans.map((plan, i) => (
                <Reveal key={plan.id} delay={i * 120}>
                  <div className={`relative glass-card p-7 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                    plan.popular ? 'border-gold-500/50 shadow-[0_20px_60px_-20px_rgba(245,166,35,0.3)]' : 'hover:border-gold-500/30'
                  }`}
                    onClick={() => handlePlanSelect(plan)}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-ink-950 text-xs font-heading uppercase tracking-wider px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-display text-3xl tracking-wide">{plan.name}</h3>
                    <p className="text-white/50 text-sm mb-5">{plan.tagline}</p>
                    <div className="mb-5">
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl text-gold-500">{formatPrice(plan.monthly)}</span>
                        <span className="text-white/50 text-sm">/month</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                          <Check className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button className={plan.popular ? 'btn-primary w-full' : 'btn-ghost w-full'}>
                      Choose {plan.name}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="max-w-5xl mx-auto mt-10">
                <div className="glass-card p-6 overflow-x-auto scrollbar-hide">
                  <h3 className="font-heading text-sm uppercase tracking-widest text-gold-500 mb-4">Full Pricing Table</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-white/50 border-b border-white/5">
                        <th className="py-3 pr-4">Plan</th>
                        <th className="py-3 px-4 text-right">Monthly</th>
                        <th className="py-3 px-4 text-right">Quarterly</th>
                        <th className="py-3 px-4 text-right">Half-Yearly</th>
                        <th className="py-3 px-4 text-right">Annual</th>
                      </tr>
                    </thead>
                    <tbody>
                      {membershipPlans.map((plan) => (
                        <tr key={plan.id} className="border-b border-white/5 last:border-0">
                          <td className="py-3 pr-4 font-heading font-semibold">{plan.name}</td>
                          <td className="py-3 px-4 text-right text-white/70">{formatPrice(plan.monthly)}</td>
                          <td className="py-3 px-4 text-right text-white/70">{formatPrice(plan.quarterly)}</td>
                          <td className="py-3 px-4 text-right text-white/70">{formatPrice(plan.halfYearly)}</td>
                          <td className="py-3 px-4 text-right text-gold-500">{formatPrice(plan.annual)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Step: Duration */}
      {step === 'duration' && selectedPlan && (
        <section className="pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto px-5 lg:px-8">
            <button onClick={() => setStep('plan')} className="flex items-center gap-2 text-sm text-white/60 hover:text-gold-500 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to plans
            </button>
            <div className="glass-card p-6 md:p-8">
              <h2 className="font-heading text-xl font-bold mb-2">Choose Duration for {selectedPlan.name}</h2>
              <p className="text-white/60 text-sm mb-6">Longer commitments save more.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {durations.map((dur) => (
                  <button
                    key={dur.key}
                    onClick={() => handleDurationSelect(dur)}
                    className="glass-card p-5 text-left hover:border-gold-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading text-lg font-semibold group-hover:text-gold-500 transition-colors">{dur.label}</h3>
                        <p className="text-xs text-white/50 mt-0.5">{dur.months} month{dur.months > 1 ? 's' : ''}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-display text-2xl text-gold-500">{formatPrice(selectedPlan[dur.key])}</p>
                        <p className="text-xs text-white/40">{formatPrice(Math.round(selectedPlan[dur.key] / dur.months))}/mo</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step: Account */}
      {step === 'account' && (
        <section className="pb-24 md:pb-32">
          <div className="max-w-2xl mx-auto px-5 lg:px-8">
            <button onClick={() => setStep('duration')} className="flex items-center gap-2 text-sm text-white/60 hover:text-gold-500 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <form onSubmit={handleSubmitAccount} className="glass-card p-6 md:p-8 space-y-4">
              <h2 className="font-heading text-xl font-bold mb-2">Create Your Account</h2>
              <p className="text-white/60 text-sm mb-4">Fill in your details to proceed.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                <Field label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                <Field label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required placeholder="+91 98765 43210" />
                <Field label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleInputChange} required />
                <div>
                  <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleInputChange} required className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-gold-500 focus:outline-none transition-colors">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <Field label="Emergency Contact" name="emergencyContact" type="tel" value={formData.emergencyContact} onChange={handleInputChange} required placeholder="+91 98765 43210" />
                <Field label="Preferred Start Date" name="startDate" type="date" value={formData.startDate} onChange={handleInputChange} required />
              </div>
              <button type="submit" className="btn-primary w-full">
                Continue to Review
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Step: Review */}
      {step === 'review' && selectedPlan && selectedDuration && (
        <section className="pb-24 md:pb-32">
          <div className="max-w-2xl mx-auto px-5 lg:px-8">
            <button onClick={() => setStep('account')} className="flex items-center gap-2 text-sm text-white/60 hover:text-gold-500 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <div className="glass-card p-6 md:p-8">
              <h2 className="font-heading text-xl font-bold mb-6">Review Your Order</h2>

              <div className="space-y-4 mb-6">
                <ReviewRow label="Plan" value={selectedPlan.name} />
                <ReviewRow label="Duration" value={selectedDuration.label} />
                <ReviewRow label="Name" value={formData.fullName} />
                <ReviewRow label="Email" value={formData.email} />
                <ReviewRow label="Start Date" value={formData.startDate} />
              </div>

              <div className="border-t border-white/5 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Base Price</span>
                  <span className="text-white/80">{formatPrice(price)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">GST (18%)</span>
                  <span className="text-white/80">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-white/5">
                  <span className="font-heading font-semibold">Total</span>
                  <span className="font-display text-3xl text-gold-500">{formatPrice(total)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-ink-950/40 border border-white/5">
                <p className="text-xs text-white/50 mb-3">Payment Method (Razorpay-ready architecture)</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['UPI', 'Cards', 'Net Banking', 'Wallets'].map((method) => (
                    <div key={method} className="text-center text-xs py-2 px-3 rounded-lg bg-white/5 text-white/60 border border-white/10">
                      {method}
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={handleConfirm} className="btn-primary w-full mt-6">
                Pay {formatPrice(total)} & Join
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-white/40 text-center mt-3">
                By proceeding, you agree to our Terms & Refund Policy. Payment is processed securely.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Step: Success */}
      {step === 'success' && (
        <section className="pb-24 md:pb-32">
          <div className="max-w-2xl mx-auto px-5 lg:px-8 text-center">
            <Reveal>
              <div className="glass-card p-10 md:p-14">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Welcome to VYRA, {formData.fullName.split(' ')[0]}!</h2>
                <p className="text-white/70 mb-6">
                  Your <span className="text-gold-500">{selectedPlan?.name}</span> membership ({selectedDuration?.label}) is now active.
                  A confirmation email with your membership ID and receipt has been sent to {formData.email}.
                </p>
                <div className="glass rounded-xl p-5 mb-6 inline-block">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Membership ID</p>
                  <p className="font-mono text-xl text-gold-500">VYRA-{Date.now().toString().slice(-8)}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/" className="btn-primary">Go to Homepage</a>
                  <a
                    href={whatsappLink(`Hi VYRA FITNESS, I just purchased a ${selectedPlan?.name} ${selectedDuration?.label} membership. My membership ID is VYRA-${Date.now().toString().slice(-8)}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Confirm on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}

function Field({ label, name, type = 'text', value, onChange, required, placeholder }: {
  label: string; name: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">{label}{required && <span className="text-gold-500"> *</span>}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-ink-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors"
      />
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-white/50">{label}</span>
      <span className="text-white/90 font-medium">{value}</span>
    </div>
  );
}
