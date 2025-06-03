import { TimerIcon } from 'lucide-react'
import styles from './style.module.scss'
import { RouterLink } from '../RouterLink'

export function Logo() {
    return (
        <div className={styles.logo}>
           <RouterLink href="/" className={styles.logoLink}>
            <TimerIcon size={32} />
            <span>Chronos</span>
           </RouterLink>
        </div>
    )
}
