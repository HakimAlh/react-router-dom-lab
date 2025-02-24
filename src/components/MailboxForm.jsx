import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link, Routes, Route } from "react-router-dom"


const MailboxForm = (props) => {

    const navigate = useNavigate()

    const initialState = {
        name: '',
        weight: 0,
        height: 0,
    }

    const [formData, setFormData] = useState(initialState)

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
        <label for="">Name:  </label>
        <input 
        type="text" 
        onChange={handleChange}
        value={formData.name}
        name="name"
        />
         <label for="">Weight:  </label>
        <input 
        type="number" 
        onChange={handleChange}
        value={formData.weight}
         name="weight"
        />
          <label for="">Height:  </label>
        <input 
        type="number" 
        onChange={handleChange}
        value={formData.height}
         name="height"
        />
        <button>Add Mailbox</button>
        </form>
        </>
    )
}

export default MailboxForm