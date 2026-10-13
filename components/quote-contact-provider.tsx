"use client";

import Link from "next/link";

type QuoteButtonProps = {
  children: React.ReactNode;
  className?: string;
  onAfterClick?: () => void;
};

export function QuoteButton({ children, className = "", onAfterClick }: QuoteButtonProps) {
  return (
    <Link href="/wholesale" className={className} onClick={() => onAfterClick?.()}>
      {children}
    </Link>
  );
}
