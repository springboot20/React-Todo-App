import React from "react";
import AddButton from '../Buttons/Buttons'
import './input.css'

function TodoInput({ todoItem, handleChange, error }) {
	return (
		<React.Fragment>
			<div className="form-group">
				<input
					type="text"
					value={todoItem}
					onChange={handleChange}
					placeholder="✍ Please enter a todo to add here...."
					className={`form-control ${error ? "bg-danger text-white" : ""}`}
				/>
				<AddButton></AddButton>
			</div>
		</React.Fragment>
	);
}

export default TodoInput;
