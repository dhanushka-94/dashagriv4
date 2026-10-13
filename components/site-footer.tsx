import Link from "next/link";
import { navLinks } from "@/lib/nav";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-coco-sand bg-coco-cream">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <p className="font-serif text-xl font-semibold text-coco-husk-deep">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm text-coco-muted">
              Coco coir growing media for greenhouse operators, commercial growers, nurseries, hydroponic
              farms, and agricultural distributors. Operated by {site.company}
            </p>
            <p className="mt-3 text-sm text-coco-muted">{site.location}</p>
            <p className="mt-2">
              <a href={`mailto:${site.email}`} className="break-all text-sm font-medium text-coco-husk hover:underline sm:break-words">
                {site.email}
              </a>
            </p>
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <div className="min-w-0">
              <p className="font-semibold text-foreground">Explore</p>
              <ul className="mt-2 space-y-2 text-coco-muted">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-coco-husk">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {site.offices.map((office) => (
              <div key={office.country} className="min-w-0">
                <p className="font-semibold text-foreground">{office.country}</p>
                <p className="mt-2 text-coco-muted">{office.contactName}</p>
                <p className="mt-1">
                  <a href={`tel:${office.mobileTel}`} className="text-coco-husk hover:underline">
                    {office.mobile}
                  </a>
                </p>
                {office.telephone && office.telephoneTel ? (
                  <p className="mt-0.5">
                    <a href={`tel:${office.telephoneTel}`} className="text-coco-husk hover:underline">
                      {office.telephone}
                    </a>
                  </p>
                ) : null}
                {office.addressLines.length > 0 ? (
                  <p className="mt-2 text-xs leading-relaxed text-coco-muted">
                    {office.addressLines.join(", ")}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-coco-sand pt-8 text-center text-xs text-coco-muted">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
