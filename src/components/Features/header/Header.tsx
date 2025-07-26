import Link from "next/link";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
  { href: "/freebies", label: "Freebies" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background text-link font-ibm-plex">
      <div className="container">
        <ul className="flex justify-between text-base leading-5 font-medium uppercase py-4">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export { Header };
