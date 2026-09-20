import Reveal from '@/components/Reveal';

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-10">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Legal</span>
            </div>
            <h1 className="display-heading text-balance">Terms & Refund Policy</h1>
            <p className="text-white/50 text-sm mt-4">Last updated: January 2026</p>
          </Reveal>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="space-y-6 text-white/70 text-sm leading-relaxed">
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">Membership Terms</h2>
                <p>By purchasing a VYRA FITNESS membership, you agree to follow all gym rules and policies. Memberships are non-transferable. Membership terms may be configured by the gym and are subject to change with prior notice.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">Freeze Policy</h2>
                <p>Memberships can be frozen for up to 30 days per calendar year for medical reasons, travel, or work commitments. Contact the front desk to request a freeze.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">Cancellation Policy</h2>
                <p>You may cancel your membership at any time. Cancellation takes effect at the end of the current billing period for monthly plans. For annual plans, a pro-rated refund may be issued subject to the refund policy below.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">Refund Policy</h2>
                <ul className="space-y-2 mt-2">
                  <li>• Monthly plans: No refund for the current month once billed.</li>
                  <li>• Quarterly plans: Pro-rated refund for unused full months.</li>
                  <li>• Half-yearly plans: Pro-rated refund for unused full months, minus a 10% administrative fee.</li>
                  <li>• Annual plans: Pro-rated refund for unused full months, minus a 15% administrative fee.</li>
                  <li>• Refunds are processed within 7-10 business days to the original payment method.</li>
                  <li>• Trial sessions are free and non-refundable (no charge).</li>
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">Class Booking Terms</h2>
                <p>Class bookings are subject to availability. Cancellations must be made at least 2 hours before the class start time. Repeated no-shows may result in booking restrictions.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">Health & Safety</h2>
                <p>Members must disclose any medical conditions that may affect their training. VYRA FITNESS is not liable for injuries resulting from improper form, failure to follow trainer instructions, or pre-existing conditions not disclosed.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">Liability</h2>
                <p>Members are responsible for their personal belongings. VYRA FITNESS is not liable for lost or stolen items. Members use the facility at their own risk.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">Governing Law</h2>
                <p>These terms are governed by the laws of India. Disputes are subject to the jurisdiction of courts in Bengaluru, Karnataka.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">Contact</h2>
                <p>For questions about these terms, email hello@vyrafitness.in or call +91 98765 43210.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
