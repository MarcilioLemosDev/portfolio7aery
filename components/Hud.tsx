"use client";

import { useEffect, useState } from "react";
import { stops } from "@/lib/planets";
import { useLenis } from "@/components/SmoothScroll";

export default function Hud() {
  const [active, setActive] = useState("sol");
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    for (const stop of stops) {
      const el = document.getElementById(stop.id);
      if (el) observer.observe(el);
    }

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.6 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hud-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="hud-top">
        <span className="mono">Marcílio Lemos</span>
        <span className="mono">Profundidade {Math.round(progress * 100)}%</span>
      </div>
      <nav className="hud-stops" aria-label="Navegação do sistema solar">
        {stops.map((stop) => (
          <button
            key={stop.id}
            type="button"
            className="hud-stop"
            data-active={active === stop.id}
            onClick={() => go(stop.id)}
            aria-label={`Ir para ${stop.id}`}
          >
            <span className="mono">{stop.label}</span>
            <i />
          </button>
        ))}
      </nav>
    </>
  );
}
