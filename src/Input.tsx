import styles from './Input.module.css'

import { PlusCircle } from 'phosphor-react'
import React, {  useState } from 'react';

interface InputProps {
    onCreateTask: (task: string) => void;
}

export function Input({ onCreateTask }: InputProps) {
    const [newTask, setNewTaskText] = useState<string>('');


    function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onCreateTask(newTask);
        setNewTaskText('');
    }

    function handleNewTaskTextChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    } 

    return (
        <form onSubmit={handleCreateTask} className={styles.form}>
            <input 
                className={styles.input} 
                required
                value={newTask}
                onChange={handleNewTaskTextChange}
                placeholder="Adicione uma nova tarefa" />
            
            <button 
                type="submit" 
                className={styles.button}>
                    Criar 
                    <PlusCircle size={16} />
            </button>
        </form>
    )
}