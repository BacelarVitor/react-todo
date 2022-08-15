import { ITask } from './ITask';
import { Task } from './Task'
import styles from './TodoList.module.css'

interface TodoListProps {
    tasks: ITask[],
    handleCheckTask: (taskId: number) => void; 
}

export function TodoList({ tasks, handleCheckTask }: TodoListProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>    
                <p>Tarefas criadas <span>{tasks.length}</span></p>
                <p>Concluídas <span>{tasks.filter(t => t.isDone)?.length + ' de ' + tasks.length}</span></p>
            </div>
            <div className={styles.tasks}>
                {tasks.map(task => {
                    return <Task task={task} key={task.id} onCheckTask={handleCheckTask} />
                })}
            </div>
            {/*
                <div className={styles.empty}>
                    <span>
                        Você ainda não tem tarefas cadastradas
                    </span>
                    <span>
                        Crie tarefas e organize seus itens a fazer
                    </span>
                </div>
            */}
        </div>
    )
}