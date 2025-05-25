import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [user, setUser] = useState(null);


  return (
    <div>
      <Link to={'/'}>
         <img src={'/favicon.png'} alt="logo" className='mt-3 w-2 sm:w-6 lg:w-12' />
      </Link>

      <div>
        {user ? 
          <div></div>
          :
          <div></div>
        }
      </div>


    </div>
  )
};

export default Navbar;
