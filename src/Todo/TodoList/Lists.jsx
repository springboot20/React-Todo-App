import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons'

function Lists({ todos, setTodos }) {
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
					<span className={`todo-name ${completed ? "checked" : ""}`}>{todo}</span>
					<div className="action">
						<button
							onClick={() => handleDelete(id)}
						>
							<FontAwesomeIcon icon={faTrashCan} className="delete-icon" />
						</button>
						<button
							onClick={() => handleCheck(id)}
						>
							<FontAwesomeIcon icon={faCheck} className="check-icon" />
						</button>
					</div>
				</li>
			))}
		</React.Fragment >
	);
}

export default Lists;
