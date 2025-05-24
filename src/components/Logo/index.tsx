import { TimerIcon } from 'lucide-react'
import styles from './style.module.scss'
export function Logo() {
    return (
        <div className={styles.logo}>
           <a className={styles.logoLink} href="/">
            <TimerIcon size={32} />
            <span>Chronos</span>
           </a>
        </div>
    )
}
