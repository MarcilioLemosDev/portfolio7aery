"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApply } from "@/components/ApplyProvider";
import campoProfundo from "@/public/space/campo-profundo.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Network() {
  const root = useRef<HTMLElement>(null);
  const { open } = useApply();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top 70%",
              end: "top 15%",
              scrub: 1,
            },
          })
          .fromTo(
            ".rede-bg",
            { opacity: 0, scale: 1.06 },
            { opacity: 1, scale: 1, ease: "none" },
            0
          )
          .fromTo(
            ".rede-copy > *",
            { y: 34, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.09, ease: "power2.out" },
            0.2
          );
      });
    },
    { scope: root }
  );

  return (
    <section id="rede" ref={root} className="rede">
      <div className="rede-bg">
        <Image
          src={campoProfundo}
          alt="Milhares de galáxias no Hubble eXtreme Deep Field (NASA/ESA)"
          fill
          sizes="100vw"
          placeholder="blur"
        />
      </div>
      <div className="rede-overlay" aria-hidden="true" />
      <div className="rede-copy">
        <p className="mono">Além do sistema · projeto confidencial</p>
        <h2>A primeira rede social for tech do mundo.</h2>
        <p>
          Estou construindo uma rede que faz o oposto do feed infinito: em vez
          de prender você na tela, ela usa <strong>realidade aumentada</strong>{" "}
          para devolver a interação ao mundo real. A tela é só a lente.
        </p>
        <p>
          Lá dentro, ninguém entra com o nome de sempre. Cada pessoa recebe um
          novo nick — <strong>um planeta, uma estrela, uma constelação</strong>.
          O seu já existe. Está esperando por você.
        </p>
        <p>
          Se você trabalha com tecnologia e quer construir isso desde a
          primeira linha, aplique.
        </p>
        <button type="button" className="rede-cta" onClick={() => open("rede")}>
          Aplicar para construir
        </button>
        <p className="mono rede-fine">Detalhes apenas para aprovados</p>
      </div>
    </section>
  );
}
