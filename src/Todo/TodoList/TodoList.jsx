import React from "react";
import Lists from "./Lists";
import './lists.css'

function TodoList({ todos, setTodos }) {
	return (
		<React.Fragment>
			<ol>
				<Lists todos={todos} setTodos={setTodos} />
			</ol>
		</React.Fragment>
	);
}

export default TodoList;
