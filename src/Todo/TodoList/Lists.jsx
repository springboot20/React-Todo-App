import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/fontawesome-free-regular'

function Lists({ todos, setTodos, handleEdit }) {
	const handleDelete = (id) => {
		let newTodo = todos.filter((todo) => {
			console.log(todo);
			return todo.id !== id;
		});
		setTodos([...newTodo]);
	};

	const handleCheck = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			})
		);
	};

	return (
		<React.Fragment>
			{todos.map(({ id, todo, completed }) => (
				<li key={id} className="todo">
					<div className='todos'>
						<input
							type="checkbox"
							onChange={() => handleCheck(id)}
							id='check-btn'
						/>
						<span
							className={`todo-name ${completed ? "checked" : ""}`}
						>
							{todo}
						</span>
					</div>
					<div className="action">
						<button
							onClick={() => handleEdit(id)}
						>
							<FontAwesomeIcon icon={faEdit} className='edit-icon' />
						</button>
						<button
							onClick={() => handleDelete(id)}
						>
							<FontAwesomeIcon icon={faTrashAlt} className="delete-icon" />
						</button>
					</div>
				</li>
			))}
		</React.Fragment >
	);
}

export default Lists;
