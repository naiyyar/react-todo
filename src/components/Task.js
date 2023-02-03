import React from 'react';


import './Task.css';

const Task = (props) => {
	const task = props.task;
	
	return(
		<li className='item'>
			<label className="item__checkbox item__checkbox">
				<input type="checkbox" />
				<i className="fas fa-check"></i>
			</label>
			{task.title}
			<button className="item__delete"><i className="fas fa-trash-alt"></i></button>
		</li>
	)
}

export default Task;