import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { FaStar } from "react-icons/fa";



function Navbar() {

    const [user, setUser] = useState(true);

    const navigate = useNavigate();


  return (
    <div className='flex items-center justify-between py-4'>
      <Link to={'/'}>
         <img src={'/favicon.png'} alt="logo" className='mt-3 w-2 sm:w-10 lg:w-12' />
      </Link>

      <div>
        {
        user ?   
          <div>
            <Button className='flex items-center gap-2'>
                <FaStar className="text-yellow-500 w-4 h-4"/>
                <p>Credits left :</p>
            </Button>
          </div>
          :
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
            <Button className='bg-gradient-to-r from-cyan-500 to-blue-500'>Login</Button>
          </div>
        }
      </div>


    </div>
  )
}

export default Navbar;
