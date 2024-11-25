import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <>
            <div className='w-full px-6 bg-blue-500'>
                <div className='flex mx-auto justify-between p-2 items-center max-w-6xl '>
                    <div>
                        <h2 className='text-2xl font-bold text-white'>
                            <NavLink to='/'>
                                Book Finder
                            </NavLink>
                        </h2>
                    </div>
                    <ul className='flex justify-end items-center '>
                        <NavLink to='./favorites' className='bg-pink-500 hover:bg-pink-600 p-2 px-3 rounded-lg text-white'>
                            Favorites
                        </NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar