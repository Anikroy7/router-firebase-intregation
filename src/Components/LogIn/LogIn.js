import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const LogIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div>
            <section className='bg-slate-300  mx-auto p-8 w-3/4 mt-4'>

                <form>
                    <h1 className='text-3xl mt-5 mb-5 font-bold'>Log in</h1>

                    <input className='border border-b rounded border-blue-900 p-1 mb-4 ' placeholder='your email' type="email" name="email" id="email" /> <br />
                    <input className='border border-b rounded border-blue-900 p-1 mb-4 font-xl' placeholder='your password' type="password" name="password" id="password" /><br />
                    <input className='bg-slate-600 text-yellow-50 border border-b rounded p-1 px-3 mb-4 font-xl hover:bg-slate-700' type="submit" value="Login" />

                </form>
                <div onClick={() => signInWithGoogle()}>
                    <button className='bg-red-600 text-yellow-50 border border-b rounded font-semibold p-1 px-3 mb-4 font-xl hover:bg-red-500'>Sing with google</button>
                </div>
            </section>
        </div>
    );
};

export default LogIn;