import { Trash } from 'phosphor-react'
import { ITask } from './ITask'
import styles from './Task.module.css'

interface TaskProps {
    task: ITask
}

export function Task({ task }: TaskProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.task}>
                <input type="checkbox" name="task" checked={task.isDone} />
                <label htmlFor="task">{task.label}</label>
            </div>
            <Trash className={styles.trash} size={24} />
        </div>
    )
}