import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="Agrogo IT Services home">
      <span className="brand-copy" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- plain image URLs are served reliably by Sites hosting. */}
        <img src="/agrogo-it-services-logo-transparent.png" width="1774" height="887" alt="" />
      </span>
    </Link>
  );
}
