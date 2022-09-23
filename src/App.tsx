import styles from "./App.module.css";
import { Trash } from "phosphor-react";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function handleSubmitToDo() {
    console.log('')
  }

  return (
    <div className={styles.appContainer}>
      <Header />
      <form onSubmit={handleSubmitToDo}>
        <input type="text" /><button type="submit">Criar</button>
      </form>

      <div className={styles.tableContainer}>
        <div>
          <span>Tarefas Criadas 0</span>
          <span>Concluidas</span>
        </div>
        <table>
          <thead>
            <tr>
              <td><input type="radio" /></td>
              <td>Titulo da tarefa</td>
              <td><button><Trash /></button></td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default App
