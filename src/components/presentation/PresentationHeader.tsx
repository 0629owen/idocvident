import Link from "next/link";
import { presentationContent } from "@/lib/presentation-content";

const navLinks = [
  { href: "#why", label: "Why change" },
  { href: "#savings", label: "Savings" },
  { href: "#vision", label: "Our system" },
  { href: "#next-steps", label: "Next steps" },
];

export function PresentationHeader() {
  const { labName, productName } = presentationContent;

  return (
    <header className="sticky top-0 z-50 border-b border-lab-green-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lab-green-600 text-sm font-bold tracking-wide text-white">
            {labName}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{labName}</p>
            <p className="text-xs text-lab-muted">{productName}</p>
          </div>
        </div>
        <nav className="hidden gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-lab-muted transition-colors hover:text-lab-green-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
