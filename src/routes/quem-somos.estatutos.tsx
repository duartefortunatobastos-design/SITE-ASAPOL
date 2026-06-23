import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

export const Route = createFileRoute("/quem-somos/estatutos")({
  head: () => ({
    meta: [
      { title: "Estatutos — ASAPOL" },
      {
        name: "description",
        content:
          "Estatutos da Associação Sindical Autónoma de Polícia: natureza, princípios, objetivos, direitos e organização interna.",
      },
      { property: "og:title", content: "Estatutos — ASAPOL" },
      {
        property: "og:description",
        content: "Estatutos oficiais da Associação Sindical Autónoma de Polícia — ASAPOL.",
      },
    ],
  }),
  component: StatutesPage,
});

function Chapter({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 border-t border-border pt-8 first:mt-0 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl font-bold tracking-tight text-navy">{num}</h2>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand">{title}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Article({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <article className="mt-6">
      <h3 className="font-display text-base font-semibold text-navy">Artigo {id}</h3>
      {title && <p className="mt-0.5 text-sm font-medium text-foreground/85">{title}</p>}
      <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </article>
  );
}

function Aliases({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-2 pl-0">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="shrink-0 font-medium text-foreground/70">{item.slice(0, 2)}</span>
          <span>{item.slice(3)}</span>
        </li>
      ))}
    </ul>
  );
}

function StatutesPage() {
  return (
    <>
      <PageHeader kicker="Quem Somos" title="Estatutos" />

      <section className="section">
        <div className="container-x max-w-4xl">
          <RevealOnScroll>
            <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            <div className="h-1 bg-pt-gradient" />
            <div className="p-8 md:p-12">
              <header className="border-b border-border pb-8">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Boletim do Trabalho e Emprego, n.º 44, 29/11/2019
                </p>
                <h1 className="mt-3 font-display text-4xl font-black text-navy">I — ESTATUTOS</h1>
                <p className="mt-2 font-display text-lg font-semibold text-navy">
                  Associação Sindical Autónoma de Polícia — ASAPOL
                </p>
                <p className="mt-1 text-sm font-medium text-brand">Alteração</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Alteração de estatutos aprovada em 1 de novembro de 2019, com última publicação no
                  Boletim do Trabalho e Emprego, n.º 35, de 22 de setembro de 2018.
                </p>
              </header>

              <div className="mt-8">
                <Chapter num="CAPÍTULO I" title="Denominação, natureza, princípios e objetivos">
                  <Article id="1.º" title="Denominação e sede">
                    <p>
                      1 — A Associação Sindical Autónoma de Polícia, abreviada nestes estatutos pela
                      sigla ASAPOL, rege-se pela lei e pelos estatutos e tem a sua sede na Rua Adolfo
                      Coelho, n.º 10 — Lisboa, concelho de Lisboa.
                    </p>
                    <p>
                      2 — A sede da ASAPOL poderá ser alterada por mera deliberação da direção, para o
                      concelho de Lisboa.
                    </p>
                  </Article>

                  <Article id="2.º" title="Natureza">
                    <p>
                      1 — A ASAPOL é uma associação sindical, que representa os profissionais da
                      carreira de agentes, chefes e oficiais da Polícia de Segurança Pública, de
                      âmbito nacional, e sem fins lucrativos, constituindo-se por tempo indeterminado.
                    </p>
                    <p>
                      2 — Por deliberação da assembleia-geral, após proposta da direção nacional,
                      poderão ser criadas delegações, secções sindicais, regionais ou outras formas de
                      representação necessárias à prossecução das suas finalidades.
                    </p>
                  </Article>

                  <Article id="3.º" title="Princípios">
                    <p>
                      1 — A ASAPOL orienta a sua ação pelos princípios da igualdade, liberdade e
                      solidariedade democrática, na defesa dos direitos e deveres dos seus associados,
                      no respeito pelos princípios e garantias fundamentais da Constituição da República
                      Portuguesa.
                    </p>
                    <p>
                      2 — A ASAPOL pretende ser um parceiro social com a direção nacional da PSP em
                      especial e Ministério da Administração Interna em particular, bem como outras
                      entidades no geral, zelando sempre pelos interesses dos seus associados.
                    </p>
                    <p>
                      3 — A ASAPOL reger-se-á pela independência em relação a partidos ou qualquer
                      outra forma de organização que possa pôr em causa os objetivos preconizados nestes
                      estatutos.
                    </p>
                  </Article>

                  <Article id="4.º" title="Objetivos">
                    <p>1 — A associação tem como objetivo:</p>
                    <Aliases
                      items={[
                        "a) Defender o prestígio e prosperidade da associação;",
                        "b) Promover a formação dos seus associados e contribuir para a sua realização profissional, social e cultural;",
                        "c) Promover ações de sensibilização junto dos seus associados com vista à defesa dos seus interesses;",
                        "d) Realizar e promover iniciativas culturais, recreativas, de investigação e formação profissional;",
                        "e) Analisar, debater e propor assuntos relacionados com o exercício da atividade policial;",
                        "f) Contribuir para o desenvolvimento dos serviços da PSP.",
                      ]}
                    />
                    <p>
                      2 — Para o efeito, podem ser organizados colóquios, seminários, palestras ou
                      cursos de formação que concorram para a sua efetivação.
                    </p>
                  </Article>

                  <Article id="5.º" title="Competência">
                    <p>A associação tem competência para:</p>
                    <Aliases
                      items={[
                        "a) Estabelecer relações ou filiar-se em organizações sindicais, nacionais ou estrangeiras, que prossigam objetivos análogos, para a realização dos seus fins sociais ou estatutários;",
                        "b) Dar parecer sobre todos os assuntos que respeitem aos seus associados;",
                        "c) Zelar, por todos os meios ao seu alcance, o cumprimento das normas e regulamentos internos da PSP em particular e da aplicação das demais legislações no geral;",
                        "d) Intervir na defesa dos seus associados em processos disciplinares;",
                        "e) Prestar toda a assistência sindical e jurídica de que os associados necessitem;",
                        "f) Emitir cartão identificativo da qualidade de sócio;",
                        "g) Celebrar acordos de interesse para os sócios com entidades públicas ou privadas, no âmbito social através da criação de parcerias para cantinas sociais ou outro tipo de equipamentos sociais que promovam a melhoria da qualidade de vida dos seus associados;",
                        "h) Incentivar a formação profissional, cultural e social, através da realização de atividades formativas.",
                      ]}
                    />
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO II" title="Associados efetivos">
                  <Article id="6.º" title="Associados efetivos">
                    <p>
                      1 — São associados efetivos os elementos da Polícia de Segurança Pública que se
                      encontrem em serviço efetivo ou na situação de pré-aposentação e que solicitem à
                      direção a sua inscrição.
                    </p>
                    <p>
                      2 — A admissão do associado requer a apreciação e decisão da direção no prazo de
                      30 dias úteis.
                    </p>
                    <p>3 — Da decisão negativa da direção cabe recurso por escrito à assembleia-geral.</p>
                    <p>
                      4 — A admissão de novos sócios é da competência da direção da associação, a qual
                      tem 30 dias úteis para se pronunciar sobre as propostas de adesão de novos sócios.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO III" title="Direitos e deveres">
                  <Article id="7.º" title="Direito de tendência">
                    <p>
                      1 — É garantido a todos os associados o direito de se organizarem em tendências e
                      elaborarem listas para candidatura aos órgãos sociais.
                    </p>
                    <p>
                      2 — O reconhecimento de qualquer tendência é da competência exclusiva da
                      assembleia-geral.
                    </p>
                    <p>
                      3 — As tendências constituem formas de expressão sindical própria, organizada na
                      base de determinada conceção política, social ou ideológica e subordinada aos
                      princípios democráticos e sob os estatutos da ASAPOL.
                    </p>
                    <p>
                      4 — Os associados que pretendam exercer o direito de tendência, deverão reunir,
                      pelo menos, sete associados e eleger um de entre eles que os represente perante
                      os órgãos sociais.
                    </p>
                    <p>
                      5 — A constituição de cada tendência efetua-se mediante comunicação ao presidente
                      da mesa da assembleia-geral, assinada pelos membros que a compõem, com indicação
                      da sua designação, bem como o nome e qualidade de quem a representa.
                    </p>
                    <p>
                      6 — A representatividade das tendências é a que resulta da sua expressão eleitoral
                      em assembleia-geral.
                    </p>
                    <p>
                      7 — Para efeitos do número anterior o voto de cada associado é livre, e não está
                      sujeito à disciplina da tendência que o representa.
                    </p>
                    <p>
                      8 — Do mesmo modo, os associados que integrem os órgãos estatutários da ASAPOL não
                      estão subordinados à disciplina das tendências, através de cujas listas foram
                      eleitos, cumprindo-lhes agir com total isenção.
                    </p>
                    <p>
                      9 — Cada tendência poderá associar-se com as demais para qualquer fim estatutário.
                    </p>
                    <p>
                      10 — As tendências, como expressão do pluralismo sindical devem contribuir para o
                      reforço da unidade democrática de todos os trabalhadores.
                    </p>
                    <p>11 — Para realizar os fins da democracia sindical devem, nomeadamente, as tendências:</p>
                    <Aliases
                      items={[
                        "a) Apoiar todas as ações determinadas pelos órgãos estatutários da ASAPOL;",
                        "b) Desenvolver, junto dos trabalhadores que representam, ações de formação político-sindical e de esclarecimento dos princípios do sindicalismo democrático;",
                        "c) Impedir a instrumentalização da ASAPOL com base na tendência própria ou outra qualquer;",
                        "d) Não praticar quaisquer atos que possam enfraquecer, dividir ou conflituar com o normal funcionamento e interesses do total dos associados da ASAPOL.",
                      ]}
                    />
                  </Article>

                  <Article id="8.º" title="Direitos dos sócios">
                    <p>São direitos dos sócios:</p>
                    <Aliases
                      items={[
                        "a) Participar em toda a atividade da associação, de acordo com os presentes estatutos;",
                        "b) Eleger e ser eleitos para os órgãos da associação, nas condições previstas por estes estatutos;",
                        "c) Beneficiar dos serviços prestados pela associação e por quaisquer instituições dele dependentes e ou organizações em que o mesmo esteja filiado ou participe, nos termos dos respetivos estatutos;",
                        "d) Beneficiar de apoio sindical, jurídico e judiciário e tudo que se relacione com a sua atividade profissional;",
                        "e) Beneficiar de todas as ações desenvolvidas pela associação no âmbito sindical, social, cultural, desportivo e recreativo;",
                        "f) Serem informados regularmente das atividades desenvolvidas pela associação;",
                        "g) Beneficiar de compensação por salários perdidos relativamente a atividades sindicais, nas condições previstas nestes estatutos.",
                      ]}
                    />
                  </Article>

                  <Article id="9.º" title="Deveres dos sócios">
                    <p>São deveres dos sócios:</p>
                    <Aliases
                      items={[
                        "a) Cumprir os estatutos e demais disposições regulamentares;",
                        "b) Participar nas atividades da associação e manter-se delas informadas e desempenhar os cargos para que foram eleitos ou nomeados, salvo por motivos devidamente justificados;",
                        "c) Cumprir e fazer cumprir as deliberações dos órgãos da associação;",
                        "d) Fortalecer a ação sindical e a organização nos locais de trabalho;",
                        "e) Dinamizar, no local de trabalho, a ação sindical, em defesa dos princípios e objetivos da associação;",
                        "f) Agir solidariamente, em todas as circunstâncias, na defesa dos interesses coletivos;",
                        "g) Contribuir para a sua educação sindical e cultural;",
                        "h) Divulgar toda a informação emitida pela associação;",
                        "i) Pagar, mensal ou trimestralmente, a quota da associação, para os associados na situação de pré-aposentação;",
                        "j) Adquirir o cartão de identificação de sócio;",
                        "l) Comunicar à associação, no prazo de 15 dias, a mudança de residência ou de local de trabalho, estado civil, situação profissional, impossibilidade de trabalho por doença prolongada, reforma e outras;",
                        "m) Devolver à associação o cartão de sócio quando desvinculado.",
                        "n) É da responsabilidade do associado a quando do seu pedido de desistência de associado da ASAPOL, informar os serviços competentes da Polícia de Segurança Pública, assim como, dar conhecimento por qualquer meio escrito à ASAPOL da sua pretensão.",
                      ]}
                    />
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO IV" title="Regime disciplinar">
                  <Article id="10.º" title="Exercício do poder disciplinar">
                    <p>
                      1 — O regime disciplinar deve assegurar o procedimento escrito e o direito de
                      defesa do associado;
                    </p>
                    <p>
                      2 — O poder disciplinar será exercido pela direção da ASAPOL, cabendo recurso para
                      a assembleia-geral.
                    </p>
                  </Article>

                  <Article id="11.º" title="Medidas disciplinares">
                    <p>As medidas disciplinares aplicadas serão, consoante a gravidade da falta:</p>
                    <Aliases
                      items={[
                        "a) Repreensões escritas aos sócios que não cumpram os deveres previstos no artigo 9.º;",
                        "b) Repreensão registada, no caso de reincidência;",
                        "c) Suspensão dos direitos, entre 30 e 180 dias, dos sócios que voltem a reincidir após a sanção das nos termos prevista na alínea b);",
                        "d) Expulsão dos sócios que, comprovadamente tenham praticado casos de grave violação dos deveres fundamentais.",
                      ]}
                    />
                  </Article>

                  <Article id="12.º" title="Processo disciplinar">
                    <p>
                      1 — Nenhuma sanção será aplicada sem que ao associado sejam dadas todas as
                      possibilidades de defesa, em adequado processo disciplinar.
                    </p>
                    <p>
                      2 — Para a instauração do processo é entregue ao acusado uma nota de culpa com a
                      descrição completa e especificada dos factos da acusação, para cuja defesa o mesmo
                      tem sempre o prazo de 20 dias úteis, a contar após a receção da nota de culpa.
                    </p>
                    <p>
                      3 — A entrega da nota de culpa e da sua resposta é feita mediante recibo assinado ou
                      em carta registada com aviso de receção.
                    </p>
                    <p>
                      4 — A falta injustificada de resposta no prazo indicado faz pressupor, pela parte
                      do associado, a aceitação da acusação de que é alvo, bem como a desistência do seu
                      direito a recurso.
                    </p>
                    <p>
                      5 — O associado pode requerer todas as diligências necessárias para averiguação da
                      verdade e apresentar as testemunhas que entender, no máximo de 10.
                    </p>
                    <p>
                      6 — Ao associado, excetuando o previsto no número 4, cabe sempre direito de
                      recurso para a assembleia-geral, com efeito suspensivo da pena que lhe tiver sido
                      aplicada.
                    </p>
                  </Article>

                  <Article id="13.º" title="Demissão">
                    <p>Perdem a qualidade de sócios os que:</p>
                    <Aliases
                      items={[
                        "a) Peçam a sua demissão por escrito;",
                        "b) Sejam expulsos da associação;",
                        "c) Deixem de pagar a quota por período superior a três meses, exceto nos seguintes caso:",
                        "d) Quando se encontrem numa situação de suspensão por motivos disciplinares;",
                        "e) Outras razões devidamente fundamentadas.",
                      ]}
                    />
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO V" title="Eleições órgãos dirigentes">
                  <Article id="14.º" title="Eleições">
                    <p>
                      1 — A assembleia-geral elege, por voto secreto, e para mandatos de três anos, os
                      seguintes órgãos:
                    </p>
                    <Aliases
                      items={[
                        "a) Mesa da assembleia-geral;",
                        "b) Direção;",
                        "c) Conselho fiscal.",
                      ]}
                    />
                    <p>
                      2 — As listas de candidatos aos órgãos deverão ser apresentadas ao presidente da
                      mesa da assembleia-geral até 30 dias antes do ato eleitoral.
                    </p>
                    <p>
                      3 — As listas são subscritas por todos os candidatos como prova de aceitação, e
                      por um mínimo de 10 % outros associados efetivos.
                    </p>
                    <p>
                      4 — Se não surgir qualquer lista nos termos do número 3 do presente artigo, caberá
                      à mesa da assembleia-geral em exercício, da forma que melhor entender, providenciar
                      em tempo útil pela formação de, pelo menos, uma lista dos órgãos a apresentar a
                      sufrágio.
                    </p>
                    <p>
                      5 — Nenhum associado poderá candidatar-se, simultaneamente, para mais de um cargo,
                      nem integrar mais de uma lista.
                    </p>
                    <p>
                      6 — As eleições para os órgãos nacionais poderão ser efetuadas por
                      correspondência, de acordo com o regulamento aprovado ou por plataforma eletrónica
                      criada para o efeito.
                    </p>
                    <p>
                      7 — Após a contagem dos votos recebidos nas urnas, considera-se automaticamente
                      eleita a lista que obtiver maior número de votos válidos.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO VI" title="Órgãos dirigentes">
                  <Article id="15.º" title="Órgãos dirigentes da associação">
                    <p>1 — São órgãos dirigentes da associação:</p>
                    <Aliases
                      items={[
                        "a) A assembleia-geral;",
                        "b) Mesa da assembleia-geral;",
                        "c) A direção nacional;",
                        "d) O conselho fiscal.",
                      ]}
                    />
                    <p>2 — São órgãos distritais:</p>
                    <Aliases items={["a) A assembleia distrital;", "b) A direção distrital."]} />
                    <p>3 — São órgãos locais:</p>
                    <Aliases items={["a) Delegados sindicais."]} />
                  </Article>

                  <Article id="16.º" title="Cargos diretivos">
                    <p>1 — O exercício de qualquer cargo na associação é gratuito.</p>
                    <p>
                      2 — Os associados que, por motivos de desempenho das suas funções, percam toda ou
                      parte da remuneração poderão ter direito ao reembolso, total ou parcial pela
                      associação sindical, das importâncias perdidas, de acordo com os fundos existentes
                      à data e após deliberação por votação simples da direção nacional da ASAPOL.
                    </p>
                  </Article>

                  <Article id="17.º" title="Duração do mandato">
                    <p>
                      1 — A duração do mandato dos membros eleitos para os diversos órgãos da associação
                      é de três anos, podendo ser reeleitos por uma ou mais vezes.
                    </p>
                    <p>
                      2 — O presidente da direção nacional, não poderá exercer mais que dois mandatos
                      completos, no máximo seis anos consecutivos ou interpolados e não se poderá mais
                      candidatar-se a presidente da direção.
                    </p>
                  </Article>

                  <Article id="18.º" title="Renúncia, abandono e impedimento">
                    <p>
                      1 — Considera-se abandono de funções o facto de os membros eleitos de um órgão
                      faltarem, sem justificação, a duas reuniões consecutivas ou quatro interpoladas do
                      órgão a que pertencem.
                    </p>
                    <p>
                      2 — Considera-se renúncia ou impedimento de um membro eleito, o seu pedido expresso
                      nesse sentido, por escrito, dirigido ao presidente da mesa da assembleia-geral.
                    </p>
                    <p>
                      3 — Compete à mesa da assembleia-geral apreciar as renúncias e declarar vagos os
                      respetivos lugares.
                    </p>
                  </Article>

                  <Article id="19.º" title="Substituição">
                    <p>
                      1 — No caso de ocorrer vaga, que não seja por destituição, entre os membros eleitos
                      para os órgãos sociais, a mesa da assembleia-geral preencherá a vaga nomeando para
                      o cargo vago um associado no pleno gozo dos seus direitos sindicais, que exercerá as
                      funções até à próxima assembleia-geral.
                    </p>
                    <p>
                      2 — Compete ao órgão dirigente afetado com a vaga indicar um substituto à mesa da
                      assembleia-geral, no prazo máximo de 15 dias úteis, devendo a proposta da nomeação
                      ser devidamente fundamentada e acompanhada de termo próprio de aceitação pelo
                      associado proposto.
                    </p>
                    <p>
                      3 — A mesa da assembleia-geral dará um parecer no prazo máximo de oito dias úteis,
                      verificando se o associado indigitado para o cargo se encontra no pleno gozo dos
                      seus direitos sindicais.
                    </p>
                    <p>
                      4 — Sendo o parecer da mesa da assembleia-geral desfavorável, o órgão afetado com a
                      vaga indicará novo substituto, observando-se os limites temporais definidos nos
                      números anteriores.
                    </p>
                    <p>
                      5 — Em qualquer dos casos, as substituições não podem exceder metade dos membros
                      eleitos para qualquer dos órgãos dirigentes nacionais ou distritais, se tal vier a
                      acontecer será aplicado o número 4 do artigo 32.º
                    </p>
                    <p>
                      6 — Na direção nacional, se as vagas excederem o limite previsto no número 5, a mesa
                      da assembleia-geral procederá como previsto no número 4 do artigo 32.º
                    </p>
                  </Article>

                  <Article id="20.º" title="Convocação e funcionamento">
                    <p>
                      A convocação e funcionamento de cada um dos órgãos da associação será objeto de
                      regulamento a elaborar e aprovar pelo próprio órgão.
                    </p>
                  </Article>

                  <Article id="21.º" title="Quórum">
                    <p>
                      1 — Para qualquer órgão eleito reunir e deliberar validamente é necessário que se
                      encontrem presentes metade mais um dos seus membros.
                    </p>
                    <p>
                      2 — A assembleia-geral, deverá reunir em primeira convocatória com 10 % dos
                      associados. Verificada a falta do mencionado quórum, esta poderá reunir em segunda
                      convocatória meia hora depois com qualquer número de associados.
                    </p>
                  </Article>

                  <Article id="22.º" title="Deliberações">
                    <p>
                      As deliberações, salvo disposição em contrário, são tomadas por maioria simples,
                      tendo o presidente do órgão voto de qualidade.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO VII" title="Assembleia-geral">
                  <Article id="23.º" title="Conteúdo de competência">
                    <p>
                      A assembleia-geral é o órgão de apreciação e definição das linhas gerais da política
                      e estratégia sindical nacional da ASAPOL e é constituído por todos os associados no
                      pleno gozo dos direitos sindicais, competindo-lhe:
                    </p>
                    <Aliases
                      items={[
                        "a) Aprovar o regulamento do seu funcionamento;",
                        "b) Eleger e destituir os órgãos nacionais da Associação Sindical Autónoma de Polícia - ASAPOL;",
                        "c) Aprovar o relatório e contas do ano anterior, bem como o parecer do conselho fiscal;",
                        "d) Apreciar o orçamento e plano de atividades para o ano seguinte;",
                        "e) Alterar os estatutos;",
                        "f) Apreciar os recursos interpostos perante a assembleia geral;",
                        "g) Deliberar sobre o valor da quotização sindical;",
                        "h) Autorizar a direção nacional a contrair empréstimos e adquirir, alienar ou onerar bens imóveis;",
                        "i) Aprovar o regulamento eleitoral, bem como o regulamento disciplinar apresentado pela direção nacional;",
                        "j) Deliberar sobre a dissolução da ASAPOL e a forma de liquidação do seu património;",
                        "l) Mandatar a direção nacional para adotar as formas de ação adequadas na defesa dos interesses da classe profissional;",
                        "m) Deliberar sobre a filiação da associação em organismos internacionais com objetivos análogos, e sobre a sua fusão, integração ou associação em organismos nacionais congéneres, definindo as regras dessa mesma participação.",
                      ]}
                    />
                  </Article>

                  <Article id="24.º" title="Reuniões">
                    <p>
                      1 — A assembleia-geral será convocada pelo presidente da mesa e reunirá em sessão
                      ordinária anualmente, até ao final do mês de março para aprovação de contas do ano
                      anterior.
                    </p>
                    <p>
                      2 — A assembleia-geral reúne-se em sessão extraordinária, por convocação do
                      presidente da mesa a pedido da direção ou a requerimento apresentado por, pelo
                      menos, 30 % dos associados, no pleno gozo dos seus direitos sindicais podem ser
                      convocadas assembleias-gerais.
                    </p>
                    <p>
                      3 — Os pedidos de convocação da assembleia-geral terão de ser fundamentados e
                      dirigidos, por escrito, ao presidente da mesa da assembleia-geral, deles devendo
                      necessariamente constar uma proposta de ordem de trabalhos.
                    </p>
                    <p>
                      4 — A convocatória far-se-á com a antecedência mínima de 15 dias úteis, devendo a
                      convocatória constar o dia, a hora e o local, bem como, a respetiva ordem de
                      trabalhos.
                    </p>
                  </Article>

                  <Article id="25.º" title="Funcionamento">
                    <p>
                      A assembleia-geral poderá funcionar em simultâneo e de forma descentralizada, por
                      distritos ou regiões ou outros sistemas compatíveis com as deliberações a tomar.
                    </p>
                  </Article>

                  <Article id="26.º" title="Mesa da assembleia-geral">
                    <p>
                      1 — A mesa da assembleia-geral é constituída por três membros efetivos, dos quais
                      um é presidente, outro vice-presidente e um secretário e ainda, dois membros
                      suplentes que suprirão a falta de algum membro efetivo, e é eleita em lista conjunta
                      com a direção nacional e o conselho fiscal.
                    </p>
                    <p>
                      2 — Nas suas faltas ou impedimentos, o presidente será substituído pelo
                      vice-presidente.
                    </p>
                    <p>3 — Compete à mesa da assembleia-geral:</p>
                    <Aliases
                      items={[
                        "a) Convocar as reuniões da assembleia-geral, conforme o regulamento;",
                        "b) Dirigir as reuniões da assembleia-geral;",
                        "c) Dar posse aos membros eleitos para os órgãos nacionais da ASAPOL;",
                        "d) Comunicar aos órgãos competentes qualquer irregularidade de que tenha conhecimento;",
                        "e) Redigir as atas das reuniões;",
                        "f) Informar os associados das deliberações do órgão a que preside;",
                        "g) Exercer as demais atribuições que lhe forem cometidas pelos estatutos e regulamentos da assembleia-geral e eleitoral.",
                      ]}
                    />
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO VIII" title="Direção nacional">
                  <Article id="27.º" title="Composição">
                    <p>
                      1 — A direção nacional é o órgão de gestão, administração e representação da
                      ASAPOL.
                    </p>
                    <p>
                      2 — A direção nacional é eleita em lista conjunta com a mesa da assembleia-geral e
                      conselho fiscal.
                    </p>
                    <p>
                      3 — A direção nacional, será composta por: um presidente; dois vices-presidentes; um
                      tesoureiro; um coordenador nacional para as distritais; oito secretários e os
                      restantes vogais, no mínimo de treze elementos e no máximo de oitenta e um
                      elementos.
                    </p>
                    <p>
                      4 — Ao presidente, como primeiro responsável pelo executivo, compete a promoção e
                      coordenação das atividades diretivas.
                    </p>
                    <p>
                      5 — A substituição dos elementos da lista da direção nacional é feita aos
                      candidatos efetivos pela ordem indicada na respetiva lista.
                    </p>
                  </Article>

                  <Article id="28.º" title="Atribuições">
                    <p>
                      1 — Cabe à direção nacional a coordenação da atividade da associação, em
                      conformidade com os estatutos e com as deliberações dos órgãos nacionais.
                    </p>
                    <p>2 — Compete em especial à direção nacional:</p>
                    <Aliases
                      items={[
                        "a) Aprovar o regulamento do seu funcionamento;",
                        "b) Cumprir e fazer cumprir os estatutos;",
                        "c) Representar os associados junto das estruturas hierárquicas, órgãos de soberania e outras entidades nacionais e estrangeiras;",
                        "d) Representar a associação em juízo e fora dele;",
                        "e) Elaborar e apresentar anualmente e com a devida antecedência, ao conselho fiscal, o relatório de atividades e as contas do ano findo, bem como o plano de atividades e o orçamento para o ano seguinte, remetendo-os em seguida à assembleia-geral para discussão e votação;",
                        "f) Elaborar o regulamento eleitoral, bem como o regulamento disciplinar, a apresentar oportunamente para discussão e aprovação pela assembleia-geral;",
                        "g) Discutir e aprovar as grandes linhas de ação e atuação da associação;",
                        "h) Regulamentar a assistência jurídica prestada pela ASAPOL aos sócios;",
                        "i) Nomear grupos de trabalho para estudo de quaisquer problemas;",
                        "j) Elaborar e atualizar o inventário anual dos bens e valores da associação;",
                        "l) Requerer a convocação da assembleia-geral extraordinária;",
                        "m) Propor a alteração dos estatutos à assembleia-geral, sempre que para tal for solicitado através de requerimento devidamente fundamentado;",
                        "n) Exercer o poder disciplinar previsto neste estatuto;",
                        "o) Analisar a readmissão dos sócios expulsos;",
                        "p) Exercer as funções, que lhe foram cometidas pelos órgãos dirigentes da associação e pelos presentes estatutos;",
                        "q) Redigir as atas das reuniões.",
                      ]}
                    />
                    <p>3 — Compete em especial, ao presidente da direção nacional:</p>
                    <Aliases
                      items={[
                        "a) Como primeiro responsável pelo executivo nacional da ASAPOL, a promoção e coordenação das atividades diretivas;",
                        "b) Poder nomear, quando julgar necessário por manifesto interesse para à ASAPOL, um ou mais dirigentes das distritais, para transitoriamente executar determinadas funções executivas e desde que a direção não esteja composta com o máximo de elementos permitidos estatutariamente;",
                        "c) A nomeação transitória do dirigente referido no ponto anterior, só pode acontecer, com o parecer favorável dos vices presidentes e do coordenador nacional para as distritais;",
                        "d) Estando cumpridos os pressupostos das alíneas anteriores, a sua nomeação terá efeitos imediatos e este terá enquanto exercer tais funções a competência de decisão executiva dos restantes dirigentes da direção nacional;",
                        "e) O presidente da direção, quando julgar que não se justifica a permanência daquele dirigente naquelas funções, após consultar os vices presidentes e o coordenador nacional para as distritais, pode mandar cessar as funções daquele, voltando este a exercer as funções que exercia junto da distrital que pertencia.",
                      ]}
                    />
                    <p>4 — Compete em especial, aos vices-presidentes da direção nacional:</p>
                    <Aliases
                      items={[
                        "a) Na necessidade da substituição do presidente da direção, tomará o seu lugar, o primeiro vice-presidente e no impedimento deste o segundo vice-presidente.",
                      ]}
                    />
                    <p>5 — Compete em especial, ao coordenador nacional para as distritais:</p>
                    <Aliases
                      items={[
                        "a) Coordenar todos os distritos e regiões autónomas, com o fim de mandar executar a gestão, administração, representação, organização de palestras, recolha e análise de propostas e apoio aos associados, conforme diretivas ou instruções da direção nacional.",
                      ]}
                    />
                  </Article>

                  <Article id="29.º" title="Reuniões e funcionamento">
                    <p>
                      A direção nacional reunirá regularmente por convocação do presidente ou a pedido de
                      dois dos seus membros.
                    </p>
                  </Article>

                  <Article id="30.º" title="Executivo da direção nacional">
                    <p>
                      O executivo da direção nacional tem por funções a coordenação da atividade da
                      associação, nos aspetos executivos e administrativo, pautando a sua ação pelo
                      cumprimento das decisões da assembleia-geral e da direção nacional.
                    </p>
                  </Article>

                  <Article id="31.º" title="Vinculações e responsabilização">
                    <p>
                      1 — Para que a associação fique vinculada é necessário que os respetivos documentos
                      sejam assinados por, pelo menos, dois membros do executivo da direção nacional,
                      sendo, obrigatoriamente o presidente da direção e o secretário, ou o tesoureiro,
                      quando estiverem em causa compromissos financeiros ou realização de despesas.
                    </p>
                    <p>
                      2 — A direção nacional poderá constituir mandatário para a prática de certos atos,
                      devendo, para tal, fixar com toda a precisão o âmbito dos poderes conferidos.
                    </p>
                    <p>
                      3 — A direção é solidariamente responsável pelos atos da sua administração.
                    </p>
                  </Article>

                  <Article id="32.º" title="Destituição">
                    <p>
                      1 — Os membros da direção poderão ser destituídos pela assembleia-geral em caso de
                      justa causa.
                    </p>
                    <p>
                      2 — Constitui justa causa, nomeadamente, o comportamento culposo que, objetivamente,
                      ponha em causa a imagem e bom-nome da associação ou a prática de atos que lesem
                      materialmente a associação.
                    </p>
                    <p>
                      3 — No caso de destituição de um membro, o presidente da mesa da assembleia-geral
                      deverá de imediato, na mesma assembleia em que ocorra a destituição fazer eleger um
                      associado para que o substitua até ao final do mandato.
                    </p>
                    <p>
                      4 — No caso de toda a direção ser destituída, deverá o presidente da mesa nomear uma
                      comissão administrativa composta por três associados que assegure a gestão corrente
                      da associação e convocar eleições a realizar no prazo de sessenta dias seguidos. No
                      entanto quando a direção for destituída e, já estiverem as eleições marcadas a data
                      das eleições mantém-se inalterada.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO IX" title="Conselho fiscal">
                  <Article id="33.º" title="Composição">
                    <p>
                      O conselho fiscal será composto por três elementos, sendo um deles o presidente.
                    </p>
                  </Article>

                  <Article id="34.º" title="Atribuições">
                    <p>Compete ao conselho fiscal:</p>
                    <Aliases
                      items={[
                        "a) Fiscalizar o cumprimento dos estatutos em matéria económica e financeira;",
                        "b) Dar parecer sobre o relatório anual e contas e sobre o plano anual de atividades e orçamento;",
                        "c) Dar parecer sobre o sistema de quotização;",
                        "d) Examinar a contabilidade da associação, sempre que o entenda necessário ou conveniente;",
                        "e) Apresentar à direção nacional as sugestões que entenda de interesse para a vida da associação;",
                        "f) Redigir as atas das suas reuniões.",
                      ]}
                    />
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO X" title="Assembleia distrital">
                  <Article id="35.º" title="Composição">
                    <p>
                      1 — A associação distrital é constituída por todos os associados, da área geográfica
                      correspondente à direção distrital, em pleno gozo dos seus direitos sindicais.
                    </p>
                    <p>
                      2 — A mesa da assembleia distrital é composta por um presidente e um secretário.
                    </p>
                    <p>
                      3 — O presidente da mesa da assembleia distrital é o que figurar em primeiro lugar
                      na lista vencedora às eleições para a direção distrital ou regional.
                    </p>
                    <p>4 — O secretário será o responsável pela elaboração das atas.</p>
                  </Article>

                  <Article id="36.º" title="Reuniões, convocações">
                    <p>1 — A assembleia distrital reúne ordinariamente:</p>
                    <Aliases
                      items={[
                        "a) Uma vez por ano, até ao mês de março;",
                        "b) De 3 em 3 anos para eleger a direção distrital.",
                      ]}
                    />
                    <p>2 — A assembleia distrital reúne extraordinariamente:</p>
                    <Aliases
                      items={[
                        "a) A pedido do presidente da mesa da assembleia distrital;",
                        "b) A pedido de 10 % dos associados do distrito em pleno gozo dos seus direitos sindicais.",
                      ]}
                    />
                    <p>
                      3 — Os pedidos de convocação da assembleia distrital terão de ser fundamentados e
                      dirigidos, por escrito, ao presidente da mesa da assembleia distrital, deles devendo
                      necessariamente constar uma proposta de ordem de trabalhos.
                    </p>
                    <p>
                      4 — A convocatória far-se-á com a antecedência mínima de 15 dias úteis, devendo a
                      convocatória constar o dia, a hora e o local, bem como, a respetiva ordem de
                      trabalhos.
                    </p>
                    <p>
                      5 — As propostas ou moções a discutir na assembleia distrital deverão estar
                      disponíveis para os associados, até 8 dias úteis antes da data da realização da
                      mesma.
                    </p>
                  </Article>

                  <Article id="37.º" title="Quórum">
                    <p>
                      1 — Para qualquer órgão eleito reunir e deliberar validamente é necessário que se
                      encontrem presentes metade mais um dos seus membros.
                    </p>
                    <p>
                      2 — A assembleia-geral, deverá reunir em primeira convocatória com 10 % dos
                      associados. Verificada a falta do mencionado quórum, esta poderá reunir em segunda
                      convocatória meia hora depois com qualquer número de associados.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO XI" title="Direção distrital ou regional">
                  <Article id="38.º" title="Direção distrital ou regional">
                    <p>
                      Podem ser criadas ou extintas pela associação, direções distritais ou regionais, em
                      qualquer parte do território nacional, sempre que haja necessidade de apoio e
                      representação mais direta junto dos associados ou que, a direção nacional, entenda
                      que o melhor é extinguir aquela distrital, podendo, no entanto, promover a criação
                      de uma nova distrital.
                    </p>
                  </Article>

                  <Article id="39.º" title="Composição">
                    <p>
                      1 — As direções distritais e regionais serão compostas por sócios daqueles distritos
                      ou regiões.
                    </p>
                    <p>
                      2 — Nos comandos metropolitanos da polícia de Lisboa e do Porto, nas Regiões
                      Autónomas dos Açores e Madeira e nas restantes direções distritais, situadas junto
                      dos outros comandos distritais, terão um efetivo no máximo de vinte e um dirigentes.
                    </p>
                  </Article>

                  <Article id="40.º" title="Competências">
                    <p>Compete às direções:</p>
                    <Aliases
                      items={[
                        "a) Dinamizar a vida sindical nos respetivos comandos de polícia, designadamente através da difusão das informações sindicais e de reuniões periódicas com os associados;",
                        "b) Dar parecer, quando solicitado, sobre as propostas de admissão de sócios dos respetivos comandos de polícia;",
                        "c) Elaborar e manter atualizado o inventário de bens adstritos à respetiva delegação;",
                        "d) Desempenhar com eficiência todas as tarefas que neles sejam delegadas;",
                        "e) Gerir eficazmente todos os fundos que eventualmente possam vir a estar à sua disposição;",
                        "f) Fazer o levantamento das questões profissionais do(s) respetivo(s) comando(s) e dirigi-lo à direção;",
                        "g) Representar a ASAPOL, sempre que autorizado pelo presidente, em reuniões sindicais na região.",
                      ]}
                    />
                  </Article>

                  <Article id="41.º" title="Eleição">
                    <p>
                      1 — A eleição para as direções distritais ou regionais faz-se através de
                      apresentação de lista ou listas de candidatura de entre os associados daquele
                      distrito ou região.
                    </p>
                    <p>
                      2 — As listas serão apresentadas à assembleia distrital que depois de analisar a
                      legalidade da composição, marcará dentro do prazo máximo de trinta dias seguidos a
                      eleição.
                    </p>
                    <p>3 — Desse facto dará conhecimento ao presidente da direção nacional.</p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO XII" title="Delegados sindicais">
                  <Article id="42.º" title="Delegados sindicais">
                    <p>
                      1 — O delegado sindical é um elemento de dinamização e de coordenação da atividade
                      sindical nos locais de trabalho e representa o interesse dos associados junto dos
                      órgãos da associação, neles participando, nos termos previstos nestes estatutos.
                    </p>
                    <p>
                      2 — Os delegados sindicais serão eleitos pela direção distrital em funções daquela
                      unidade orgânica, exceto se nesse local de trabalho existirem mais de cinco
                      associados, neste caso serão eleitos por escrutínio direto e secreto, a realizar
                      pelos associados de cada serviço ou unidade orgânica, que decorrem no mesmo dia que
                      forem realizadas as eleições para eleger os órgãos dirigentes das distritais.
                    </p>
                    <p>
                      3 — Os delegados sindicais poderão ser destituídos e substituídos pela direção
                      distrital da unidade orgânica, em caso de violação dos seus deveres ou de
                      comportamento lesivo dos interesses e bom-nome da associação, sob o parecer do
                      presidente da direção nacional da ASAPOL.
                    </p>
                    <p>
                      4 — O mandato dos delegados sindicais é de quatro anos podem ser renovados por uma
                      ou mais vezes.
                    </p>
                  </Article>

                  <Article id="43.º" title="Composição e comunicação">
                    <p>
                      1 — Em cada local de trabalho de base, designadamente a esquadra, ou outros, os
                      associados que exerçam a atividade profissional na correspondente área de ação
                      serão nomeados delegados sindicais, pela direção distrital, caso não exista pelo o
                      elemento da direção nacional que exerça essas funções, sempre que o entenderem
                      necessário e conveniente para a defesa dos interesses profissionais, em
                      conformidade com o estipulado na lei.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO XIII" title="Comissão eleitoral">
                  <Article id="44.º" title="Comissão eleitoral">
                    <p>
                      1 — A comissão eleitoral será composta pelo presidente da mesa da assembleia-geral
                      e por representantes de cada uma das listas concorrentes.
                    </p>
                    <p>
                      2 — Os candidatos aos corpos gerentes, como presidentes e vice-presidentes, não
                      poderão fazer parte desta comissão.
                    </p>
                    <p>
                      3 — A comissão eleitoral será empossada pela mesa da assembleia-geral, até quarenta
                      e oito horas após o termo do prazo estabelecido para a apresentação de
                      candidaturas.
                    </p>
                  </Article>

                  <Article id="45.º" title="Competência da comissão eleitoral">
                    <p>Compete à comissão eleitoral:</p>
                    <Aliases
                      items={[
                        "a) Verificar a elegibilidade dos candidatos e receber todas as reclamações, até oito dias após a sua tomada de posse;",
                        "b) Decidir, no prazo de cinco dias, sobre todas as reclamações recebidas;",
                        "c) Dar conhecimento imediato ao primeiro subscritor das listas onde haja irregularidades para efetuar as respetivas correções, no prazo de cinco dias após comunicação;",
                        "d) Proceder, nas vinte e quatro horas seguintes ao prazo concedido nos termos da alínea anterior, à aprovação definitiva das candidaturas;",
                        "e) Fiscalizar todo o processo eleitoral;",
                        "f) Assegurar o apuramento e manter em funcionamento as mesas de voto;",
                        "g) Proceder à divulgação dos resultados provisórios, até vinte e quatro horas após o encerramento das mesas de voto;",
                        "h) Decidir, no prazo de quarenta e oito horas, sobre qualquer recurso interposto do ato eleitoral;",
                        "i) Informar a mesa da assembleia-geral dos resultados definitivos do ato eleitoral nas vinte e quatro horas seguintes à resolução de eventuais recursos.",
                      ]}
                    />
                  </Article>

                  <Article id="46.º" title="Recurso">
                    <p>
                      1 — Do acto eleitoral cabe recurso para a comissão eleitoral, no prazo de quarenta e
                      oito horas.
                    </p>
                    <p>2 — Das decisões da comissão eleitoral cabe recurso para a assembleia-geral.</p>
                  </Article>

                  <Article id="47.º" title="Campanha eleitoral">
                    <p>
                      1 — O período de campanha eleitoral inicia-se no primeiro dia após o prazo limite
                      de entrega das listas e termina quarenta e oito horas antes da realização deste.
                    </p>
                    <p>
                      2 — A utilização dos serviços da associação deve ser assegurada equitativamente às
                      diferentes listas concorrentes às eleições.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO XIV" title="Receitas, despesas e princípios orçamentais">
                  <Article id="48.º" title="Património e receitas">
                    <p>
                      1 — O património da Associação Sindical Autónoma de Polícia - ASAPOL é constituído
                      por bens móveis e imóveis, bem como pelo rendimento desses bens.
                    </p>
                    <p>2 — Constituem receitas da ASAPOL:</p>
                    <Aliases
                      items={[
                        "a) As quotas dos associados;",
                        "b) As receitas extraordinárias provenientes de iniciativas levadas a cabo por associados ou por órgãos da associação;",
                        "c) De doações ou patrocínios.",
                      ]}
                    />
                  </Article>

                  <Article id="49.º" title="Despesas">
                    <p>1 — As receitas da associação terão as seguintes aplicações prioritárias:</p>
                    <Aliases
                      items={[
                        "a) Pagamento de todas as despesas e encargos da associação;",
                        "b) Constituição de um fundo de reserva nacional, no valor de 5 % das receitas de quotização, destinado a fazer face a situações graves ou relevantes que justifiquem a sua movimentação.",
                      ]}
                    />
                    <p>2 — O património da ASAPOL é insuscetível de divisão ou partilha.</p>
                    <p>
                      3 — A expulsão ou saída de qualquer membro não confere o direito a qualquer
                      reembolso de quotas ou património da associação.
                    </p>
                  </Article>

                  <Article id="50.º" title="Princípios orçamentais">
                    <p>
                      1 — A associação rege-se pelos princípios da unidade e universalidade das receitas
                      e despesas, através da existência de um orçamento nacional e de uma única
                      contabilidade.
                    </p>
                    <p>2 — O poder de decisão orçamental cabe à direção nacional.</p>
                    <p>
                      3 — Na elaboração dos orçamentos, a direção nacional deverá ter em conta a garantia
                      das despesas correntes e de funcionamento nacional, regional e distrital.
                    </p>
                  </Article>

                  <Article id="51.º" title="Gestão e contabilidade">
                    <p>
                      1 — A contabilidade e período de gestão financeira serão ajustados ao ano civil,
                      devendo ser adotada uma metodologia de escrituração simples e uniforme.
                    </p>
                    <p>
                      2 — O relatório das contas e o orçamento deverão ser elaborados com a devida
                      antecedência, a fim de poderem ser apreciados pelos órgãos estatutariamente
                      competentes.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO XV" title="Fusão e dissolução">
                  <Article id="52.º" title="Requisitos especiais">
                    <p>
                      A fusão ou dissolução da associação só pode ser decidida em assembleia-geral
                      expressamente convocada para o efeito com um número de associados nunca inferior a
                      30 % do total de associados da associação e tem de ser aprovada por maioria
                      simples dos sócios, através de voto secreto, podendo ser por correspondência.
                    </p>
                  </Article>

                  <Article id="53.º" title="Destino do património">
                    <p>
                      A assembleia-geral que deliberar a fusão ou dissolução deverá obrigatoriamente
                      definir os termos em que se processará, não podendo em caso algum os bens da ASAPOL
                      ser distribuídos pelos sócios.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO XVI" title="Quotização">
                  <Article id="54.º" title="Quotização">
                    <p>
                      1 — A quotização será fixada pela assembleia-geral, mediante proposta da direção,
                      conforme anexo único.
                    </p>
                    <p>
                      2 — A cobrança das quotas far-se-á através de desconto direito no vencimento do
                      associado, por intermédio da direção nacional da PSP, que por transferência
                      bancária a depositará na conta da ASAPOL.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO XVII" title="Alteração dos estatutos">
                  <Article id="55.º" title="Alteração dos estatutos">
                    <p>
                      Os estatutos só poderão ser alterados em assembleia-geral desde que essa intenção
                      constitua um ponto expresso da sua ordem de trabalhos e ser aprovados por três
                      quartos dos votos presentes.
                    </p>
                  </Article>
                </Chapter>

                <Chapter num="CAPÍTULO XVIII" title="Disposições finais e transitórias">
                  <Article id="56.º" title="Direito subsidiário">
                    <p>
                      Em tudo o que os presentes estatutos sejam omissos, é subsidiariamente aplicável a
                      legislação relativa ao ordenamento jurídico das associações sindicais e a
                      legislação relativa ao exercício da liberdade sindical e de negociação coletiva da
                      PSP. Registado em 13 de janeiro de 2013, ao abrigo do artigo 449.º do Código do
                      Trabalho, sob o n.º 5, a fl. 167 do livro n.º 2.
                    </p>
                    <p className="mt-4 font-medium text-foreground/85">
                      Associação Sindical Autónoma de Polícia - ASAPOL - Direção
                    </p>
                    <p className="mt-2">
                      Identidade dos membros da direção nacional eleitos em 16 de dezembro de 2017, para
                      o mandato de três anos.
                    </p>
                    <p className="mt-2">
                      Presidente: António Rui Nunes Serra da Silva, cartão de cidadão n.º 07044207; Nuno
                      Prego Castro, cartão de cidadão n.º 11825965; Luís Carlos Carvalhais Carvalho,
                      cartão de cidadão n.º 13537010; Paulo Jorge de Frias Lopes, cartão de cidadão n.º
                      08023286; Júlio Manuel Gomes Barros de Sousa, cartão de cidadão n.º 08082602; Gil
                      Manuel Ferreira Vilaranda, cartão de cidadão n.º 12510726; Luís Carlos Roque
                      Rodrigues, cartão de cidadão n.º 13580698; Rui Miguel Bailote Bastos, cartão de
                      cidadão n.º 10842388; Cristiano de Sousa Paupério Pereira, cartão de cidadão n.º
                      12409234; Gaspar João dos Santos Batista, cartão de cidadão n.º 09545869; André
                      Filipe Dias Silva, cartão de cidadão n.º 12999525; Fábio Alexandre Pereira Pinto,
                      cartão de cidadão n.º 13000181 e Daniel Filipe da Silva Almeida, cartão cidadão n.º
                      1306016, assim como, os que forem nomeados de acordo com o número 3 do artigo 28.º
                      do presente estatuto.
                    </p>
                  </Article>

                  <Article id="57.º" title="Entrada em vigor">
                    <p>
                      A nova redação do presente estatuto da ASAPOL entra em vigor, no dia imediato à sua
                      publicação.
                    </p>
                    <p className="mt-4 text-sm">
                      Registado em 14 de novembro de 2019, ao abrigo do artigo 449.º do Código do
                      Trabalho, sob o n.º 49, a fl. 192 do livro n.º 2.
                    </p>
                  </Article>
                </Chapter>
              </div>
            </div>
          </article>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
