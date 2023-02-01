import {React, useState} from 'react';


import './Nav.css';

const Nav = (props) => {

	const listActive = (e) => {
		e.preventDefault();
		setActiveNav(e.target)
		props.activeTasksData()
	}

	const listcompleted = (e) => {
		e.preventDefault();
		setActiveNav(e.target)
		props.completedTasksData()
	}

	const listAll = (e) => {
		e.preventDefault();
		setActiveNav(e.target)
		props.listAllData();
	}

	const setActiveNav = (target) => {
		const nav_items = target.parentElement.children;
		for(let i = 0; i < nav_items.length; i++){
			nav_items[i].classList.remove('active')
		}
		target.classList.add('active');
	}

	return(
		<nav className="nav">
	    <a href="/#" className="nav__item active" onClick={listAll}>All</a>
	    <a href="/#" className="nav__item" onClick={listActive}>Active</a>
	    <a href="/#" className="nav__item" onClick={listcompleted}>Complete</a>
	  </nav>
	)
}

export default Nav;