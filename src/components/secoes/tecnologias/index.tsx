import { Container } from "@/components/container";
import styles from "./styles.module.scss";
import { RoadmapTecnologias } from "./components/roadmap";
import { TecnologiaProps } from "@/types/props";

export function Tecnologias({ tecnologias }: { tecnologias: TecnologiaProps[] }) {
  return (
    <section className={styles.tecnologias}>
      <Container>
        <div className={styles.content}>
          <h1>Principais tecnologias que utilizo</h1>

          <RoadmapTecnologias tecnologias={tecnologias} />

        </div>
      </Container>
    </section>
  )
}