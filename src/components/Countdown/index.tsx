import styles from './style.module.scss'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'  

export function Countdown() {
    const {state} = useTaskContext()
    
  return (
    <div className={styles.countdown}>
     <span> {state.formattedSecondsRemaining} </span>
     
    </div>
  )
}
