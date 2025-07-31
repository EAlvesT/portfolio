import { Container } from '@/components/container';
import { Botao } from '@/components/ui/button/bottao';
import styles from './styles.module.scss';
import Image from 'next/image';

interface HeroProps {
  dadosHero: {
    heroimg: {
      url: string;
      imgix_url: string;
    },
    botaocontatotitle: string;
    botaocontatopath: string;
    title: string;
    carreira: string;
    curriculourl: string;
  };
}

export function Hero({ dadosHero }: HeroProps) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textos}>
            <h1 data-aos="fade-down">Olá <div className={styles.dot}></div></h1>
            <span data-aos="fade-down" data-aos-delay="400">Me chamo {dadosHero.title.split(" ")[0]}</span>
            <h2 data-aos="fade-right" data-aos-delay="600">{dadosHero.carreira}</h2>
            <div className={styles.botoes}>
              <Botao variants='primary'>
                <a href={`${dadosHero.botaocontatopath}`} target="_blank" rel="noopener noreferrer">
                  {dadosHero.botaocontatotitle}
                </a>
              </Botao>
              <Botao variants='outline'>
                <a href={`${dadosHero.curriculourl}`} download="Currículo Eduardo.pdf">
                  Meu currículo
                </a>
              </Botao>
            </div>
          </div>
          <div className={styles.imagem} data-aos="fade-down-left" data-aos-delay="800">
            <Image
              src={`${dadosHero.heroimg.imgix_url}`}
              alt='Imagem desenvolvedor'
              sizes='(min-width: 768px) 50vw, 80vw'
              fill
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  )
}