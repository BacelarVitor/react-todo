import { Task } from './Task'
import styles from './TodoList.module.css'

export function TodoList() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>    
                <p>Tarefas criadas <span>0</span></p>
                <p>Concluídas <span>0</span></p>
            </div>
            <div className={styles.tasks}>
                <Task />
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