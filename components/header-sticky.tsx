"use client";

import { useEffect, useState } from "react";

type HeaderStickyProps = {
  children: React.ReactNode;
};

export function HeaderSticky({ children }: HeaderStickyProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] border-b backdrop-blur-md transition-[box-shadow,background-color,border-color] duration-200 ${
        scrolled
          ? "border-coco-sand/90 bg-background/95 shadow-[0_10px_40px_-12px_rgba(74,47,31,0.18)]"
          : "border-coco-sand/60 bg-background/90"
      }`}
    >
      {children}
    </header>
  );
}
