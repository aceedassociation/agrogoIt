"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelectors = [
  "main > section",
  ".section-heading",
  ".problem-card",
  ".solution-card",
  ".process-step",
  ".package-preview-grid > article",
  ".demo-preview-scroll > article",
  ".why-panel",
  ".check-list > div",
  ".cta-section",
  ".page-hero",
  ".solution-detail",
  ".consulting-area-grid > article",
  ".consulting-stage-grid > article",
  ".about-location-copy",
  ".about-location-map",
].join(",");

const cardSelectors = [
  ".problem-card",
  ".solution-card",
  ".package-preview-grid > article",
  ".demo-preview-scroll > article",
  ".consulting-area-grid > article",
  ".consulting-stage-grid > article",
].join(",");

export function ScrollExperience() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
    const cards = Array.from(document.querySelectorAll<HTMLElement>(cardSelectors));
    let frame = 0;

    root.classList.add("motion-enabled");
    revealItems.forEach((item, index) => {
      item.dataset.scrollReveal = "";
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 75}ms`);
    });

    const updateProgress = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--scroll-progress", `${Math.min(window.scrollY / max, 1)}`);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-in-view"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      revealItems.forEach((item) => observer.observe(item));

      cards.forEach((card) => {
        card.classList.add("motion-card");
        const move = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
          card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
        };
        const leave = () => {
          card.style.removeProperty("--pointer-x");
          card.style.removeProperty("--pointer-y");
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        card.dataset.motionCleanup = "true";
        (card as HTMLElement & { __motionCleanup?: () => void }).__motionCleanup = () => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
          card.classList.remove("motion-card");
          delete (card as HTMLElement & { __motionCleanup?: () => void }).__motionCleanup;
        };
      });
      updateProgress();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (frame) window.cancelAnimationFrame(frame);
        cards.forEach((card) => (card as HTMLElement & { __motionCleanup?: () => void }).__motionCleanup?.());
      };
    }

    updateProgress();
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
