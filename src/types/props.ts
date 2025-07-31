export interface TecnologiaProps {
  nome: string,
  stack: string,
  paragraph: string,
  icon: "RiNextjsLine" | "SiReact" | "TbBrandJavascript" | "RiTailwindCssFill" | "BiLogoSass" | "FaNodeJs",
  anosexp: string,
}

export interface ProjetoProps {
  nome: string;
  tecnologias?: string[];
  linkgithub: string;
  linkdemo: string;
  descricao: string;
  imageurl: string;
  havelinkdemo: boolean;
  havelinkgithub: boolean;
}

export interface DadosProps {
  object: {
    title: string,
    type: string,
    metadata: {
      hero: {
        heroimg: {
          url: string,
          imgix_url: string
        },
        botaocontatotitle: string,
        botaocontatopath: string
      },
      carreira: string,
      botaocontato: {
        title: string,
        pathurl: string
      },
      sobre: {
        title: string,
        description: string
      },
      tecnologias: TecnologiaProps[],
      projetos: ProjetoProps[],
      textoform: string,
      curriculourl: string,
    }
  }
}