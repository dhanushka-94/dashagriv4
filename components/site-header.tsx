import Link from "next/link";
import { HeaderSticky } from "@/components/header-sticky";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { QuoteButton } from "@/components/quote-contact-provider";
import { navLinks } from "@/lib/nav";

export function SiteHeader() {
  return (
    <HeaderSticky>
      <div className="mx-auto flex min-h-[4.25rem] w-full min-w-0 max-w-6xl items-center justify-between gap-2 px-4 py-2 sm:gap-3 sm:px-6 sm:py-0">
        <Logo className="min-w-0 max-w-[45%] shrink sm:max-w-none" />
        <nav
          className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-1 lg:flex xl:gap-x-5"
          aria-label="Primary"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-xs font-medium text-coco-muted transition-colors hover:text-coco-husk xl:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <QuoteButton className="hidden min-h-10 items-center justify-center rounded-full bg-coco-husk px-3 text-xs font-semibold text-white shadow-sm transition hover:bg-coco-husk-deep sm:inline-flex sm:px-4 sm:text-sm lg:min-h-11">
            Get a quote
          </QuoteButton>
          <MobileMenu />
        </div>
      </div>
    </HeaderSticky>
  );
}
