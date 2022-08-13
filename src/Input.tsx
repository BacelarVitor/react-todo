import styles from './Input.module.css'

import { PlusCircle } from 'phosphor-react'

export function Input() {
    return (
        <form className={styles.form}>
            <input 
                className={styles.input} 
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