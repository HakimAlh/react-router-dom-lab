import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link, Routes, Route } from "react-router-dom"


const MailboxForm = (props) => {

    const navigate = useNavigate()

    const initialState = {
        name: '',
        boxsize: 0,
    }

    const [formData, setFormData] = useState(initialState)
    
    const [mailbox, setMailbox] = useState (initialState)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addMailbox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <label for="">Box Holder:  </label>
        <input 
        type="text" 
        onChange={handleChange}
        value={formData.name}
        name="boxholder"
        />
         <label for="">Box Size:  </label>
        <input 
        type="number" 
        onChange={handleChange}
        value={formData.weight}
         name="boxsize"
        />
        <button>Add Mailbox</button>
        </form>
        </>
    )
}

export default MailboxForm