import styles from './styles.module.scss';

interface ButtonVariants {
  variants: 'primary' | 'outline';
  children: React.ReactNode;
}

export function Botao({ children, variants }: ButtonVariants) {
  return (
    <button
      type="button"
      className={variants === 'primary' ? styles.primary : styles.outline}
    >
      {children}
    </button>
  )
}