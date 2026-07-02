import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Payfast",
  description: "Get in touch with the Payfast team. We're here to help with sales, support, and partnership inquiries.",
};

const contactMethods = [
  { icon: Mail, title: "Email Us", detail: "hello@payfast.com", subtitle: "We'll respond within 24 hours" },
  { icon: Phone, title: "Call Us", detail: "+1 (555) 123-4567", subtitle: "Mon-Fri, 9AM-6PM EST" },
  { icon: MapPin, title: "Visit Us", detail: "123 Finance St, Suite 400", subtitle: "San Francisco, CA 94102" },
  { icon: Clock, title: "Support Hours", detail: "24/7 Live Chat", subtitle: "Available for Growth & Business plans" },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Badge variant="lime" className="mb-5">Contact</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-2xl text-base text-white/45 leading-relaxed">
              Have a question, feedback, or partnership inquiry? We&apos;d love to
              hear from you. Our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <GlassCard className="p-8 sm:p-10">
              <h2 className="text-xl font-semibold text-white mb-6">Send us a message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-first-name" className="block text-sm text-white/50 mb-2">First Name</label>
                    <input
                      id="contact-first-name"
                      type="text"
                      placeholder="John"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-lime/30 focus:ring-1 focus:ring-lime/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-last-name" className="block text-sm text-white/50 mb-2">Last Name</label>
                    <input
                      id="contact-last-name"
                      type="text"
                      placeholder="Doe"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-lime/30 focus:ring-1 focus:ring-lime/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm text-white/50 mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-lime/30 focus:ring-1 focus:ring-lime/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm text-white/50 mb-2">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-lime/30 focus:ring-1 focus:ring-lime/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm text-white/50 mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-lime/30 focus:ring-1 focus:ring-lime/20 transition-all resize-none"
                  />
                </div>
                <Button className="w-full">
                  <Send size={16} /> Send Message
                </Button>
              </form>
            </GlassCard>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <GlassCard key={method.title} hover className="flex items-start gap-4 p-6 group">
                  <IconBadge size="lg" className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <method.icon size={22} />
                  </IconBadge>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                    <p className="text-sm text-lime font-medium">{method.detail}</p>
                    <p className="text-xs text-white/30 mt-1">{method.subtitle}</p>
                  </div>
                </GlassCard>
              ))}

              {/* Map placeholder */}
              <GlassCard className="h-48 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <MapPin size={24} className="text-white/10 mx-auto mb-2" />
                  <p className="text-sm text-white/20">Interactive Map</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
