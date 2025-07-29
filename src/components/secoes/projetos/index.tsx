import { Container } from '@/components/container';
import styles from './styles.module.scss';
import { ProjetoProps } from '@/types/props';
import { RoadmapProjetos } from './componentes/roadmap';

interface ProjetoComponentProps {
  projetos: ProjetoProps[];
}

export function Projetos({ projetos }: ProjetoComponentProps) {
  return (
    <section className={styles.projetos}>
      <Container>
        <div className={styles.content}>
          <h1>Meus projetos</h1>

          <RoadmapProjetos projetos={projetos} />

        </div>
      </Container>
    </section>
  )
}