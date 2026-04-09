export const metadata = {
  title: "Privacy Policy — Zahin",
  description: "How Zahin handles your data. We use privacy-friendly analytics and do not sell personal information.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-display font-bold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-deep-ink/40">Last updated: April 2026</p>
        <div className="mt-8 space-y-6 text-deep-ink/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-semibold text-deep-ink mb-3">Who We Are</h2>
            <p>Zahin is a non-profit initiative building sovereign AI for Pakistan, incubated by Autonomous Technologies. This privacy policy explains how we collect, use, and protect information when you visit zahin.ai.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-semibold text-deep-ink mb-3">Analytics</h2>
            <p>We use Plausible Analytics, a privacy-friendly analytics tool that does not use cookies and does not collect personal data. Plausible is GDPR, CCPA, and PECR compliant by design. No personally identifiable information is stored or processed.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-semibold text-deep-ink mb-3">Contact Information</h2>
            <p>When you contact us via email, we receive and store the information you provide (name, email address, message content). We use this solely to respond to your inquiry and do not share it with third parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-semibold text-deep-ink mb-3">Third-Party Services</h2>
            <p>This website is hosted on Vercel. Vercel may collect anonymized usage data as described in their privacy policy. We use Google Fonts which are loaded directly — Google may log font requests as described in their privacy policy.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-semibold text-deep-ink mb-3">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of any personal information we hold about you by contacting us at hello@zahin.ai.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-semibold text-deep-ink mb-3">Changes</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-semibold text-deep-ink mb-3">Contact</h2>
            <p>For privacy-related inquiries: <a href="mailto:hello@zahin.ai" className="text-pakistan-green hover:underline">hello@zahin.ai</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
