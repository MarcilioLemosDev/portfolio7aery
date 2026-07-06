"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Planet } from "@/lib/planets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PlanetSection({
  planet,
  index,
}: {
  planet: Planet;
  index: number;
}) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top 80%",
              end: "top 18%",
              scrub: 1,
            },
          })
          .fromTo(
            ".orb",
            { opacity: 0, scale: 1.13, filter: "brightness(0.08)" },
            { opacity: 1, scale: 1, filter: "brightness(1)", ease: "none" },
            0
          )
          .fromTo(
            ".p-copy > *",
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.09, ease: "power2.out" },
            0.15
          );
      });
    },
    { scope: root }
  );

  const numero = String(index + 1).padStart(2, "0");

  return (
    <section
      id={planet.id}
      ref={root}
      className="planet"
      style={{ "--glow": planet.glow } as CSSProperties}
    >
      <div className={planet.shape === "wide" ? "orb wide" : "orb"}>
        <Image
          src={planet.img}
          alt={planet.alt}
          fill
          sizes="(max-width: 900px) 90vw, 64rem"
          placeholder="blur"
          style={{
            objectPosition: planet.pos ?? "50% 50%",
            transform: planet.zoom ? `scale(${planet.zoom})` : undefined,
          }}
        />
      </div>
      <div className="p-copy">
        <p className="mono p-eyebrow">
          Véu {numero} · {planet.tema}
        </p>
        <h2>{planet.nome}</h2>
        <p className="p-frase">{planet.frase}</p>
      </div>
    </section>
  );
}
