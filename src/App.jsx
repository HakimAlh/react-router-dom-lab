import { useState } from 'react';
import './App.css'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import NavBar from './components/NavBar'
import { Link, Routes, Route } from "react-router-dom"

import { BrowserRouter } from 'react-router-dom'



// src/App.jsx
const initialState = [
  { _id: 1, boxholder: 'Micheal', boxsize: 25},
  { _id: 2, boxholder: 'Bob', boxsize: 30},
  { _id: 3, boxholder: 'Mark', boxsize: 63},
  
  
]



const App = () => {
  return (
    <>
    <NavBar />
    <MailboxList />
    </>
 
  )
};


export default App;