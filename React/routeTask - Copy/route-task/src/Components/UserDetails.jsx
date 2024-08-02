import React, { useContext } from 'react';
import { GlobalContext } from '../App';
import '../LandingPage.css';
const UserDetails = () => {
    const context = useContext(GlobalContext);

    const { state } = context;

    if (!state) {
        return <div>No data found</div>;
    }

    const { email, password } = state;

    return (
        <div>
            <h2>Login Details</h2>
            {
                (email !== '' && password !== '') ? <>
                    <table className='table' style={{border:'2px solid black'}}>
                        <thead>
                          <tr>
                              <td style={{border:'2px solid black'}}>Email</td>
                            <td style={{border:'2px solid black'}}>Password</td>
                          </tr>
                        </thead>
                        <tbody>
                           <tr>
                           <td style={{border:'2px solid black'}}>{email}</td>
                            <td style={{border:'2px solid black'}}>{password}</td>
                           </tr>
                        </tbody>
                    </table>
                </>
                    : 'Passwor and email is empty'
            }
        </div>
    )
}

export default UserDetails;
