import { Footer } from "@/components/footer";
import { Header } from "@/components/header"
import { Contato } from "@/components/(secoes)/contato"
import { Hero } from "@/components/(secoes)/hero";
import { Projetos } from "@/components/(secoes)/projetos";
import { Sobre } from "@/components/(secoes)/sobre";
import { Tecnologias } from "@/components/(secoes)/tecnologias";
import { getPageData } from "@/lib/getPageData";
import { DadosProps } from "@/types/props";

let cachedData: any;

async function getData() {
  if (!cachedData) {
    cachedData = await getPageData();
  }
  return cachedData;
}

export async function generateMetadata() {
  const { object } = await getData() as DadosProps;
  return {
    title: `${object.title} | ${object.metadata.carreira}`
  }
}

export const revalidate = 120;

export default async function Home() {
  const { object } = await getData() as DadosProps;

  const dadosHero = {
    ...object.metadata.hero,
    title: object.title,
    carreira: object.metadata.carreira,
    curriculourl: object.metadata.curriculourl,
  }

  return (
    <>
      <Header title={object.title} />
      <Hero dadosHero={dadosHero} />
      <Sobre sobre={object.metadata.sobre} />
      <Tecnologias tecnologias={object.metadata.tecnologias} />
      <Projetos projetos={object.metadata.projetos} />
      <Contato textoform={object.metadata.textoform} />
      <Footer title={object.title} />
    </>
  );
}