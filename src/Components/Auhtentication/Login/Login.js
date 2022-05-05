import { async } from '@firebase/util';
import axios from 'axios';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../hooks/useToken';
import Social from '../Social/Social';
import './Login.css'
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken();
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const password = event.target.password.value;
        const email = event.target.email.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post(' https://shielded-brook-58570.herokuapp.com/login', { email });
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken)

    }

    const resetPassword = async (event) => {
        console.log('click')
        const email = emailRef.current.value;;
        console.log(email)
        if (email) {
            sendPasswordResetEmail(email);
            alert('send email')
        }
        else {
            alert('please enter valid email')
        }
    }
    return (
        <div className=' form-box mx-auto '>
            <h1 className='text-danger text-center fs-3 fw-bold mt-5 '>LOGIN YOUR ACCOUNT</h1>
            <div className='line w-50 text-center mx-auto bg-danger mb-5'></div>
            <form action=""  className='form-info ' onSubmit={handleLogin}>
                <label for="html">Email Address</label> <br />
                <input type="email" ref={emailRef} name="email" placeholder='Email' id="EMAIL" /> <br />
                <label for="html">Password</label> <br />
                <input type="password" name="password" placeholder='password' id="PASSWORD" /> <br />
                <input className='button btn-danger ' type="submit" value="Log In" />
            </form>
            <p className='paragraph '>New to Car Delarship?<Link to='/register'>Create An Account</Link></p>
            <p className='paragraph' >Forgot Password?  <span onClick={resetPassword}>Reset Password</span></p>
            <p className=' paragraph text-danger'>{error?.message || error1?.message}</p>

            <Social></Social>
        </div>
    );
};

export default Login;