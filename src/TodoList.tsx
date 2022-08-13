import { ClipboardText } from 'phosphor-react'
import styles from './TodoList.module.css'

export function TodoList() {
    return (
        <div className={styles.main}>
            <div className={styles.info}>    
                <p>Tarefas criadas <span>0</span></p>
                <p>Concluídas <span>0</span></p>
            </div>
            <main>
                <div>
                    <ClipboardText size={32} />
                </div> 
            </main>
        </div>
    )
}