import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {

    const { signWithGoogle } = useFirebase();

    return (
        <div>
            <section className='bg-slate-300  mx-auto p-8 w-3/4 mt-4'>
                <h1 className='text-3xl mt-5 mb-5 font-bold'>Register From</h1>
                <form >
                    <input className='border border-b rounded border-blue-900 p-1 mb-4 ' placeholder='your name' type="name" name="name" id="" /> <br />
                    <input className='border border-b rounded border-blue-900 p-1 mb-4 ' placeholder='your email' type="email" name="email" id="" /> <br />
                    <input className='border border-b rounded border-blue-900 p-1 mb-4 font-xl' placeholder='your password' type="password" name="password" id="" /><br />
                    <input className='bg-slate-600 text-yellow-50 border border-b rounded p-1 px-3 mb-4 font-xl hover:bg-slate-700' type="submit" value="Register" />
                </form>
                <div onClick={signWithGoogle}>
                    <button className='bg-red-600 text-yellow-50 border border-b rounded font-semibold p-1 px-3 mb-4 font-xl hover:bg-red-500 '>Sign with google</button>
                </div>
            </section>
        </div>
    );
};

export default Register;