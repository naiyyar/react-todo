import {React, useState, useEffect} from 'react';
import './App.css';
import Tasks from './components/Tasks';
import Nav from './components/Nav';
import NewTaskInput from './components/NewTaskInput';

const App = () => {
  let tasksList = [];

  const [tasks, setTasks] = useState(tasksList);

  useEffect(()=>{ loadTasks()}, []);

  const addNewTask = (task) => {
    setTasks([task, ...tasks])
  }

  const activeTasks = () => {
    loadTasks('in_progress');
  }

  const completedTasks = () => {
    loadTasks('completed');
  }
  const listAll = () => {
    loadTasks();
  }

  const loadTasks = (status='all') => {    
    fetch(`http://localhost:3001/api/v1/tasks?status=${status}`)
      .then(res => res.json())
      .then(data => {
        setTasks(data)
      });
  }
  
  return(
    <main className='App'>
      <Nav completedTasksData={completedTasks} activeTasksData={activeTasks} listAllData={listAll}/>
      <NewTaskInput addNewTaskData={addNewTask}/>
      <Tasks tasks={tasks} />
    </main>
  )
}

export default App;