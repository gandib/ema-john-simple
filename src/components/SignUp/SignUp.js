import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two password didn't match!")
        }
        if (password.length < 6) {
            setError("Password must be 6 characters or longer");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <button className='form-submit' type="submit">Sign Up</button>
                </form>
                <div className='form-new-to-ema-john'>
                    <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
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

export default SignUp;