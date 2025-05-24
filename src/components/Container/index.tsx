import styles from './style.module.scss'

type ContainerProps = {
  children: React.ReactNode
}

export function Container({children}: ContainerProps) {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            {children}
        </div>
    </div>
  )
}