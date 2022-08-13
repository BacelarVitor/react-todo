import { Header } from './Header';
import { Input } from './Input';
import styles from './App.module.css';
import './global.css'

function App() {

  return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <Input />
        </div>
      </>
  )
}

export default App
