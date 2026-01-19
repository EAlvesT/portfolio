import { HeaderProps } from '@/types/props';
import { ClaroEscuro } from '../claroEscuro';
import { Container } from '../container';
import styles from './setyles.module.scss';
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface HeaderComponentProps {
  dadosHeader: {
    title: string;
    links: HeaderProps[];
  }
}

const iconMap = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub
} as const;

export function Header({ dadosHeader }: HeaderComponentProps) {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.centerContent}>
          <div>
            <h1 className={styles.title}>{dadosHeader.title}</h1>
          </div>
          <nav className={styles.links}>
            <ClaroEscuro />

            {dadosHeader.links.map(link => {
              const Icon = iconMap[link.icon];

              return (
                <a
                  key={link.nome}
                  href={link.path}
                  title={link.titulo}
                  aria-label={link.titulo}
                  target='_blank'
                >
                  <Icon size={32} className={styles.icon} />
                </a>
              )
            })}

          </nav>
        </div>
      </Container>
    </header>
  )
}