import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';

const Nav = () => {
  return (
    <div className='p-4'>

        <div className='flex items-center justify-center'>
            <TwitterIcon className="ml-0 mr-0" sx={{ fontSize: 60 }} />
            <p className='text-3xl pointer-events-none'>Twitter</p>
        </div>

        <div className='flex items-center justify-center p-5'>
            <HomeIcon  />
            <p>Home</p>
        </div>
    </div>
  )
}

export default Nav