import Link from "next/link";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "", iconClassName = "", showWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 rounded-lg outline-none ring-coco-leaf/40 transition hover:opacity-90 focus-visible:ring-2 ${className}`}
      aria-label="DashAgri Coco home"
    >
      <span
        className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-coco-husk to-coco-husk-deep shadow-sm ring-1 ring-coco-husk/20 ${iconClassName}`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white"
          aria-hidden
        >
          <ellipse cx="20" cy="22" rx="10" ry="11" fill="currentColor" fillOpacity="0.92" />
          <ellipse cx="20" cy="20" rx="7" ry="8" fill="#faf6f0" fillOpacity="0.35" />
          <path
            d="M20 6c-2 4-6 7-6 12 0 4 3 7 6 8 3-1 6-4 6-8 0-5-4-8-6-12z"
            fill="#5a8f6a"
            fillOpacity="0.95"
          />
          <path
            d="M14 14c2-1 4-1 6 0M20 10v4"
            stroke="#faf6f0"
            strokeOpacity="0.5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {showWordmark && (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="font-serif text-base font-semibold tracking-tight text-coco-husk-deep sm:text-lg md:text-xl">
            DashAgri
          </span>
          <span className="mt-0.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-coco-leaf">
            Coco
          </span>
        </span>
      )}
    </Link>
  );
}
