import { publicUrl } from "@/lib/site";

const images = {
  presidente: publicUrl("imagens/noticias/presidente.jpg"),
  foto1: publicUrl("imagens/noticias/foto1.jpg"),
  foto2: publicUrl("imagens/noticias/foto2.jpg"),
  foto3: publicUrl("imagens/noticias/foto3.webp"),
  foto4: publicUrl("imagens/noticias/foto4.jpg"),
  foto5: publicUrl("imagens/noticias/foto5.jpg"),
  foto6: publicUrl("imagens/noticias/foto6.webp"),
  foto7: publicUrl("imagens/noticias/foto7.webp"),
} as const;

export const newsArticles = [
  {
    cat: "Sindicato",
    title: "ASAPOL reúne-se com o MAI",
    summary: "Propostas concretas para a valorização dos profissionais da PSP.",
    date: "12 Jun 2026",
    image: images.presidente,
    featured: true,
  },
  {
    cat: "Legislação",
    title: "Novo regulamento de serviço",
    summary: "Análise jurídica das alterações em vigor.",
    date: "08 Jun 2026",
    image: images.foto2,
  },
  {
    cat: "Formação",
    title: "Inscrições abertas: ciclo 2026/2027",
    summary: "Mais de 30 ações de formação certificadas.",
    date: "02 Jun 2026",
    image: images.foto3,
  },
  {
    cat: "PSP",
    title: "Novos efetivos na PSP",
    summary: "Análise da entrada de novos profissionais no terreno.",
    date: "28 Mai 2026",
    image: images.foto4,
  },
  {
    cat: "Eventos",
    title: "Encontro Nacional ASAPOL 2026",
    summary: "Lisboa recebe o maior encontro de associados do ano.",
    date: "20 Mai 2026",
    image: images.foto5,
  },
  {
    cat: "Sindicato",
    title: "Reunião com grupos parlamentares",
    summary: "Posições da ASAPOL apresentadas em sede própria.",
    date: "10 Mai 2026",
    image: images.foto6,
  },
  {
    cat: "Legislação",
    title: "Reforma do estatuto policial",
    summary: "Os pontos críticos que defendemos.",
    date: "02 Mai 2026",
    image: images.foto7,
  },
] as const;

export const homepageNews = [
  {
    cat: "Sindicato",
    title: "ASAPOL reúne-se com o MAI para discutir suplementos da PSP",
    summary:
      "A direção da ASAPOL apresentou propostas concretas para a valorização dos profissionais da Polícia.",
    date: "12 Jun 2026",
    image: images.presidente,
  },
  {
    cat: "Legislação",
    title: "Novo regulamento de serviço: o que muda para os agentes",
    summary: "Análise jurídica detalhada das alterações que entram em vigor no próximo trimestre.",
    date: "08 Jun 2026",
    image: images.foto2,
  },
  {
    cat: "Formação",
    title: "Abertas inscrições para o ciclo de formação 2026/2027",
    summary: "Mais de 30 ações de formação certificadas, disponíveis para todos os associados.",
    date: "02 Jun 2026",
    image: images.foto3,
  },
] as const;

export const newsCategories = [
  "Todas",
  "Sindicato",
  "PSP",
  "Legislação",
  "Formação",
  "Eventos",
] as const;
