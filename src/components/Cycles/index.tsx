import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './style.module.scss'

export function Cycles() {
  const {state} = useTaskContext()

  const cyclesSteps = Array.from({length: state.currentCycle})

  const cycleDescription = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo'
  }
  
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cyclesSteps.map((_, index) => {
           const nextCycle = getNextCycle(index)
           const nextCycleType = getNextCycleType(nextCycle)
           
           return (
            <span key={nextCycle} className={`${styles.cycleDot} ${styles[nextCycleType]}`} 
            aria-label={`Indicador de ciclo de ${cycleDescription[nextCycleType]}`}
            title={`Indicador de ciclo de ${cycleDescription[nextCycleType]}`}></span>
           )
        })}
      </div>
    </div>
  )
}