import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { DefaultInput } from "../../components/DefaultInput";
import { DefaultButton } from "../../components/DefaultButton";
import { SaveIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
  const { state, dispatch } = useTaskContext()

  const workTimeInputRef = useRef<HTMLInputElement>(null)
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null)
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null)

  function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    showMessage.dismiss()

    const workTime = Number(workTimeInputRef.current?.value)
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value)
    const longBreakTime = Number(longBreakTimeInputRef.current?.value)

    if(isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      showMessage.error('Digite apenas números para todos os campos')
      return
    }

    if(workTime < 1 || workTime > 99) {
      showMessage.error('Digite um valorentre 1 e 99 para Foco')
      return
    }

    if(shortBreakTime < 1 || shortBreakTime > 30) {
      showMessage.error('Digite um valorentre 1 e 30 para Descanso Curto')
      return
    }

    if(longBreakTime < 1 || longBreakTime > 60) {
      showMessage.error('Digite um valorentre 1 e 60 para Descanso Longo')
      return
    }
    
    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: { workTime, shortBreakTime, longBreakTime },
    })
    showMessage.success('Configurações salvas com sucesso')
  }

  useEffect(() => {
    document.title = 'Configurações - Chronos Pomodoro'
  }, [])
  
  return (
    <MainTemplate>
       <Container>
        <h1 style={{textAlign: 'center'}}>Configurações</h1>
        <p>Modifique as configurações do seu pomodoro</p>

        <form onSubmit={handleSaveSettings}>
          <div className="formRow">
            <DefaultInput
              id="workTime"
              label="Foco"
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              label="Descanso Curto"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              label="Descanso Longo"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
              type="number"
            />
          </div>
          <div className="formRow">
            <DefaultButton icon={<SaveIcon />} color="green" aria-label="Salvar configurações" title="Salvar configurações">Salvar</DefaultButton>
          </div>
        </form>
       </Container>
    </MainTemplate>
  )
}

function useAppContext(): { state: any; } {
  throw new Error("Function not implemented.");
}
