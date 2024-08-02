import React from 'react'
import '../LandingPage.css'
const Login = () => {
    return (
        <>
            <div className="login-container">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className='btn'>
                   <button type='button'>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login