import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {loading && <p>Loding...</p>}
                    <button className='form-submit' type="submit">Login</button>
                </form>
                <div className='form-new-to-ema-john'>
                    <p>New to Ema-Jogn? <Link className='form-link' to='/signup'>Create New Account</Link></p>
                </div>

                <div className='form-divider-group'>
                    <p className='form-divider'></p>
                    <p className='form-divider-or'>or</p>
                    <p className='form-divider'></p>
                </div>
                <button className='google-btn'>
                    <div className='google-img-txt-group'>
                        <img className='google-logo' src='/images/google.png' alt='' />
                        <p className='google-text'>Continue with Google</p>
                    </div>
                </button>

            </div >
        </div >
    );
};

export default Login;