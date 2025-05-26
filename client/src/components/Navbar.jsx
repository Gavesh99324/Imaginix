import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { AppContext } from '../context/AppContext';


function Navbar() {

  const {user} = useContext(AppContext);
 
  const navigate = useNavigate();


  return (
    <div className='flex items-center justify-between py-4'>
      <div className='flex items-center gap-2'>
        <Link to={'/'}>
          <img src={'/favicon.png'} alt="logo" className='mt-3 w-2 sm:w-10 lg:w-12' />
        </Link>
          <h2 className='text-lg sm-text-xl lg:text-2xl font-bold'>Imaginix</h2>
      </div>

      <div>
        {
        user ?   
          <div className='flex items-center gap-2 sm:gap-3'>
            <Button onClick={() => navigate('/buy')} variant='contained' color='primary' sx={{borderRadius: '9999px'}} className='flex items-center gap-2 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 text-white hover:from-cyan-500 to-blue-500'>
                <StarOutlineIcon className="text-yellow-500 w-4 h-4"/>
                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left :</p>
            </Button>
            <p className='text-gray-600 max:sm:hidden pl-4'>Hi User </p>
            <div className='relative group'>
                <AccountCircleIcon className='cursor-pointer' onClick={() => navigate('/profile')} />
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                        <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                    </ul>
                </div>  
            </div>
          </div>
          :
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
            <Button sx={{borderRadius: '9999px', width: '120px'}} className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-500/50 hover:to-blue-500/50'>Login</Button>
          </div>
        }
      </div>


    </div>
  )
}

export default Navbar;
