import { CheckCircle, Circle, Trash } from 'phosphor-react'
import React from 'react'
import { ITask } from './ITask'
import styles from './Task.module.css'

interface TaskProps {
    task: ITask,
    onCheckTask: (taskId: number) => void;
    onDeleteTask: (taskId: number) => void;
}

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
    function handleTaskStatusChange() {
        onCheckTask(task.id); 
    }
    
    function handleDeleteTask() {
        onDeleteTask(task.id); 
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.task}>
                <label>
                    <input type="checkbox" name="task" checked={task.isDone} onChange={handleTaskStatusChange}/>
                    {task.isDone ? <CheckCircle className={styles.checkIcon} size={24} /> : <Circle className={styles.checkIcon} size={24}/> }
                    <span className={styles.labelText}> {task.label}</span>
                </label>
            </div>
            <button onClick={handleDeleteTask}>
                <Trash className={styles.trash} size={24} />
            </button>
        </div>
    )
}