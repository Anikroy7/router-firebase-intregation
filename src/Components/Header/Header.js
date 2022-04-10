import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='text-xl mr-5 hover:text-orange-400' to={'/home'}>Home</Link>
            <Link className='text-xl mr-5 hover:text-orange-400' to={'/orders'}>Orders</Link>
            <Link className='text-xl mr-5 hover:text-orange-400' to={'/register'}>Register</Link>
            <Link className='text-xl hover:text-orange-400' to={'/login'}>Log in</Link>
        </div>
    );
};

export default Header;