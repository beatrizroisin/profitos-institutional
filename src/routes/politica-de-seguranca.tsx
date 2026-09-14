import { createFileRoute } from "@tanstack/react-router";
import {
  InstitutionalLayout,
  DocSection,
  DocQuote,
} from "@/components/institutional-layout";

export const Route = createFileRoute("/politica-de-seguranca")({
  head: () => ({
    meta: [
      { title: "Política de Segurança da Informação · profitOS" },
      {
        name: "description",
        content:
          "Política de Segurança da Informação da profitOS — princípios de confidencialidade, integridade, disponibilidade e autenticidade.",
      },
      { property: "og:title", content: "Política de Segurança · profitOS" },
      {
        property: "og:description",
        content:
          "Princípios que protegem a confiança nas decisões dos Partners profitOS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PoliticaDeSeguranca,
});

function PoliticaDeSeguranca() {
  return (
    <InstitutionalLayout
      docCode="PLF-006"
      docTitle="Política de Segurança da Informação"
      docSubtitle="Este documento existe para proteger a confiança que nossos Partners depositam em suas decisões."
      version="1.0"
      status="Minuta para revisão jurídica"
      classification="Público"
      owner="profitOS Tecnologia Ltda."
      nextReview="12 meses após aprovação ou em caso de mudança legal/material"
    >
      <DocQuote>
        Lucro não nasce do investimento. Lucro nasce da estratégia. Estratégia
        nasce de dados. Dados se transformam em inteligência. Inteligência gera
        decisões. E decisões constroem empresas extraordinárias.
      </DocQuote>

      <p className="rounded-xl border border-amber-400/25 bg-amber-400/5 px-4 py-3 text-[13px] leading-relaxed text-amber-200/90">
        Modelo contratual para revisão e validação por advogado brasileiro antes
        da assinatura. Os campos marcados com [●] devem ser preenchidos.
      </p>

      <DocSection index="01" title="Objetivo">
        Estabelecer princípios para proteger confidencialidade, integridade,
        disponibilidade e autenticidade de informações e serviços.
      </DocSection>

      <DocSection index="02" title="Governança">
        A segurança é responsabilidade compartilhada. Papéis, aprovações,
        exceções e riscos relevantes serão documentados.
      </DocSection>

      <DocSection index="03" title="Controle de acesso">
        Acessos serão concedidos por necessidade, menor privilégio, credenciais
        individuais, revisão periódica e revogação tempestiva.
      </DocSection>

      <DocSection index="04" title="Autenticação">
        A profitOS incentivará MFA, senhas fortes, proteção de segredos e
        controles contra tentativas abusivas.
      </DocSection>

      <DocSection index="05" title="Desenvolvimento seguro">
        Mudanças seguirão revisão, testes proporcionais, segregação de ambientes,
        gestão de dependências e correção de vulnerabilidades conforme risco.
      </DocSection>

      <DocSection index="06" title="Infraestrutura e nuvem">
        Provedores serão avaliados por criticidade. Configurações, registros,
        disponibilidade e segregação serão gerenciados conforme boas práticas.
      </DocSection>

      <DocSection index="07" title="Criptografia">
        Criptografia será utilizada em trânsito e, quando apropriado, em repouso,
        considerando risco, tecnologia e serviço contratado.
      </DocSection>

      <DocSection index="08" title="Logs e monitoramento">
        Eventos relevantes poderão ser registrados para segurança, diagnóstico,
        prevenção a fraude, auditoria e resposta a incidentes.
      </DocSection>

      <DocSection index="09" title="Vulnerabilidades">
        Vulnerabilidades serão classificadas por risco e tratadas conforme
        criticidade, exposição, exploração conhecida e impacto.
      </DocSection>

      <DocSection index="10" title="Backups">
        Backups serão protegidos, testados periodicamente e retidos conforme
        necessidade operacional e legal.
      </DocSection>

      <DocSection index="11" title="Terceiros">
        Fornecedores críticos estarão sujeitos a avaliação, contratos,
        confidencialidade e obrigações de segurança compatíveis.
      </DocSection>

      <DocSection index="12" title="Incidentes">
        A profitOS manterá procedimento de identificação, contenção,
        investigação, recuperação, comunicação e lições aprendidas.
      </DocSection>

      <DocSection index="13" title="Pessoas">
        Colaboradores e prestadores receberão orientações de segurança e
        estarão sujeitos a confidencialidade e deveres de proteção.
      </DocSection>

      <DocSection index="14" title="Continuidade">
        Riscos de continuidade serão avaliados; planos de recuperação serão
        testados de forma proporcional à criticidade.
      </DocSection>

      <DocSection index="15" title="Exceções">
        Exceções deverão ter justificativa, aprovação, prazo e controles
        compensatórios.
      </DocSection>

      <DocSection index="16" title="Revisão">
        A Política será revista ao menos anualmente ou após mudanças relevantes,
        incidentes graves ou exigência regulatória.
      </DocSection>
    </InstitutionalLayout>
  );
}
