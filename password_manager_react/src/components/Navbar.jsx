import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-200 flex justify-between items-center px-4'>
            <div className="logo font-bold text-2xl">Password Manager</div>
            <ul className='flex gap-4'>
                <li className='hover:font-bold'>Home</li>
                <li className='hover:font-bold'>About</li>
                <li className='hover:font-bold'>Contact</li>
            </ul>
            
        </nav>
    )
}

export default Navbar