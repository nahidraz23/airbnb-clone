import React from 'react';
import icon from '../app/icon.svg';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div>
            <div className='flex items-center'>
                <Image src={icon} alt='icon' className='w-8'></Image>
                <h1>airbnb</h1>
            </div>
        </div>
    );
};

export default Navbar;