"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="">
      <ul className="flex gap-8 capitalize">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <span
                className={`${
                  pathname === link.href ? "underline border-text1" : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
