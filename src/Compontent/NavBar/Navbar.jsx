import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const[isopen, setisopen]=useState(false)

  const togglemenu=()=>{
    setisopen(!isopen)
  }
  return (
    <div>
    <nav className='bg-indigo-500 flex items-center justify-between p-4 w-full font-sans'>
      <h1 className=' text-white text-2xl'>Crowdfrica organizatin</h1>

      <button onClick={togglemenu} className="md:hidden flex flex-col justify-center items-center">
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isopen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isopen ? 'opacity-0' : 'opacity-100'}`}></span>
      </button>

      <ul className={`flex-col md:flex-row md:flex md:justify-between gap-4 ${isopen ? 'flex' : 'hidden'} md:flex`}>
        <li>
          <NavLink to={`/`}>Project</NavLink>
        </li>
        <li>
          <NavLink to={`/Donation`}>Donation</NavLink>
        </li>
      </ul>
    

   
    </nav>
    </div>
  )
}

export default Navbar