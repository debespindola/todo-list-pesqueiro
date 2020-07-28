import React, { useState, useEffect } from 'react';
import './App.css';
import Logo from './images/pesqueiro.jpg';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const tasksDB = [
    {
      task: 'fazer pgto',
      id: 1,
    },
    {
      task: 'comprar salmão',
      id: 2,
    },
    {
      task: 'ligar para Haikko',
      id: 3,
    },
  ];

  useEffect(() => {
    setTasks(tasksDB);
  }, []);

  const createTask = (event) => {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        task: inputValue,
        id: Math.floor(Math.random()*10000),
      }
    ]);

    setInputValue('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <header className="header-logo">
        <h1></h1>
        <img className="logo" src={Logo} alt=""/>
      </header>

      <section className="input-section">
        <form className="to-do-container" onSubmit={createTask}>
          <input 
            className="to-do-input" 
            type="text" 
            placeholder="TAREFA" 
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            />
          </form>
      </section>

      <section className="tasks-checklist">
        <ul className="task-list">
          {tasks.map((task) => 
            <div className="task-item" key={task.id}>
              <li 
                className="task-text" 
                >{task.task.toUpperCase()}
              </li>

              <button className="task-completed-button" onClick={() => deleteTask(task.id)}> &#10003; </button>
            </div>
          )}
        </ul>
      </section>
    </div>
  );
}

export default App;
