import Link from "next/link";
import { HeaderSticky } from "@/components/header-sticky";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { QuoteButton } from "@/components/quote-contact-provider";
import { navLinks } from "@/lib/nav";

export function SiteHeader() {
  return (
    <HeaderSticky>
      <div className="mx-auto flex min-h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6 sm:py-0">
        <Logo className="min-w-0 shrink" />
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Primary">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-coco-muted transition-colors hover:text-coco-husk"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <QuoteButton className="hidden rounded-full bg-coco-husk px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-coco-husk-deep sm:inline-flex sm:px-4 sm:text-sm">
            Get a quote
          </QuoteButton>
          <MobileMenu />
        </div>
      </div>
    </HeaderSticky>
  );
}
