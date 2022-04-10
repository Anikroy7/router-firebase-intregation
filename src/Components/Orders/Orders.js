import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);


    return (
        <div>
            <h1>Name :{user?.displayName}</h1>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default Orders;