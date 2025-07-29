import { Container } from '@/components/container';
import styles from './styles.module.scss';
import { ContatoForm } from './components/form';

interface ContatoProps {
  textoform: string;
}

export function Contato({ textoform }: ContatoProps) {
  return (
    <section className={styles.contato}>
      <Container>
        <div className={styles.centerContent}>

          <p className={styles.textoContato}>{textoform}</p>

          <ContatoForm />

        </div>
      </Container>
    </section>
  )
}