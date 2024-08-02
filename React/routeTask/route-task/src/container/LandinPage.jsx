import React, { useState } from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import '../LandingPage.css';
const LandingPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='container'>
            <div>
                <div className="box">
                    <div style={{ display: 'flex' }}>
                        <div className={isLoggedIn ? 'underline' : ''}>
                            <button onClick={() => setIsLoggedIn(true)} >Login</button>
                        </div>
                        <div className={!isLoggedIn ? 'underline' : ''}>
                            <button onClick={() => setIsLoggedIn(false)} >Signup</button>
                        </div>
                    </div>
                    <div>
                        {isLoggedIn ? <Login /> : <Signup />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage