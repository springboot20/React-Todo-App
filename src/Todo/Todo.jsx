import React, { useState, useEffect } from "react";
import TodoInput from "./Input/TodoInput";
import TodoList from "./TodoList/TodoList";
import todoImage from './todo.png'
import './Todo.css'

const getLocalItem = () => {
	if (localStorage.getItem("todos") === null) {
		return localStorage.setItem("todos", JSON.stringify([]));
	} else {
		return JSON.parse(localStorage.getItem("todos"));
	}
}

function Todo() {
	const [todos, setTodos] = useState(getLocalItem());
	const [todoItem, setTodoItem] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (todoItem) {
			setError(false);
			let uniqueId =
				new Date().getTime().toString(36) + new Date().getUTCMilliseconds();

			const newTodoItem = {
				id: uniqueId,
				todo: todoItem,
				completed: false
			};

			setTodos([...todos, newTodoItem]);
			setTodoItem("");
		} else {
			setError(true);
			generateMsg('Please enter a todo to add ......')
			setTimeout(() => {
				document.querySelector('.error-container').remove()
			}, 3000)
			setTodoItem("");
		}
	};

	const generateMsg = (msg) => {
		const msgContainer = document.createElement('div');
		const imageContainer = document.querySelector('.image-container');
		const todoContainer = document.querySelector('.todo-container')
		const message = document.createElement('p');

		msgContainer.className = 'error-container'
		message.className = 'error-text'

		message.append(document.createTextNode(`${msg}`))
		msgContainer.appendChild(message)

		todoContainer.insertBefore(msgContainer, imageContainer)
	}

	useEffect(() => {
		const addError = setTimeout(() => {
			setError(false);
		}, 2000);

		return () => {
			clearTimeout(addError);
		};
	}, [error]);

	useEffect(() => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			localStorage.setItem("todos", JSON.stringify(todos));
		}
		console.log(todos);
	}, [todos]);

	return (
		<div className="todo-container">

			{/* Todo Form  */}

			<div className="image-container">
				<img
					src={todoImage}
					alt="todo-img"
					className='todo-image'
				/>
			</div>
			<div className="form-container">
				<h2 className="todo-title">✌ Add Your todo here...✌</h2>
				<form onSubmit={handleSubmit}>
					<TodoInput
						todoItem={todoItem}
						handleChange={(e) => { setTodoItem(e.target.value) }}
						error={error}
					/>
				</form>
			</div>

			{/* Display container For Todos */}

			<div className="todoList-container">
				<div className="row">
					<TodoList todos={todos} setTodos={setTodos} />
				</div>
			</div>
		</div>
	);
}

export default Todo;