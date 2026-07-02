import type { NavLink, FooterLinkGroup, SocialLink } from "@/lib/types/navigation";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "Activity", href: "/activity" },
  { label: "Manage", href: "/manage" },
  { label: "Program", href: "/program" },
  { label: "Folders", href: "/folders" },
  { label: "Documents", href: "/documents" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Home",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "App",
    links: [
      { label: "Activity", href: "/activity" },
      { label: "Manage", href: "/manage" },
      { label: "Program", href: "/program" },
      { label: "Documents", href: "/documents" },
    ],
  },
  {
    title: "All Pages",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Twitter", href: "#", icon: "twitter" },
];
