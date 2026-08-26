import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="Agrogo IT Services home">
      <span className="brand-copy">
        {/* eslint-disable-next-line @next/next/no-img-element -- plain image URLs are served reliably by Sites hosting. */}
        <img src="/agrogo-it-services-logo.png" width="154" height="47" alt="Agrogo" />
        <small>IT SERVICES</small>
      </span>
    </Link>
  );
}
