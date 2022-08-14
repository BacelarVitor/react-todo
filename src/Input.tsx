import styles from './Input.module.css'

import { PlusCircle } from 'phosphor-react'
import { FormEventHandler } from 'react';

interface InputProps {
    onCreateTask: () => string;
}

export function Input({ onCreateTask }: InputProps) {
    function createTask(event: FormEventHandler<HTMLElement>) {
        event.preventDefault();

        console.log(event);
    }

    return (
        <form onSubmit={createTask} className={styles.form}>
            <input 
                className={styles.input} 
                required
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