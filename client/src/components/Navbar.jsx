import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function Navbar() {

    const [user, setUser] = useState(null);


  return (
    <div className='flex items-center justify-between py-4'>
      <Link to={'/'}>
         <img src={'/favicon.png'} alt="logo" className='mt-3 w-2 sm:w-6 lg:w-12' />
      </Link>

      <div>
        {
        user ?  
          <div></div>
          :
          <div className='flex items-center gap-2 sm:gap-5'>
            <p className='cursor-pointer'>Pricing</p>
            <Button className='bg-gradient-to-r from-cyan-500 to-blue-500'>Login</Button>
          </div>
        }
      </div>


    </div>
  )
};

export default Navbar;
