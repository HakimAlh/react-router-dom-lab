import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";

const MailboxForm = (props) => {
	const navigate = useNavigate();

	const initialState = {
		boxholder: "",
		boxsize: 0,
	};

	const [formData, setFormData] = useState(initialState);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addMailbox(formData);
		setFormData(initialState);
		navigate("/mailboxes");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label for="">Box Holder: </label>
				<input
					type="text"
					onChange={handleChange}
					value={formData.name}
					name="boxholder"
				/>

                <label for="boxsize">Box Size:</label>
    <select name="boxsize" id="boxsize">
        <option value="Disabled" selected disabled>-</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
    </select>
				<button>Add Mailbox</button>
			</form>
		</>
	);
};

export default MailboxForm;
