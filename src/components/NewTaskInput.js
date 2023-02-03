import React from 'react';


import './NewTaskInput.css';

const NewTaskInput = (props) => {

	const createTask = (e) => {


		if(e.keyCode === 13){ 
			if(e.target.value == ''){
				e.target.classList.add('empty__input__error')
				return
			}else{
				const task = {
					"id": Math.random(),
					"name": e.target.value,
					"status": 'Progress'
				}
			
				props.addNewTaskData(task)
			}
			
		}
	}

	return(
		<div className="add">
	    <div className="add__priority">
	      <label className="add__radio" title="Priority 0">
	        <input type="radio" name="priority" />
	        <span className="add__circle"></span>
	      </label>
	      <label className="add__radio add__radio--1" title="Priority 1">
	        <input type="radio" name="priority" />
	        <span className="add__circle"></span>
	      </label>
	      <label className="add__radio add__radio--2" title="Priority 2">
	        <input type="radio" name="priority" />
	        <span className="add__circle"></span>
	      </label>
	      <label className="add__radio add__radio--3" title="Priority 3">
	        <input type="radio" name="priority" />
	        <span className="add__circle"></span>
	      </label>
	    </div>
	    <input placeholder="+ Add todo item" type="text" className="add__input" onKeyUp={createTask}/>
	    <small>Press enter to add.</small>
	  </div>
	)
}

export default NewTaskInput;