import Image from "next/image";

type ProductImageDisplayProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Elongated grow-bag image — aspect ratio only (no min-height) so narrow viewports
 * do not get horizontal overflow.
 */
export function ProductImageDisplay({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px",
  className = "",
}: ProductImageDisplayProps) {
  return (
    <div
      className={`relative w-full min-w-0 max-w-full aspect-[113/38] sm:aspect-[113/32] md:aspect-[113/28] lg:aspect-[113/26] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-contain object-center"
        sizes={sizes}
      />
    </div>
  );
}
