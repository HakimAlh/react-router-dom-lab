import { useState } from 'react';
import './App.css'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import NavBar from './components/NavBar'
import { Link, Routes, Route } from "react-router-dom"

import { BrowserRouter } from 'react-router-dom'



const App = () => {

  
const initialState = [
  { _id: 1, boxholder: 'Micheal', boxsize: 'Medium'},
  { _id: 2, boxholder: 'Bob', boxsize: 'Large'},
  { _id: 3, boxholder: 'Mark', boxsize: 'Medium'},
  
  
]

const [mailbox, setMailbox] = useState(initialState)

const addMailbox = (newMailbox) => {
  newMailbox._id = mailbox.length + 1;
  setMailbox([...mailbox, newMailbox]);
};

  return (
    <>
    <NavBar />
    <Routes>
    <Route path={'/'} element={<h2>Hola Amigo this le home</h2>} /> 
    <Route path={'/mailboxes'} element={<MailboxList mailbox={mailbox} />} />
    <Route path={'/mailboxes/new'} element={<MailboxForm addMailbox={addMailbox} />} />
    <Route path={'/mailboxes/:mailboxesId'} element={<p>{<MailboxDetails mailbox={mailbox}/>}</p>} />
    <Route path={'*'} element={404} />
    </Routes>
    </>
    
 
  )
};


export default App;