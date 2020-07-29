import React, { useState, useEffect } from 'react';
import LogoImg from './images/pesqueiro.jpg';

import {
  Container,
  Header,
  Logo,
  Section,
  Form,
  Input,
  CreateButton,
  CompletedButton,
  List,
  Task,
  Item,
} from './style';

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
    <Container>
      <Header>
        <Logo src={LogoImg} alt=""/>
      </Header>

      <Section>
        <Form onSubmit={createTask}>
          <Input 
            type="text" 
            placeholder="TAREFA" 
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            />
            <CreateButton type="Submit"> &#10010; </CreateButton>
          </Form>
      </Section>

      <Section>
        <List>
          {tasks.map((task) => 
            <Task key={task.id}>
              <Item> {task.task.toUpperCase()} </Item>

              <CompletedButton onClick={() => deleteTask(task.id)}> &#10003; </CompletedButton>
            </Task>
          )}
        </List>
      </Section>
    </Container>
  );
}

export default App;
