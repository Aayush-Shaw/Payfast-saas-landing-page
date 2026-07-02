import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service — Payfast",
  description: "Read Payfast's terms of service outlining the rules and regulations for using our platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using Payfast's services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access or use our services. These terms apply to all visitors, users, and others who access or use the platform.",
  },
  {
    title: "2. Account Registration",
    content: "To use certain features of our services, you must register for an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
  },
  {
    title: "3. Use of Services",
    content: "You agree to use our services only for lawful purposes and in accordance with these Terms. You may not use our services to engage in any fraudulent activity, money laundering, or any other illegal financial activity. We reserve the right to suspend or terminate your account if we suspect any violation of these terms.",
  },
  {
    title: "4. Payment Terms",
    content: "Certain services require payment. You agree to pay all fees associated with your selected plan. All payments are non-refundable unless otherwise stated. We reserve the right to change our pricing with 30 days advance notice. Continued use of the service after a price change constitutes acceptance of the new pricing.",
  },
  {
    title: "5. Intellectual Property",
    content: "All content, features, and functionality of our services — including but not limited to text, graphics, logos, icons, images, and software — are the exclusive property of Payfast and are protected by international copyright, trademark, and other intellectual property laws.",
  },
  {
    title: "6. Limitation of Liability",
    content: "In no event shall Payfast, its directors, employees, partners, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of our services.",
  },
  {
    title: "7. Termination",
    content: "We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason whatsoever, including if you breach these Terms. Upon termination, your right to use the services will cease immediately. All provisions of these Terms which should survive termination shall survive.",
  },
  {
    title: "8. Governing Law",
    content: "These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.",
  },
];

export default function TermsOfServicePage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          <Badge variant="lime" className="mb-5">Legal</Badge>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-white/30 mb-10">
            Last updated: July 1, 2026
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-sm text-white/50 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
            <p className="text-sm text-white/40">
              Questions about our terms? Contact us at{" "}
              <a href="mailto:legal@payfast.com" className="text-lime hover:underline">
                legal@payfast.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
