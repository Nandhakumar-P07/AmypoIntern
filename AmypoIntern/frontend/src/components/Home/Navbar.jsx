import React from 'react'
import { useNavigate } from 'react-router-dom'
import amypologo from '../../Assests/WhiteAmypo.svg'

const Navbar = () => {
    const nav = new useNavigate();
  return (
    <div className='px-10 py-3 bg-bluegray h-[4.5rem] flex w-screen'>
        <div className='flex justify-start w-full '>
            <img src={amypologo} alt='logo' className='text-white'></img>
        </div>
        <div className='flex justify-end w-full gap-5'>
            <button className='text-white text-lg border-white border-2 rounded-xl px-5 hover:bg-white hover:text-black' onClick={()=>nav("/login")} > Login</button>
            <button className='text-white text-lg border-white border-2 rounded-xl px-5 hover:bg-white hover:text-black' onClick={()=>nav("/signup")} >Signup</button>
        </div>
    </div>
  )
}

export default Navbar