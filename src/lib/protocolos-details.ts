import { protocolSlug } from "@/lib/protocolos-shared";

export type ProtocolDetail = {
  name: string;
  title: string;
  description: string;
  phone?: string;
  email?: string;
  address?: string;
  postalCode?: string;
};

export const protocolDetails: ProtocolDetail[] = [
  {
    name: "Alberto Oculista",
    title: "Alberto Oculista",
    description:
      "A Alberto Oculista é uma empresa portuguesa especializada em saúde visual. Disponibiliza óculos graduados, óculos de sol, lentes de contacto e consultas de optometria, destacando-se pela qualidade dos seus produtos e atendimento.",
    phone: "707 101 500",
    email: "cliente@albertooculista.com",
    address: "Rua Dr. Brito Câmara, 7A",
    postalCode: "9000-039 Funchal",
  },
  {
    name: "ACP",
    title: "ACP – Automóvel Club de Portugal",
    description:
      "O ACP é uma das mais antigas e prestigiadas instituições portuguesas ligadas ao setor automóvel. Oferece assistência em viagem, seguros, turismo, formação rodoviária e diversas vantagens para os seus associados.",
    phone: "215 915 915",
    email: "apoio.socio@acp.pt",
    address: "Rua Rosa Araújo, 24",
    postalCode: "1250-195 Lisboa",
  },
    {
    name: "Meo",
    title: "MEO",
    description:
      "A MEO é uma das principais operadoras de telecomunicações em Portugal, fornecendo serviços de televisão, internet, telefone fixo e móvel para clientes particulares e empresariais.",
    phone: "16200",
    email: "apoio.cliente@meo.pt",
    address: "Avenida Fontes Pereira de Melo, 40",
    postalCode: "1069-300 Lisboa",
  },
    {
    name: "Gaes",
    title: "GAES",
    description:
      "A GAES é uma empresa especializada em soluções auditivas. Disponibiliza aparelhos auditivos, testes auditivos e acompanhamento personalizado para melhorar a qualidade de vida dos seus clientes.",
    phone: "800 910 133",
    email: "info@gaes.pt",
    address: "Avenida da República, 50",
    postalCode: "1050-196 Lisboa",
  },
    {
    name: "Vilagale",
    title: "Vila Galé",
    description:
      "A Vila Galé é uma das maiores cadeias hoteleiras portuguesas, possuindo unidades em Portugal e no estrangeiro. Destaca-se pela qualidade dos seus serviços e pela aposta no turismo de excelência.",
    phone: "212 460 650",
    email: "portugal.reservas@vilagale.com",
    address: "Rua de São Domingos à Lapa, 11",
    postalCode: "1249-130 Lisboa",
  },
    {
    name: "Galp",
    title: "Galp",
    description:
      "A Galp é uma empresa multinacional portuguesa do setor energético, atuando nas áreas dos combustíveis, eletricidade, gás natural e energias renováveis.",
    phone: "210 058 800",
    email: "clientes@galp.com",
    address: "Avenida da Índia, 8",
    postalCode: "1349-065 Lisboa",
  },
    {
    name: "AudicaoAtiva",
    title: "AudiçãoActiva",
    description:
      "A AudiçãoActiva é uma rede de centros auditivos especializada na avaliação da audição e adaptação de aparelhos auditivos modernos.",
    phone: "800 100 333",
    email: "geral@audicaoactiva.pt",
    address: "Rua Tomás da Fonseca, Torre G",
    postalCode: "1600-209 Lisboa",
  },
    {
    name: "Bioforma",
    title: "Bioforma",
    description:
      "A Bioforma dedica-se à comercialização de suplementos alimentares, produtos naturais e soluções de bem-estar e nutrição.",
    phone: "214 124 300",
    email: "geral@bioforma.pt",
    address: "Quinta da Fonte, Edifício D. Sancho I",
    postalCode: "2770-203 Paço de Arcos",
  },
    {
    name: "Companhia",
    title: "Companhia",
    description:
      "A Companhia é uma empresa especializada na comercialização de artigos de moda e acessórios, oferecendo produtos modernos e de qualidade.",
    phone: "210 123 456",
    email: "geral@companhia.pt",
    address: "Avenida da Liberdade, 110",
    postalCode: "1269-046 Lisboa",
  },
    {
    name: "Lojadassopas",
    title: "Loja das Sopas",
    description:
      "A Loja das Sopas é uma cadeia de restauração especializada em sopas, saladas e refeições leves, promovendo uma alimentação equilibrada.",
    phone: "214 151 700",
    email: "geral@lojadassopas.pt",
    address: "Rua General Firmino Miguel, 3",
    postalCode: "1600-100 Lisboa",
  },
    {
    name: "Selfish",
    title: "SelFish",
    description:
      "A SelFish atua na área da restauração, oferecendo refeições inspiradas na gastronomia portuguesa e internacional.",
    phone: "210 987 654",
    email: "geral@selfish.pt",
    address: "Avenida da República, 35",
    postalCode: "1050-186 Lisboa",
  },
    {
    name: "Pestana",
    title: "Pestana",
    description:
      "O Grupo Pestana é o maior grupo hoteleiro português, possuindo hotéis e resorts em vários países e oferecendo experiências de alojamento de elevada qualidade.",
    phone: "210 158 100",
    email: "guest.club@pestana.com",
    address: "Rua Jau, 54",
    postalCode: "1300-314 Lisboa",
  },
    {
    name: "Grupotico",
    title: "Grupótico",
    description:
      "O Grupótico é uma empresa ligada ao setor da ótica, disponibilizando produtos e serviços relacionados com a saúde visual.",
    phone: "214 567 890",
    email: "geral@grupotico.pt",
    address: "Rua da Indústria, 20",
    postalCode: "2740-122 Porto Salvo",
  },
    {
    name: "Midas",
    title: "Midas",
    description:
      "A Midas é uma rede especializada na manutenção e reparação automóvel, oferecendo serviços rápidos e profissionais.",
    phone: "808 500 153",
    email: "apoio.cliente@midas.pt",
    address: "Lagoas Park, Edifício 7",
    postalCode: "2740-244 Porto Salvo",
  },
    {
    name: "Turiscar",
    title: "Turiscar",
    description:
      "A Turiscar é uma empresa portuguesa de aluguer de automóveis, disponibilizando soluções de mobilidade para particulares e empresas.",
    phone: "217 973 530",
    email: "reservas@turiscar.pt",
    address: "Aeroporto Humberto Delgado",
    postalCode: "1700-111 Lisboa",
  },
    {
    name: "Floresflores",
    title: "Flores & Flores",
    description:
      "A Flores & Flores dedica-se à venda de flores, plantas e arranjos florais para diversas ocasiões.",
    phone: "213 456 789",
    email: "geral@floreseflores.pt",
    address: "Rua Garrett, 75",
    postalCode: "1200-203 Lisboa",
  },
    {
    name: "Canaverde",
    title: "Canaverde Seguros",
    description:
      "A Canaverde Seguros atua na mediação de seguros, oferecendo soluções personalizadas para particulares e empresas.",
    phone: "214 321 123",
    email: "geral@canaverdeseguros.pt",
    address: "Avenida José Malhoa, 27",
    postalCode: "1099-051 Lisboa",
  },
    {
    name: "Repsol",
    title: "Repsol",
    description:
      "A Repsol é uma empresa internacional do setor energético, presente em Portugal através da comercialização de combustíveis e soluções energéticas.",
    phone: "213 119 000",
    email: "apoiocliente@repsol.com",
    address: "Avenida José Malhoa, 16-B",
    postalCode: "1070-159 Lisboa",
  },
    {
    name: "BlandyTravel",
    title: "Blandy Travel",
    description:
      "A Blandy Travel é uma agência de viagens especializada na organização de férias, viagens de negócios e experiências turísticas.",
    phone: "291 700 400",
    email: "travel@blandy.com",
    address: "Avenida Arriaga, 28",
    postalCode: "9000-064 Funchal",
  },
    {
    name: "Travelutions",
    title: "Travelutions",
    description:
      "A Travelutions é uma agência de viagens que disponibiliza soluções de turismo personalizadas para clientes individuais e empresariais.",
    phone: "214 789 456",
    email: "geral@travelutions.pt",
    address: "Rua Castilho, 14",
    postalCode: "1250-069 Lisboa",
  },
    {
    name: "Basilico",
    title: "Basílico",
    description:
      "O Basílico é um restaurante conhecido pela sua gastronomia italiana, oferecendo pizzas, massas e outras especialidades.",
    phone: "218 888 999",
    email: "geral@basilico.pt",
    address: "Rua do Alecrim, 23",
    postalCode: "1200-014 Lisboa",
  },
    {
    name: "DS",
    title: "Decisões & Soluções",
    description:
      "A Decisões & Soluções é uma empresa de consultoria especializada em crédito, seguros, mediação imobiliária e serviços financeiros.",
    phone: "224 880 800",
    email: "geral@decisoesesolucoes.com",
    address: "Avenida da Boavista, 117",
    postalCode: "4050-115 Porto",
  },
];

const byName = new Map(protocolDetails.map((detail) => [detail.name, detail]));

export function getProtocolDetailByName(name: string) {
  return byName.get(name);
}

export function getProtocolDetailBySlug(slug: string) {
  return protocolDetails.find((detail) => protocolSlug(detail.name) === slug);
}
