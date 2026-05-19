import Link from "next/link";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
};

export function PageHeader({ eyebrow, title, description, breadcrumb }: PageHeaderProps) {
  return (
    <header className="border-b border-coco-sand bg-coco-cream/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {breadcrumb && breadcrumb.length > 0 ? (
          <nav className="text-sm text-coco-muted" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumb.map((item, i) => (
                <li key={item.label} className="flex items-center gap-2">
                  {i > 0 ? (
                    <span aria-hidden className="text-coco-sand">
                      /
                    </span>
                  ) : null}
                  {item.href ? (
                    <Link href={item.href} className="font-medium text-coco-leaf hover:text-coco-husk">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <p className={`text-xs font-semibold uppercase tracking-wider text-coco-leaf ${breadcrumb?.length ? "mt-4" : ""}`}>
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-coco-husk-deep sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-coco-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
