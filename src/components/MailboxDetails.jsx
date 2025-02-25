import { useParams } from "react-router-dom";	
import NavBar from '../components/NavBar'
import { Link, Routes, Route } from "react-router-dom"
import MailboxList from '../components/MailboxList'
import App from '../App'

const MailboxDetails = (props) => {
	const { mailboxesId } = useParams();

	const singleMailbox = props.mailbox.find(
		(mail) => mail._id === Number(mailboxesId)
	);
	console.log("Yes: ", singleMailbox);
	return (
		<>
			<h2>Mailbox Detail</h2>
			<hr />
		

			

		</>
	);
};

export default MailboxDetails;
