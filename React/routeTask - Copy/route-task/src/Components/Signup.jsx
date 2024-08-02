import React from 'react'
import '../LandingPage.css'
const signup = () => {
    return (
        <div>
            <div className="signup-container">
                <div>
                    <label htmlFor="email">Username</label>
                    <input type="teext" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className='btn'>
                    <button type='button'>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default signup