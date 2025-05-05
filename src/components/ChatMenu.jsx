import React from 'react'
import logo from '../assets/images/buzzboxlogo.png'
import { BsChatLeftText } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

function ChatMenu() {
  return (
    <aside className='flex flex-col items-center h-full w-[5%]'>
        <div className='w-10 mb-16'>
            <img src={logo} alt="buzzbox logo" className='w-full rounded-4xl'/>
        </div>
        <ul>
            <li className='pb-5'><BsChatLeftText className='text-white text-2xl'/></li>
            <li className='pb-5'><FiSettings className='text-white text-2xl'/></li>
            <li className='pb-5'><FaRegUser className='text-white text-2xl'/></li>
        </ul>
    </aside>
  )
}

export default ChatMenu