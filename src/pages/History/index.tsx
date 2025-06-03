import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { MainTemplate } from '../../templates/MainTemplate';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { useEffect, useState } from 'react';
import { showMessage } from '../../adapters/showMessage';



import styles from './style.module.scss'
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions'

export function History() {
  const {state, dispatch} = useTaskContext(); 
  const [confirmClearHistory, setConfirmClearHistory] = useState(false)


  const hasTasks = state.tasks.length > 0;
  
  const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc'

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    })
  }

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm('Tem certeza?', confirmation => {
      setConfirmClearHistory(confirmation)
    })
  }

  useEffect(() => {
    setSortTaskOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({ 
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks])

  useEffect(() => {
    if (!confirmClearHistory) return

    setConfirmClearHistory(false)

    dispatch({ type: TaskActionTypes.RESET_STATE })
  }, [confirmClearHistory, dispatch])

  useEffect(() => {
    document.title = 'Histórico - Chronos Pomodoro'
    return () => {
      showMessage.dismiss()
    }
  }, [])

  return (
    <MainTemplate>
      <Container>
        <h1 className={styles.heading}>
          <span>History</span>
          <span className={styles.buttonContainer}>
            {hasTasks && (
              <DefaultButton
                icon={<TrashIcon />}
                color='red'
                aria-label='Apagar todo o histórico'
                title='Apagar histórico'
                onClick={handleResetHistory}
              />
            )}
          </span>
        </h1>
      </Container>

      <Container>
        {hasTasks && (
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                   <th
                  onClick={() => handleSortTasks({ field: 'name' })}
                  className={styles.thSort}
                >
                  Tarefa ↕
                </th>
                <th
                  onClick={() => handleSortTasks({ field: 'duration' })}
                  className={styles.thSort}
                >
                  Duração ↕
                </th>
                <th
                  onClick={() => handleSortTasks({ field: 'startDate' })}
                  className={styles.thSort}
                >
                  Data ↕
                </th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
            {sortTasksOptions.tasks.map(task => {
              const tastTypeDictionary = {
                workTime: 'Foco',
                shortBreakTime: 'Descanso curto',
                longBreakTime: 'Descanso longo',
              }

                return (
                  <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.duration}min</td>
                  <td>{formatDate(task.startDate)}</td>
                  <td>{getTaskStatus(task, state.activeTask)}</td>
                  <td>{tastTypeDictionary[task.type]}</td>
                </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        )}
        {!hasTasks && (
          <div className={styles.emptyHistory}>
            <p>Nenhuma tarefa encontrada</p>
          </div>
        )}
      </Container>
    </MainTemplate>
  );
}