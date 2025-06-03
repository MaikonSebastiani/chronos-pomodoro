import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"

export default function Tips() {
  const {state} = useTaskContext()

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

    const tipsForWhenActiveTask = {
      workTime: <p>Foque por {state.config.workTime} minutos</p>,
      shortBreakTime: <p>Descanse por {state.config.shortBreakTime} minutos</p>,
      longBreakTime: <p>Descanse por {state.config.longBreakTime  } minutos</p>
    }
  
    const tipsForNotActiveTask = {
      workTime: <p>Proximo Ciclo é de {state.config.workTime} minutos</p>,
      shortBreakTime: <p>Descanso curto de {state.config.shortBreakTime} minutos</p>,
      longBreakTime: <p>Descanso longo de {state.config.longBreakTime  } minutos</p>
    }

  return (
    <>
     {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
     {!state.activeTask && tipsForNotActiveTask[nextCycleType]}
    </>
  )
}