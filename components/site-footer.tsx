import Link from "next/link";
import { site } from "@/lib/site";
import { FacebookIcon, YouTubeIcon } from "@/components/social-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-coco-sand bg-coco-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-xl font-semibold text-coco-husk-deep">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm text-coco-muted">
              Premium cocopeat from Sri Lanka—supplying agriculture and horticulture across{" "}
              {site.regions.join(", ")}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-coco-muted">
                Follow
              </span>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-coco-husk transition hover:bg-white hover:text-coco-husk-deep"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-coco-husk transition hover:bg-white hover:text-coco-husk-deep"
                aria-label="YouTube"
              >
                <YouTubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 text-sm lg:gap-12">
            <div>
              <p className="font-semibold text-foreground">Explore</p>
              <ul className="mt-2 space-y-2 text-coco-muted">
                <li>
                  <Link href="/#about" className="hover:text-coco-husk">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#products" className="hover:text-coco-husk">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-coco-husk">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {site.offices.map((office) => (
              <div key={office.country} className="max-w-[16rem]">
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
                <p className="mt-2 text-xs leading-relaxed text-coco-muted">
                  {office.addressLines.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-3 border-t border-coco-sand pt-8 text-center text-xs text-coco-muted">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Development:{" "}
            {site.developer.website ? (
              <a
                href={site.developer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-coco-husk underline-offset-2 hover:underline"
              >
                {site.developer.name}
              </a>
            ) : (
              <span className="font-medium text-coco-husk">{site.developer.name}</span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
