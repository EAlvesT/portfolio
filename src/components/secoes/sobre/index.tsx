import { Container } from '@/components/container';
import styles from './styles.module.scss';
import DevIcon from "@/assets/dev.svg";
import HostingIcon from "@/assets/hospedagem.svg";
import IdeiaIcon from "@/assets/ideia.svg";

interface SobreProps {
  sobre: {
    title: string;
    description: string;
  }
}

export function Sobre({ sobre }: SobreProps) {
  return (
    <section className={styles.sobre}>
      <Container>
        <div className={styles.content}>
          <div className={styles.roadmap}>

            <div className={styles.camposRoadmap}>
              <DevIcon className={styles.icon} />
              <div className={styles.texto}>
                <span>Desenvolvimento Web</span>
              </div>
            </div>

            <div className={styles.camposRoadmap}>
              <HostingIcon className={styles.icon} />
              <div className={styles.texto}>
                <span>Hospedagem</span>
              </div>
            </div>

            <div className={styles.camposRoadmap}>
              <IdeiaIcon className={styles.icon} />
              <div className={styles.texto}>
                <span>Soluções Ágeis</span>
              </div>
            </div>

          </div>

          <div className={styles.textos} data-aos="zoom-in">
            <h1>{sobre.title}</h1>
            <p>{sobre.description}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}