import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

export const Route = createFileRoute("/quem-somos/manifesto-sindical")({
  head: () => ({
    meta: [
      { title: "Manifesto Sindical — ASAPOL" },
      {
        name: "description",
        content:
          "Manifesto Sindical da ASAPOL: independência, defesa dos associados e dignificação da Polícia de Segurança Pública.",
      },
      { property: "og:title", content: "Manifesto Sindical — ASAPOL" },
      {
        property: "og:description",
        content:
          "Princípios e compromissos sindicais da Associação Sindical Autónoma de Polícia.",
      },
    ],
  }),
  component: ManifestoPage,
});

function ManifestoPage() {
  return (
    <>
      <PageHeader kicker="Quem Somos" title="Manifesto Sindical" />

      <section className="section">
        <div className="container-x max-w-4xl">
          <RevealOnScroll>
            <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            <div className="h-1 bg-pt-gradient" />
            <div className="p-8 md:p-12">
              <h1 className="font-display text-4xl font-black text-navy">
                MANIFESTO SINDICAL
              </h1>

              <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  A ASAPOL – ASSOCIAÇÃO SINDICAL AUTÓNOMA DE POLÍCIA é uma organização sindical, que
                  representa as classes profissionais dos Agentes, Chefes e Oficiais da Polícia de
                  Segurança Pública.
                </p>
                <p>
                  Tem como objetivos gerais a defesa dos direitos dos seus associados, bem como a
                  sua valorização e dignificação profissional. Estes objetivos estendem-se à
                  restante comunidade policial, bem como à própria Instituição Policial.
                </p>
                <p>
                  A ASAPOL é Autónoma porque não tem vínculo a nenhum outro sindicato, não é
                  resultado de nenhum desmembramento de qualquer outra estrutura sindical, nem
                  nenhum dos seus dirigentes foi dirigente de outro qualquer sindicato.
                </p>
                <p>
                  A ASAPOL desenvolve a sua atividade de forma completamente livre de ónus
                  partidários, religiosos, estatais ou outros que não seja única e exclusivamente os
                  legítimos interesses dos seus associados. Respeita a legalidade democrática,
                  regendo toda a sua ação pelos princípios da liberdade democrática, da igualdade,
                  da independência e do pluralismo, estando garantido a todos os membros o direito
                  de participação, bem como a capacidade de eleger, ser eleito ou destituir os seus
                  dirigentes.
                </p>

                <p>Neste contexto propomos …</p>

                <p>
                  Representar os associados junto da tutela defendendo legalmente os seus interesses,
                  bem assim como os interesses de toda a comunidade Policial;
                </p>
                <p>
                  Desenvolver estudos, análises e seminários sobre assuntos relacionados com a
                  profissão.
                </p>
                <p>
                  Manter os associados informados e atualizados, a nível legislativo, bem assim como
                  sobre assuntos de interesse Policial.
                </p>
                <p>
                  Defender os direitos individuais dos associados disponibilizando a todos apoio
                  jurídico e psicológico.
                </p>
                <p>
                  Constituir protocolos e parcerias com outras entidades, que tragam benefícios aos
                  sócios,
                </p>
                <p>Prestigiar e dignificar a Polícia de Segurança Pública.</p>

                <p className="pt-5 font-display text-2xl font-black text-navy">
                  Junta-te a nós, faz-te sócio da ASAPOL !!
                </p>

                <p>
                  Lisboa, 17 de Dezembro de 2017
                  <br />A Direcção Nacional da ASAPOL
                </p>
              </div>
            </div>
          </article>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
