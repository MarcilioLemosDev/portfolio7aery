"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

type Variant = "projeto" | "rede";

const ApplyContext = createContext<{
  open: (variant: Variant, preset?: string) => void;
}>({ open: () => {} });

export const useApply = () => useContext(ApplyContext);

export default function ApplyProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [variant, setVariant] = useState<Variant>("projeto");
  const [preset, setPreset] = useState<string | undefined>(undefined);
  const [done, setDone] = useState(false);

  const open = (v: Variant, p?: string) => {
    setVariant(v);
    setPreset(p);
    setDone(false);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const entry = {
      quando: new Date().toISOString(),
      tipo: variant,
      missao: preset ?? null,
      ...data,
    };
    try {
      const key = "7aery.fila";
      const fila = JSON.parse(localStorage.getItem(key) ?? "[]");
      fila.push(entry);
      localStorage.setItem(key, JSON.stringify(fila));
    } catch {
      // armazenamento indisponível — a aplicação segue apenas em memória
    }
    setDone(true);
  };

  const isProjeto = variant === "projeto";

  return (
    <ApplyContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        className="apply"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {done ? (
          <div className="apply-done">
            <p className="mono">Aplicação registrada</p>
            <p>
              Você entrou na fila. Se houver encaixe, o retorno chega por
              e-mail — sem pressa e sem spam.
            </p>
            <div className="apply-actions">
              <button type="button" className="apply-close" onClick={close}>
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="apply-head">
              <p className="mono">
                {isProjeto ? "Fila de espera" : "Construir a rede"}
              </p>
              <h3>
                {isProjeto
                  ? "Aplicar para um projeto"
                  : "Aplicar para construir a primeira rede social for tech"}
              </h3>
              {preset ? <span className="apply-preset mono">Missão: {preset}</span> : null}
            </div>
            <form onSubmit={submit}>
              <div className="field">
                <label className="mono" htmlFor="apply-nome">
                  Nome
                </label>
                <input id="apply-nome" name="nome" type="text" required />
              </div>
              <div className="field">
                <label className="mono" htmlFor="apply-email">
                  E-mail
                </label>
                <input id="apply-email" name="email" type="email" required />
              </div>
              {isProjeto ? (
                <div className="field">
                  <label className="mono" htmlFor="apply-msg">
                    Sobre o projeto
                  </label>
                  <textarea
                    id="apply-msg"
                    name="mensagem"
                    rows={4}
                    placeholder="O essencial: o que é, para quem e por quê."
                    required
                  />
                </div>
              ) : (
                <>
                  <div className="field">
                    <label className="mono" htmlFor="apply-stack">
                      Função / stack
                    </label>
                    <input
                      id="apply-stack"
                      name="stack"
                      type="text"
                      placeholder="ex.: front-end · React / design · UX"
                      required
                    />
                  </div>
                  <div className="field">
                    <label className="mono" htmlFor="apply-msg">
                      Por que você?
                    </label>
                    <textarea id="apply-msg" name="mensagem" rows={4} required />
                  </div>
                </>
              )}
              <div className="apply-actions">
                <button type="submit" className="apply-send">
                  Enviar aplicação
                </button>
                <button type="button" className="apply-close" onClick={close}>
                  Fechar
                </button>
              </div>
            </form>
          </>
        )}
      </dialog>
    </ApplyContext.Provider>
  );
}
