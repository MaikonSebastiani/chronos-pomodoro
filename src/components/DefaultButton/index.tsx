import styles from './style.module.scss'

type DefaultButtonProps = {
  icon: React.ReactNode
  color?: 'green' | 'red'
} & React.ComponentProps<'button'>

export function DefaultButton({ icon, color = 'green', ...props }: DefaultButtonProps) {
  return (

    <button className={`${styles.button} ${styles[color]}`} {...props} >
      {icon}
    </button>

  )
}