import Reveal from '@/components/Reveal';

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-10">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold-500" />
              <span className="section-label">Legal</span>
            </div>
            <h1 className="display-heading text-balance">Privacy Policy</h1>
            <p className="text-white/50 text-sm mt-4">Last updated: January 2026</p>
          </Reveal>
        </div>
      </section>
      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="prose prose-invert max-w-none space-y-6 text-white/70 text-sm leading-relaxed">
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">1. Information We Collect</h2>
                <p>We collect information you provide when you register for a membership, book a class or trial, submit an enquiry, or use our services. This includes your name, email, phone number, date of birth, gender, emergency contact, and fitness goals.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
                <p>We use your information to process memberships, schedule classes, send confirmations and reminders, provide fitness coaching, improve our services, and comply with legal obligations.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">3. Data Storage & Security</h2>
                <p>Your data is stored securely using industry-standard encryption. Access is restricted to authorised personnel only. Payment information is processed through certified payment gateways and is never stored on our servers.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">4. Data Sharing</h2>
                <p>We do not sell or rent your personal information. We may share data with payment processors, cloud storage providers, and communication platforms solely to operate our services. We may disclose information when required by law.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">5. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. You may opt out of marketing communications at any time. To exercise these rights, contact us at hello@vyrafitness.in.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">6. Cookies</h2>
                <p>Our website uses cookies to improve user experience, analyse traffic, and remember preferences. You can control cookies through your browser settings.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white mb-3">7. Contact</h2>
                <p>For privacy-related questions, email hello@vyrafitness.in or call +91 98765 43210.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
