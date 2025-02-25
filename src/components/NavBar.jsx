import { Link, Routes, Route } from "react-router-dom"


const NavBar = () => {
    return (
        <nav>
            <ul>
            <Link to='/'>Home</Link>
            <Link to='/mailboxes'>Mailboxes</Link>
            <Link to='/mailboxes/new'>Add Mailbox</Link>
            </ul>
        </nav>
    )
}

export default NavBar