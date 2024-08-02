import React, { useState } from 'react'
import Login from '../component/Login'
import Signup from '../component/signup'
import '../LandingPage.css';
const LandingPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [toggle, setToggle] = useState('light');

    const handleLightDarkMode = () => {
        if (toggle === 'light') {
            setToggle('dark');
        }
        else {
            setToggle('light');
        }
    }
// react-router-dom
    return (
        <div className={toggle === 'light' ? 'light' : 'dark'}>
            <div className='container'>
                <nav className='navbar'>
                    <div>
                        <a href="LandingPage.jsx">Landing Page</a>
                    </div>

                    <div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" onClick={handleLightDarkMode} />
                        </label>
                    </div>
                </nav>

                <div>
                    <div className="box">
                        <div style={{display:'flex'}}>
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
        </div>
    )
}

export default LandingPage