import { Link, Routes, Route } from "react-router-dom";

const MailboxList = (props) => {
    console.log('prop!: ', props)
	return (
		<>
			<h2>Post Office:</h2>
			<ul>
				{props.mailbox.map((mail) => (
					<li key={mail.boxholder}>
						<Link to={`/mailboxes/${mail._id}`}>{mail.boxholder}</Link>
					</li>
				))}
			</ul>
		</>
	);
};
export default MailboxList;
