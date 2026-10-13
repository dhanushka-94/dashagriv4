"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitWholesaleQuote, type QuoteFormState } from "@/app/wholesale/actions";
import { site } from "@/lib/site";

const initialState: QuoteFormState = { status: "idle", message: "" };

const fieldClass =
  "mt-1.5 w-full min-h-12 rounded-xl border border-coco-sand bg-white px-4 text-base text-foreground outline-none ring-coco-leaf/30 focus:ring-2";

export function WholesaleQuoteForm() {
  const [state, formAction, pending] = useActionState(submitWholesaleQuote, initialState);
  const openedMailto = useRef<string | null>(null);

  useEffect(() => {
    if (state.status !== "ready" || !state.mailto || openedMailto.current === state.mailto) return;
    openedMailto.current = state.mailto;
    window.location.href = state.mailto;
  }, [state]);

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 [&>label]:min-w-0">
        <label className="block text-sm font-semibold text-coco-husk-deep">
          Full name <span className="text-coco-leaf">*</span>
          <input name="fullName" type="text" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block text-sm font-semibold text-coco-husk-deep">
          Company / business name
          <input name="company" type="text" autoComplete="organization" className={fieldClass} />
        </label>
        <label className="block text-sm font-semibold text-coco-husk-deep">
          Email address <span className="text-coco-leaf">*</span>
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
        <label className="block text-sm font-semibold text-coco-husk-deep">
          Phone number
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </label>
      </div>

      <label className="block text-sm font-semibold text-coco-husk-deep">
        Country and delivery location <span className="text-coco-leaf">*</span>
        <input name="location" type="text" required autoComplete="address-level1" className={fieldClass} />
      </label>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 [&>label]:min-w-0">
        <label className="block text-sm font-semibold text-coco-husk-deep">
          Product
          <select name="product" defaultValue="Grow bag" className={fieldClass}>
            <option>Grow bag</option>
            <option>Other coco coir product</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-coco-husk-deep">
          Estimated quantity <span className="text-coco-leaf">*</span>
          <input name="quantity" type="text" required className={fieldClass} />
        </label>
        <label className="block text-sm font-semibold text-coco-husk-deep">
          Crop or intended use
          <input name="crop" type="text" className={fieldClass} />
        </label>
        <label className="block text-sm font-semibold text-coco-husk-deep">
          Requested delivery timeline
          <select name="timeline" defaultValue="" className={fieldClass}>
            <option value="">Select a timeline</option>
            <option>Within 30 days</option>
            <option>1–3 months</option>
            <option>3+ months</option>
            <option>Planning</option>
          </select>
        </label>
      </div>

      {state.message ? (
        <p
          role="status"
          className={`rounded-xl px-4 py-3 text-sm leading-relaxed ${
            state.status === "error"
              ? "bg-red-50 text-red-800"
              : "bg-coco-leaf-light text-coco-husk-deep"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Preparing request…" : "Request a Wholesale Quote"}
      </button>
      <p className="text-xs leading-relaxed text-coco-muted">
        Required fields are marked with *. You can also email{" "}
        <a href={`mailto:${site.email}`} className="font-medium text-coco-husk hover:underline">
          {site.email}
        </a>{" "}
        or call the numbers listed on this site.
      </p>
    </form>
  );
}
