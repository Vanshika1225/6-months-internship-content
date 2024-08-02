import React, { useContext, useReducer } from 'react';
import '../LandingPage.css';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../App';

const Login = () => {

    const { state, setState } = useContext(GlobalContext);

    const navigate = useNavigate();

    function handleNavigation() {
        const { email, password } = state;
        setState({ type: 'login', email, password })
        navigate('/UserDetails');
    }

    const handleEmailChange = (e) => {
        setState({ ...state, email: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setState({ ...state, password: e.target.value });
    };

    return (
        <div className="login-container">
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={state.email} onChange={handleEmailChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={state.password} onChange={handlePasswordChange} />
            </div>
            <div className='btn'>
                <button type='button' onClick={handleNavigation}>Login</button>
            </div>
        </div>
    );
};

export default Login;
