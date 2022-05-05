import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../hooks/useToken';

const Social = () => {
    // const[user]=useAuthState(auth);
    const navigate=useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const[token]=useToken(user);
    const handleGoogle =()=> {
        signInWithGoogle();
    }
    if( user){
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='line bg-danger w-50 '></div>
                <p className='mt-2 ms-2 me-2 '>or</p>
                <div className='line bg-danger w-50 '></div>
            </div>

             <button onClick={handleGoogle} className='btn btn-danger'>Continue With Google</button>
            
        </div>
    );
};

export default Social;