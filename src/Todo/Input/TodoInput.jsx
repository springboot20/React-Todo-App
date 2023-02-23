import React from "react";
import AddButton, { SaveButton } from '../Buttons/Buttons'
import './input.css'

function TodoInput({ todoItem, handleChange, error, toggle }) {
	return (
		<React.Fragment>
			<div className="form-group">
				<input
					type="text"
					value={todoItem}
					onChange={handleChange}
					placeholder="✍ Please enter a todo to add here...."
					className={`form-control ${error ? "error" : ""}`}
				/>
				{toggle ? <AddButton /> : <SaveButton />}
			</div>
		</React.Fragment>
	);
}

export default TodoInput;
