import { Link, Routes, Route } from "react-router-dom"

const MailboxList = (props) => {
return (
    <>
    <h2>Mailboxes:</h2>
    <ul>
        {props.mailbox.map((mail) => (
        <li key={mail._id}>
            <Link to={`/mailboxes/${mail._id}`}>{mail.name}</Link>
            
            </li>        
        ))}
    </ul>
    </>
)
}
export default MailboxList
