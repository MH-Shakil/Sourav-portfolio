"use client";

import Link from "next/link";
import { HeroSection } from "./HeroSection";
import { WorkSection } from "./WorkSection";

// Constants
const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "#" },
  { name: "Behance", href: "#" },
  { name: "Instagram", href: "#" },
] as const;

const SocialLinks = () => (
  <div className="border-b">
    <div className="container flex items-center gap-12 mt-16 pb-20 ">
      {SOCIAL_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-primary-500 hover:text-blue-500 transition-colors duration-200 font-medium uppercase tracking-wide"
        >
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

const HomeScreen = () => {
  return (
    <div className=" py-16">
      <HeroSection />
      <SocialLinks />
      <WorkSection />
    </div>
  );
};

export { HomeScreen };
