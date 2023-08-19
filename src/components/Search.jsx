import {React, useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/search/' + input)
    }

    return (
    <form onSubmit={submitHandler} className="search_container">
        <FaSearch className='search_icon'/>
        <input type="text" value={input} onChange={handleChange}/>
    </form>
    )
}

export default Search
