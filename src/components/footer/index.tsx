import { Container } from '../container';
import styles from './styles.module.scss';

interface FooterProps {
  title: string;
}

export function Footer({ title }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.texto}>Desenvolvido por {title}, todos os direitos reservados &copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  )
}