import React, { useState } from 'react'

import useGithub from '../../../hooks/github-hooks'

import './header.scss'

const Header = () => {
    const [ username, setUsername ] = useState("")

    const { getUser } = useGithub()
    const submitGetUser = (e) => {
        getUser(username)
        setUsername("")
        e.preventDefault()
    }
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    return (
        <form className="header">
            <input type="text"
                placeholder='Digite o nome do maluco'
                value={username}
                onChange={handleUsername}
                />
            <button
                onClick={submitGetUser}
                >
                buscar
            </button>
        </form>
    )
}

export default Header