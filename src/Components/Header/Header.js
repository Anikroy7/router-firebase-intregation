import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const Header = () => {

    // const { user, handelSignOut } = useFirebase();
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className='mt-4'>
            <Link className='text-xl mr-5 hover:text-orange-400' to={'/home'}>Home</Link>
            <Link className='text-xl mr-5 hover:text-orange-400' to={'/orders'}>Orders</Link>
            <Link className='text-xl mr-5 hover:text-orange-400' to={'/register'}>Register</Link>
            {
                user?.displayName && <span className='text-xl text-lime-900 font-bold mx-2'>{user.displayName}</span>
            }


            {
                user?.uid ?
                    <button onClick={() => signOut(auth)} className='bg-cyan-600 text-yellow-50 border border-b rounded font-semibold p-1 px-3 mb-4 font-xl hover:bg-cyan-500 ' >Sign out</button>
                    :
                    <Link className='text-xl hover:text-orange-400' to={'/login'}>Log in</Link>


            }
        </div>
    );
};

export default Header;