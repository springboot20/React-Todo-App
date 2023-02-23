import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/fontawesome-free-regular'

function AddButton() {
	return (
		<React.Fragment>
			<button
				type="submit"
				className="todo-btn"
			>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</React.Fragment>
	);
}

const SaveButton = () => {
	return (
		<React.Fragment>
			<button
				type="submit"
				className="save-todo-btn"
			>
				<FontAwesomeIcon icon={faSave} />
			</button>
		</React.Fragment>
	);
}

const ResetButton = ({ children, handleClearTodoList }) => {
	return (
		<React.Fragment>
			<input
				type='button'
				value={children}
				className='reset-todo-btn'
				onClick={handleClearTodoList}
			/>
		</React.Fragment>
	);
}


export default AddButton;
export { SaveButton, ResetButton }
