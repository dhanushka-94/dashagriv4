"use client";

import { createContext, useCallback, useContext, useEffect, useId, useState } from "react";
import { ContactLocations } from "@/components/contact-locations";
import { site } from "@/lib/site";

type QuoteContactContextValue = {
  openQuoteDialog: () => void;
};

const QuoteContactContext = createContext<QuoteContactContextValue | null>(null);

export function useQuoteContact() {
  const ctx = useContext(QuoteContactContext);
  if (!ctx) {
    throw new Error("useQuoteContact must be used within QuoteContactProvider");
  }
  return ctx;
}

export function QuoteContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  const openQuoteDialog = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <QuoteContactContext.Provider value={{ openQuoteDialog }}>
      {children}
      {open ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-coco-husk-deep/40 backdrop-blur-sm"
            aria-label="Close contact details"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[min(90dvh,40rem)] w-full max-w-lg overflow-y-auto rounded-2xl border border-coco-sand bg-white shadow-2xl sm:max-w-xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-coco-sand bg-white px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-coco-leaf">Get a quote</p>
                <h2 id={titleId} className="mt-1 font-serif text-xl font-semibold text-coco-husk-deep sm:text-2xl">
                  Contact {site.name}
                </h2>
                <p className="mt-1 text-sm text-coco-muted">Reach our Canada and USA offices directly.</p>
              </div>
              <button
                type="button"
                onClick={close}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-coco-sand text-coco-muted transition hover:bg-coco-cream hover:text-coco-husk-deep"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <ContactLocations />
              <p className="mt-5 text-center text-xs text-coco-muted">
                Serving {site.regions.join(", ")}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </QuoteContactContext.Provider>
  );
}

type QuoteButtonProps = {
  children: React.ReactNode;
  className?: string;
  onAfterClick?: () => void;
};

export function QuoteButton({ children, className = "", onAfterClick }: QuoteButtonProps) {
  const { openQuoteDialog } = useQuoteContact();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        openQuoteDialog();
        onAfterClick?.();
      }}
    >
      {children}
    </button>
  );
}
