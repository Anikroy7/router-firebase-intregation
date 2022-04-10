import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Home = () => {
    const [user] = useAuthState(auth);
    console.log(user?.photoURL);
    return (
        <div>
            {
                user ?
                    <div>
                        <h3>Name: {user?.displayName}</h3>
                        <img src={user?.photoURL} alt="" />
                    </div>
                    : "no body login here..."
            }
        </div>
    );
};

export default Home;