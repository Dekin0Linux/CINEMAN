import React from 'react'
import { FaHome,FaUser, FaSearch, FaClock, FaHeart, FaClone } from "react-icons/fa";

function Sidebar() {
  return (
    <div className='p-5 px-8 text-white md:h-screen basis-1/5'>

        <h1 className='font-bold text-lg mb-10'>CINE<span className='text-blue-500'>MAN</span></h1>

        <div className='md:mb-10'>
            <h3 className='text-current md:my-4'>MENU</h3>
            <div className='flex md:block justify-between'>
                <div className='flex items-center my-3'>
                    <FaHome size={20} color={'blue'}/><span className='md:mx-7 font-light hidden md:block'>Home</span>
                </div>
                <div className='flex items-center my-3'>
                    <FaUser size={20} color={''} /><span className='md:mx-7 font-light hidden md:block'>Community</span>
                </div>
                <div className='flex items-center my-3'>
                    <FaSearch size={20} color={''}/><span className='md:mx-7 font-light hidden md:block'>Discovery</span>
                </div>
                <div className='flex items-center my-3'>
                    <FaClock size={20} color={''} /><span className='md:mx-7 font-light hidden md:block'>Coming Soon</span>
                </div>
            </div>
            
        </div>

        <div className='mb-10 hidden md:block'>
            <h3 className='text-current my-4'>MY PROFILE</h3>
            <div className='flex items-center my-3'>
                <FaHeart size={20} color={''}/><span className='mx-7 font-light'>Favorite</span>
            </div>
            <div className='flex items-center my-3'>
                <FaClone size={20} color={''}/><span className='mx-7 font-light'>Recently Watched</span>
            </div>
            <div className='flex items-center my-3'>
                <FaSearch size={20} color={''}/><span className='mx-7 font-light'>Continue Watching</span>
            </div>
        </div>

        <div className='hidden md:block'>
            <h3 className='text-current my-4'>POPULAR GENRES</h3>
            <button className='bg-amber-600 py-2 px-6 rounded-md mr-1 my-2'>Classic</button>
            <button className='bg-sky-600 py-2 px-6 rounded-md mr-1 my-2'>Thriller</button>
            <button className='bg-pink-700 py-2 px-6 rounded-md mr-1 my-2'>Western</button>
            <button className='bg-violet-700 py-2 px-6 rounded-md mr-1 my-2'>Sci-Fi</button>
        </div>
        
        
    </div>
  )
}

export default Sidebar