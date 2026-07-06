"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  a: number;
  tw: number;
  ph: number;
  sp: number;
};

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    let w = 0;
    let h = 0;
    let raf = 0;
    let stars: Star[] = [];

    const gen = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round((w * h) / 2600);
      stars = Array.from({ length: n }, () => {
        const layer = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.4 + Math.random() * (layer > 0.86 ? 1.5 : 0.85),
          a: 0.22 + Math.random() * 0.6,
          tw: 0.5 + Math.random() * 1.6,
          ph: Math.random() * Math.PI * 2,
          sp: 0.06 + layer * 0.45,
        };
      });
    };

    const draw = (t: number) => {
      const scroll = window.scrollY;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#cfd8ff";
      for (const s of stars) {
        const yy = (((s.y - scroll * s.sp) % h) + h) % h;
        const tw = reduced ? 1 : 0.72 + 0.28 * Math.sin((t / 1000) * s.tw + s.ph);
        ctx.globalAlpha = s.a * tw;
        ctx.beginPath();
        ctx.arc(s.x, yy, s.r, 0, 7);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (reduced) {
        draw(0);
      } else {
        raf = requestAnimationFrame(draw);
      }
    };

    const onResize = () => {
      gen();
      if (reduced) draw(0);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) start();
    };

    gen();
    start();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
}
