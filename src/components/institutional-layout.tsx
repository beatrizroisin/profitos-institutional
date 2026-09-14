import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type InstitutionalLayoutProps = {
  docCode: string;
  docTitle: string;
  docSubtitle?: string;
  version?: string;
  status?: string;
  classification?: string;
  owner?: string;
  nextReview?: string;
  children: ReactNode;
};

/**
 * Layout institucional reutilizável — replicável para outras páginas
 * (Política de Segurança, Privacidade, Termos, etc.).
 * Mantém a identidade escura profitOS: grade discreta, acentos violeta/azul.
 */
export function InstitutionalLayout({
  docCode,
  docTitle,
  docSubtitle,
  version,
  status,
  classification,
  owner,
  nextReview,
  children,
}: InstitutionalLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Textura de fundo */}
      <div
        className="profitos-grid pointer-events-none fixed inset-0 opacity-70"
        aria-hidden
      />
      <div
        className="profitos-glow pointer-events-none fixed inset-x-0 top-0 h-[420px]"
        aria-hidden
      />

      {/* Cabeçalho */}
      <header className="relative z-10 border-b border-border/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
              <span className="h-2.5 w-2.5 rounded-sm bg-primary" />
            </span>
            profitOS
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {docCode}
          </span>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        {/* Cabeçalho do documento */}
        <section className="pt-16 sm:pt-24">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
            Documento institucional
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {docTitle}
          </h1>
          {docSubtitle ? (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {docSubtitle}
            </p>
          ) : null}

          {/* Meta do documento */}
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-card/40 sm:grid-cols-4">
            <MetaItem label="Versão" value={version} />
            <MetaItem label="Status" value={status} />
            <MetaItem label="Classificação" value={classification} />
            <MetaItem label="Proprietário" value={owner} />
          </dl>
          {nextReview ? (
            <p className="mt-3 text-xs text-muted-foreground">
              Próxima revisão: {nextReview}
            </p>
          ) : null}
        </section>

        {/* Corpo — fornecido pela página */}
        <div className="mt-16 space-y-12">{children}</div>

        {/* Rodapé */}
        <footer className="mt-20 border-t border-border/60 pt-8 text-xs text-muted-foreground">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              profitOS Tecnologia Ltda. · {docCode} · {version ?? "—"}
            </p>
            <p>{classification ?? "Público"}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value?: string }) {
  return (
    <div className="bg-surface/60 px-4 py-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm font-medium text-foreground">
        {value ?? "—"}
      </dd>
    </div>
  );
}

/**
 * Seção numerada padrão dos documentos institucionais.
 */
export function DocSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="scroll-mt-24">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-primary">{index}</span>
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="mt-4 border-l border-border/60 pl-4 sm:pl-9">
        <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground">
          {children}
        </p>
      </div>
    </section>
  );
}

/**
 * Citação em destaque — para o princípio institucional.
 */
export function DocQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="relative overflow-hidden rounded-2xl border border-border bg-surface/50 px-6 py-8 sm:px-10">
      <div
        className="profitos-glow pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      />
      <p className="relative text-pretty text-lg font-medium leading-relaxed text-foreground/90 sm:text-xl">
        “{children}”
      </p>
    </blockquote>
  );
}
