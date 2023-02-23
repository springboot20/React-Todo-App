import React from "react";
import Lists from "./Lists";
import './lists.css'

function TodoList({ todos, setTodos, handleEdit }) {
	return (
		<React.Fragment>
			<ol>
				<Lists todos={todos} setTodos={setTodos} handleEdit={handleEdit} />
			</ol>
		</React.Fragment>
	);
}

export default TodoList;
