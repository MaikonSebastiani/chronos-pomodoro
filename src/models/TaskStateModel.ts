import type { Taskmodel } from "./TaskModel"

export type TaskStateModel = {
  tasks: Taskmodel[]
  secondRemaining: number
  formattedSecondsRemaining: string
  activeTask: Taskmodel | null
  currentCycle: number
  config: {
    workTime: number
    shortBreaktime: number
    longBreakTime: number
  }
}