import {React, useState, useEffect} from 'react';
import './App.css';
import Tasks from './components/Tasks';
import Nav from './components/Nav';
import NewTaskInput from './components/NewTaskInput';

const App = () => {
  const tasksList = [{
      "id": 1,
      "name":"HTML I",
      "status":'Progress'
    },{
      "id": 2,
      "name":"CSS",
      "status":'Completed'
    },{
      "id": 3,
      "name":"Responsive design",
      "status":'Hold'
    },{
      "id": 4,
      "name":"Git",
      "status":'Progress'
    }
  ]

  const [tasks, setTasks] = useState(tasksList);

  // useEffect(()=>{
  //   fetch('https://dummyjson.com/todos')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setTasks(data.todos)
  //     });
  // }, []);

  const addNewTask = (task) => {
    setTasks([task, ...tasks])
  }

  const activeTasks = () => {
    const activeTasks = tasksList.filter(task => task.status !== 'Completed')
    setTasks(activeTasks)
  }

  const completedTasks = () => {
    const completedTasks = tasksList.filter(task => task.status === 'Completed')
    setTasks(completedTasks)
  }
  const listAll = () => {
    setTasks(tasksList)
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