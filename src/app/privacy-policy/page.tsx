import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy — Payfast",
  description: "Read Payfast's privacy policy to understand how we collect, use, and protect your personal data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: "We collect information you provide directly to us, such as when you create an account, make a transaction, or contact our support team. This includes your name, email address, phone number, financial information, and transaction history. We also automatically collect certain information when you use our services, including device information, IP address, and usage data.",
  },
  {
    title: "2. How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions. We also use this information to monitor and analyze trends, usage, and activities in connection with our services.",
  },
  {
    title: "3. Information Sharing",
    content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this policy. We may share information with trusted third parties who assist us in operating our platform, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.",
  },
  {
    title: "4. Data Security",
    content: "We implement a variety of security measures to maintain the safety of your personal information. All sensitive data is encrypted using industry-standard AES-256 encryption both in transit and at rest. We maintain SOC2 Type II compliance and conduct regular security audits to ensure the integrity of our systems.",
  },
  {
    title: "5. Your Rights",
    content: "You have the right to access, correct, or delete your personal information at any time. You may also opt out of certain data collection practices. To exercise these rights, please contact our privacy team at privacy@payfast.com. We will respond to your request within 30 days.",
  },
  {
    title: "6. Cookies and Tracking",
    content: "We use cookies and similar tracking technologies to track activity on our services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.",
  },
  {
    title: "7. Changes to This Policy",
    content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          <Badge variant="lime" className="mb-5">Legal</Badge>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Privacy Policy
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
              Questions about our privacy policy? Contact us at{" "}
              <a href="mailto:privacy@payfast.com" className="text-lime hover:underline">
                privacy@payfast.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
