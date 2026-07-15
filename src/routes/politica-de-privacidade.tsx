import { createFileRoute, Link } from "@tanstack/react-router";
import {
  LegalDocument,
  LegalLink,
  LegalMetaBox,
  LegalMetaItem,
  LegalNote,
  LegalSection,
} from "@/components/site/LegalDocument";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — ASAPOL" },
      {
        name: "description",
        content:
          "Política de Privacidade da ASAPOL: como recolhemos, utilizamos e protegemos os dados básicos do website.",
      },
      { property: "og:title", content: "Política de Privacidade — ASAPOL" },
      {
        property: "og:description",
        content:
          "Informação sobre o tratamento de dados pessoais no website da Associação Sindical Autónoma de Polícia.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Legal" }, { label: "Política de Privacidade" }]}
        kicker="Legal"
        title="Política de Privacidade"
        subtitle="Como a Associação Sindical Autónoma de Polícia recolhe, utiliza e protege os dados básicos do website."
      />

      <LegalDocument title="Política de Privacidade" updatedAt="15 de julho de 2026">
        <LegalMetaBox>
          <LegalMetaItem label="Domínio:" value="asapol.net" />
          <LegalMetaItem label="Proprietário:" value="Associação Sindical Autónoma de Polícia" />
        </LegalMetaBox>

        <LegalSection title="1. Quem somos">
          <p>
            Este website é operado pela DB13 Website Developer / DB13 Server Solutions, gerida por
            Duarte Bastos. Pode contactar-nos através do e-mail{" "}
            <LegalLink href="mailto:duartefortunatobastos@gmail.com">
              duartefortunatobastos@gmail.com
            </LegalLink>
            .
          </p>
        </LegalSection>

        <LegalSection title="2. Que dados podemos recolher">
          <p>
            Quando visita este website, podemos recolher informações técnicas básicas necessárias
            para fins de segurança, análise e melhoria do website, incluindo:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-brand">
            <li>Página visitada e data/hora da visita;</li>
            <li>Endereço IP e informação aproximada de localização técnica;</li>
            <li>Navegador (browser), tipo de dispositivo, sistema operativo e user agent;</li>
            <li>Idioma, fuso horário, tamanho do ecrã e página de origem (referrer);</li>
            <li>
              Um identificador anónimo de visitante, utilizado para compreender a navegação nas
              páginas.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Porque recolhemos estes dados">
          <p>
            Utilizamos estes dados para proteger o website, compreender o tráfego básico, detetar
            problemas técnicos, melhorar a experiência do utilizador e receber notificações de
            visitas ao website através de ferramentas internas, tais como registos (logs) do
            Discord.
          </p>
        </LegalSection>

        <LegalSection title="4. Formulários de contacto e comunicação direta">
          <p>
            Se nos contactar por e-mail, Discord, telefone, formulários ou redes sociais, poderemos
            processar as informações que fornecer voluntariamente, tais como o seu nome, e-mail,
            nome de utilizador do Discord, conteúdo da mensagem e detalhes do projeto.
          </p>
        </LegalSection>

        <LegalSection title="5. Cookies e armazenamento local">
          <p>
            Este website pode utilizar armazenamento estritamente necessário, como preferências de
            consentimento de cookies e identificadores anónimos de visitante/sessão. Está
            disponível mais informação na nossa{" "}
            <Link
              to="/politica-de-cookies"
              className="font-medium text-brand underline underline-offset-2 hover:text-[var(--brand-dark)]"
            >
              Política de Cookies
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection title="6. Serviços de terceiros">
          <p>
            O website pode utilizar serviços de terceiros, como a Netlify para alojamento e webhooks
            do Discord para notificações internas. Estes serviços podem processar os dados técnicos
            necessários para disponibilizar as suas funcionalidades.
          </p>
        </LegalSection>

        <LegalSection title="7. Retenção de dados">
          <p>
            Os registos técnicos (logs) são mantidos apenas pelo período necessário para fins de
            segurança, resolução de problemas e melhoria do website. As informações de contacto são
            guardadas pelo tempo necessário para responder a pedidos ou gerir a comunicação de
            projetos.
          </p>
        </LegalSection>

        <LegalSection title="8. Os seus direitos">
          <p>
            Ao abrigo da legislação aplicável de proteção de dados, pode solicitar o acesso,
            retificação, eliminação ou limitação do tratamento dos seus dados pessoais. Para
            efetuar um pedido, contacte-nos através do e-mail{" "}
            <LegalLink href="mailto:duartefortunatobastos@gmail.com">
              duartefortunatobastos@gmail.com
            </LegalLink>
            .
          </p>
        </LegalSection>

        <LegalSection title="9. Alterações a esta política">
          <p>
            Esta política pode ser atualizada quando o website ou os serviços forem alterados. A
            versão mais recente estará sempre disponível nesta página.
          </p>
        </LegalSection>

        <LegalNote>
          <strong className="font-semibold not-italic text-navy">Nota:</strong> Esta página é um
          aviso de privacidade prático para o website da Associação Sindical Autónoma de Polícia.
          Para validação jurídica formal, consulte um profissional de direito qualificado.
        </LegalNote>
      </LegalDocument>
    </>
  );
}
