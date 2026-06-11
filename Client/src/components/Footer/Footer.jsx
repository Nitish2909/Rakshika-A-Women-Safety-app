import React from 'react'
import { FaShieldAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' bg-pink-100 mt-7'>
      <h2 className='text-2xl flex flex-col items-center text-pink-800 font-medium mt-4'>Together, we can build a safer tomorrow.</h2>
      <h2 className='text-2xl flex flex-col items-center text-pink-500 font-medium mb-4'>Stay safe, Stay fearless.</h2>
      <div className='text-center'>
        <p>
          © {new Date().getFullYear()}Rakshika A Women Safety App. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
