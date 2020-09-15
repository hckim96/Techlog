import React from 'react'
import { Link } from 'react-router-dom'
import { signupPage } from './signupPage'

export const Home = () => {
    return (
        <div>
            this is Home
            <Link to = "/signup">signup!</Link>
        </div>
    )
}
