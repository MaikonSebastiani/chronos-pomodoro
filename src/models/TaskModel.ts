import type { TaskStateModel } from "./taskStateModel"

export type Taskmodel = {
  id: string
  name: string
  duration: number
  starDate: number
  completeDate: number | null
  interruptDate: number | null
  type: keyof TaskStateModel['config']
}