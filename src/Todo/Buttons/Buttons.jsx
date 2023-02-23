import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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

export default AddButton;
