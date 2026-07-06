"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sol from "@/public/space/sol.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=85%",
            scrub: 0.7,
            pin: true,
          },
        });
        tl.fromTo(
          ".hero-veil",
          { opacity: 0.93 },
          { opacity: 0, ease: "none" },
          0
        )
          .fromTo(
            ".hero-sun",
            { scale: 0.94, filter: "brightness(0.35) saturate(0.8)" },
            { scale: 1, filter: "brightness(1) saturate(1)", ease: "none" },
            0
          )
          .to(".hero-hint", { opacity: 0, duration: 0.25 }, 0.05)
          .to(".hero-copy", { y: -36, opacity: 0.9, ease: "none" }, 0.55);
      });
    },
    { scope: root }
  );

  return (
    <section id="sol" ref={root} className="hero">
      <div className="hero-sun">
        <Image
          src={sol}
          alt="Composição de um ano de imagens do Sol registradas pelo Solar Dynamics Observatory (NASA/SDO)"
          fill
          priority
          sizes="(max-width: 900px) 118vmin, 62rem"
          placeholder="blur"
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-copy">
        <p className="mono eyebrow">Desenvolvedor de Software · Brasil</p>
        <h1>Marcílio Lemos</h1>
        <p className="hero-tag">
          Cada rolagem remove um véu. Uma travessia do Sol até onde o sistema
          acaba — e o que existe depois.
        </p>
      </div>
      <p className="mono hero-hint">Role para remover o primeiro véu</p>
    </section>
  );
}
