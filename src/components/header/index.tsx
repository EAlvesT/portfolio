import { ClaroEscuro } from '../claroEscuro';
import { Container } from '../container';
import styles from './setyles.module.scss';
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface HeaderProps {
  title: string;
}

interface LinkProps {
  nome: string;
  path: string;
  icon: "FaLinkedin" | "FaGithub";
  titulo: string;
}

const links: LinkProps[] = [
  { nome: "Linkedin", path: "https://www.linkedin.com/in/eduardo-alves-971b81163?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "FaLinkedin", titulo: "Link para o Linkedin" },
  { nome: "Github", path: "https://github.com/EalvesT", icon: "FaGithub", titulo: "Link para o Github" },
];

const iconMap = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub
} as const;

export function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.centerContent}>
          <div>
            <h1 className={styles.title}>{title}</h1>
          </div>
          <nav className={styles.links}>
            <ClaroEscuro />

            {links.map(link => {
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