import { Header } from './Header';
import { Input } from './Input';
import styles from './App.module.css';
import './global.css'
import { TodoList } from './TodoList';
import { ITask } from './ITask';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      label: "Finish ignite challenge",
      isDone: false, 
    },
    {
      id: 2,
      label: "Cardio",
      isDone: false, 
    },
    {
      id: 3,
      label: "do the dishes",
      isDone: true, 
    },
    {
      id: 4,
      label: "watch anime",
      isDone: false, 
    },
    {
      id: 5,
      label: "play vavazin",
      isDone: false, 
    },
  ])

  function handleNewTask(task: string) {
    const newTask: ITask = { id: tasks.length + 1, label: task, isDone: false }

    setTasks([...tasks, newTask])
  }

  function checkTask(taskId: number) {
    const taskChecked = tasks.find(task => task.id === taskId);
    if(taskChecked) {
      taskChecked.isDone = !taskChecked.isDone
      setTasks([...tasks])
    }
  }
  function deleteTask(taskId: number) {
    const tasksUpdated = tasks.filter(task => task.id !== taskId)
    setTasks([...tasksUpdated])
  }

  return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <Input onCreateTask={handleNewTask} />
          <main>
            <TodoList tasks={tasks} handleCheckTask={checkTask} handleDeleteTask={deleteTask} />
          </main>
        </div>
      </>
  )
}

export default App
