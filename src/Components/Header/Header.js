import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='text-xl mr-5' to={'/home'}>Home</Link>
            <Link className='text-xl' to={'/login'}>Log in</Link>
        </div>
    );
};

export default Header;