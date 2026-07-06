"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApply } from "@/components/ApplyProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const tiers = [
  {
    tier: "Órbita I",
    name: "Site",
    desc: "Presença essencial. Um site que posiciona, carrega num instante e converte visitantes em clientes.",
  },
  {
    tier: "Órbita II",
    name: "Site + App",
    desc: "Presença e produto. A mesma experiência impecável no navegador e no bolso do seu cliente.",
  },
  {
    tier: "Órbita III",
    name: "Site + App + Instagram",
    desc: "O sistema completo: presença, produto e gravidade social puxando clientes para a sua órbita.",
  },
];

export default function Products() {
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
              start: "top 75%",
              end: "top 30%",
              scrub: 1,
            },
          })
          .fromTo(
            ".orbitas-head > *",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, ease: "power2.out" },
            0
          )
          .fromTo(
            ".tier",
            { y: 44, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, ease: "power2.out" },
            0.2
          )
          .fromTo(".scarcity", { opacity: 0 }, { opacity: 1 }, 0.5);
      });
    },
    { scope: root }
  );

  return (
    <section id="orbitas" ref={root} className="orbitas">
      <div className="orbitas-head">
        <p className="mono">Projetos · somente por aplicação</p>
        <h2>Não vendo pacotes. Aceito missões.</h2>
        <p className="orbitas-lead">
          A agenda é deliberadamente limitada e nenhum trabalho tem preço de
          prateleira. Você descreve o projeto, entra na fila de espera e, se
          fizer sentido, recebe o convite.
        </p>
      </div>
      <div className="tiers">
        {tiers.map((t) => (
          <article key={t.tier} className="tier">
            <p className="mono">{t.tier}</p>
            <h3>{t.name}</h3>
            <p>{t.desc}</p>
            <button
              type="button"
              className="tier-cta"
              onClick={() => open("projeto", t.name)}
            >
              Aplicar à fila de espera
            </button>
          </article>
        ))}
      </div>
      <p className="mono scarcity">
        Sem preços públicos · vagas limitadas por trimestre
      </p>
    </section>
  );
}
