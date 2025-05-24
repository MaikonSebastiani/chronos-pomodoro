import styles from './style.module.scss'

type DefaultInputProps = {
  id: string
  label?: string
} & React.ComponentProps<'input'>

export function DefaultInput({ id, label, ...props }: DefaultInputProps) {
  return (
    <div className={styles.formRow}>
      {label && <label className={styles.label} htmlFor={id}>{label}</label>}
      <input className={styles.input} id={id} {...props} />
    </div>
  )
}