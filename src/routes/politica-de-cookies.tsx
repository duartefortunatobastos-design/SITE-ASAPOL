import { Link, createFileRoute } from "@tanstack/react-router";
import {
  LegalDocument,
  LegalLink,
  LegalMetaBox,
  LegalMetaItem,
  LegalNote,
  LegalSection,
} from "@/components/site/LegalDocument";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — ASAPOL" },
      {
        name: "description",
        content:
          "Política de Cookies da ASAPOL: cookies, armazenamento local e registos básicos de visitas.",
      },
      { property: "og:title", content: "Política de Cookies — ASAPOL" },
      {
        property: "og:description",
        content:
          "Informação sobre cookies, armazenamento local e registos básicos de visitas utilizados neste website.",
      },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Legal" }, { label: "Política de Cookies" }]}
        kicker="Legal"
        title="Política de Cookies"
        subtitle="Informação sobre cookies, armazenamento local e registos básicos de visitas utilizados neste website."
      />

      <LegalDocument title="Política de Cookies" updatedAt="15 de julho de 2026">
        <LegalMetaBox>
          <LegalMetaItem label="Domínio:" value="asapol.net" />
          <LegalMetaItem label="Monitorização:" value="Mínima" />
        </LegalMetaBox>

        <LegalSection title="1. O que são cookies?">
          <p>
            Os cookies e o armazenamento local (local storage) são pequenos fragmentos de
            informação guardados no seu navegador (browser). Podem ser utilizados para memorizar
            preferências, melhorar a segurança ou compreender como o website é utilizado.
          </p>
        </LegalSection>

        <LegalSection title="2. O que este website utiliza">
          <p>Este website pode utilizar:</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-brand">
            <li>
              <strong className="text-navy">Preferência de consentimento de cookies</strong> —
              memoriza que aceitou ou fechou o aviso de privacidade/cookies;
            </li>
            <li>
              <strong className="text-navy">ID de visitante anónimo</strong> — ajuda a identificar a
              navegação pelas páginas a partir do mesmo navegador, sem recolher o seu nome real;
            </li>
            <li>
              <strong className="text-navy">ID de sessão</strong> — ajuda a compreender as mudanças
              de página durante a mesma sessão de navegação;
            </li>
            <li>
              <strong className="text-navy">Registos técnicos (logs)</strong> — página visitada,
              navegador, dispositivo, IP e data/hora para fins de segurança e resolução de
              problemas.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Cookies essenciais vs. opcionais">
          <p>
            O armazenamento estritamente necessário é utilizado para garantir o correto
            funcionamento do website e memorizar a sua escolha de privacidade. Quaisquer ferramentas
            opcionais de análise (analytics) ou marketing apenas deverão ser utilizadas após o seu
            consentimento, sempre que tal for exigido.
          </p>
        </LegalSection>

        <LegalSection title="4. Como controlar os cookies">
          <p>
            Pode apagar os cookies e o armazenamento local a qualquer momento através das
            definições do seu navegador. Também pode bloquear os cookies, mas algumas
            funcionalidades do website poderão não funcionar como esperado.
          </p>
        </LegalSection>

        <LegalSection title="5. Contacto">
          <p>
            Se tiver alguma dúvida sobre cookies ou privacidade, contacte-nos através do e-mail{" "}
            <LegalLink href="mailto:duartefortunatobastos@gmail.com">
              duartefortunatobastos@gmail.com
            </LegalLink>
            . Para mais informação sobre dados pessoais, consulte também a nossa{" "}
            <Link
              to="/politica-de-privacidade"
              className="font-medium text-brand underline underline-offset-2 hover:text-[var(--brand-dark)]"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </LegalSection>

        <LegalNote>
          <strong className="font-semibold not-italic text-navy">Nota:</strong> Este aviso de
          cookies foi concebido para um website simples de portefólio/negócios. Para total
          conformidade legal, reveja-o com um profissional de direito qualificado.
        </LegalNote>
      </LegalDocument>
    </>
  );
}
