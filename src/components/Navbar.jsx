import React from 'react';
import icon from '../app/icon.svg';
import Image from 'next/image';
import { TbWorld } from "react-icons/tb";
import { FaBars  } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='py-6 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <Image src={icon} alt='icon' className='w-8'></Image>
                <h1 className='text-lg font-extrabold text-primary-color'>airbnb</h1>
            </div>
            <div className='flex gap-3'>
                <h3 className='text-lg font-semibold'>Stays</h3>
                <h3 className='text-lg font-semibold text-gray-500'>Experiences</h3>
            </div>
            <div className='flex items-center gap-5'>
                <h3>Airbnb your home</h3>
                <TbWorld></TbWorld>
                <button className='flex items-center gap-3 border-2 px-5 py-2 rounded-full'>
                    <FaBars></FaBars>
                    <FaUserCircle className='text-3xl'></FaUserCircle>
                </button>
            </div>
        </div>
    );
};

export default Navbar;