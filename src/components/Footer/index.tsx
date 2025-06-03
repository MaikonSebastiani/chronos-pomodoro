import styles from './style.module.scss'
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
        <RouterLink href="/about-pomodoro">Entenda como funciona a técnica pomodoro</RouterLink>
        <RouterLink href="/">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com React 19</RouterLink>
    </footer>
  );
} 