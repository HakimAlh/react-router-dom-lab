import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Link, Routes, Route } from "react-router-dom";
import MailboxList from "../components/MailboxList";
import App from "../App";

const MailboxDetails = (props) => {
	const { mailboxesId } = useParams();

	const singleMailbox = props.mailbox.find(
		(mail) => mail._id === Number(mailboxesId)
	);
	console.log("Yes: ", props);
	return (
		<>
			<h2>Mailbox Detail</h2>
			<hr />
			<p><strong>Box Holder:</strong> {singleMailbox.boxholder}</p>
			<p><strong>Box Size:</strong> {singleMailbox.boxsize} KG</p>

			
		</>
	);
};

export default MailboxDetails;
