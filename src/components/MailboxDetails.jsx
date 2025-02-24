import { useParams } from "react-router-dom"


const MailboxDetails = (props) => {

    const { mailboxId } = useParams()

    const singleMailbox = props.mailbox.find((mail) => (
    mail._id === Number(mailboxId)
    ))
    console.log('Yes: ', singleMailbox)
    return (
        <>
        <h2>Mailbox Detail</h2>
        <hr />
       
        </>
    )
}

export default MailboxDetails