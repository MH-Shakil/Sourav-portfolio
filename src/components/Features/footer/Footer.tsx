import Link from "next/link";
import { useState } from "react";

// Footer data
const FOOTER_LINKS = {
  pages: [
    { name: "Work", href: "/work" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  portfolio: [
    { name: "LinkedIn", href: "#" },
    { name: "Behance", href: "#" },
    { name: "Medium", href: "#" },
    { name: "Instagram", href: "#" },
  ],
  contact: [
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-primary-1000 text-white py-16">
      <div className="container">
        {/* Navigation Sections */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {/* Pages */}
          <div>
            <h3 className="text-lg font-medium font-ibm-plex mb-4 uppercase">
              Pages
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-500 transition-colors duration-300 font-ibm-plex"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-lg font-medium font-ibm-plex mb-4 uppercase">
              Portfolio
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.portfolio.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-500 transition-colors duration-300 font-ibm-plex"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium font-ibm-plex mb-4 uppercase">
              Contact
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.contact.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-500 transition-colors duration-300 font-ibm-plex"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium font-ibm-plex mb-4 uppercase">
              Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Write your email here"
                className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 py-2 pr-8 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-2 text-white hover:text-blue-500 transition-colors duration-300"
                aria-label="Subscribe to newsletter"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Brand Section */}
        <div className="text-center mb-16">
          <h2 className="text-8xl text-white md:text-[330px] leading-[324px] font-space-grotesk font-bold ">
            SOURAV.
          </h2>
        </div>

        {/* Copyright */}
        <div className="text-right">
          <p className="text-sm text-gray-400">
            © ALL RIGHT RESERVED {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
