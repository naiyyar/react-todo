import React from 'react';
import Task from './Task';

import './Tasks.css';


const Tasks = (props) => {
	console.log(props.tasks)
	const tasksList = props.tasks.map((task) =>
    <Task task={task} key={task.id.toString()} />
  );
	
	return(
		<ul className='list'>
			{tasksList}
		</ul>
	)
}

export default Tasks;