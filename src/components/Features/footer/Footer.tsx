import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/work"
                  className="hover:text-blue-400 transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Portfolio</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Behance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Medium
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-blue-400 transition-colors"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">Newsletter</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Write your email here"
                className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 py-2 pr-8 focus:outline-none focus:border-blue-400"
              />
              <button className="absolute right-0 top-2 text-white hover:text-blue-400 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section - Brand Name */}
        <div className="text-center mb-16">
          <h2 className="text-8xl md:text-9xl font-bold">SOURAV.</h2>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-right">
          <p className="text-sm text-gray-400">© ALL RIGHT RESERVED 2024</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
