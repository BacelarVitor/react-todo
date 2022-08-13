import { Header } from './Header';
import { Input } from './Input';
import styles from './App.module.css';
import './global.css'
import { TodoList } from './TodoList';

function App() {

  return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <Input />
          <TodoList />
        </div>
      </>
  )
}

export default App
