import { site } from "@/lib/site";

export function ContactLocations({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${className}`}>
      {site.offices.map((office) => (
        <address
          key={office.country}
          className="not-italic rounded-2xl border border-coco-sand/80 bg-white/95 px-5 py-5 text-left shadow-sm sm:px-6 sm:py-6"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-coco-leaf">{office.country}</p>
          <p className="mt-3 font-semibold text-coco-husk-deep">{office.contactName}</p>
          <p className="mt-3 text-sm text-coco-muted">
            <span className="block">
              Mobile:{" "}
              <a href={`tel:${office.mobileTel}`} className="font-medium text-coco-husk hover:underline">
                {office.mobile}
              </a>
            </span>
            {office.telephone && office.telephoneTel ? (
              <span className="mt-1 block">
                Telephone:{" "}
                <a
                  href={`tel:${office.telephoneTel}`}
                  className="font-medium text-coco-husk hover:underline"
                >
                  {office.telephone}
                </a>
              </span>
            ) : null}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-coco-muted">
            {office.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </address>
      ))}
    </div>
  );
}
