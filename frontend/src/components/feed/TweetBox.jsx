import { Avatar } from '@mui/material'
import React from 'react'

const TweetBox = () => {
  return (
    <div className='pb-2 border-b-2 border-twitterBack pr-2'>
        <form className='flex flex-col'>
            <div className='p-4 flex'>
                <Avatar />
                <input type='text' placeholder="What's happening?" className='flex-1 ml-5 text-xl border-none outline-none' />
            </div>
            <input type='text' placeholder="Optional : Enter Image Url" className='p-2 border-none outline-none' />
            <button className='bg-twitterBlue text-White border-none font-bold rounded-full w-20 h-10 mt-5 ml-auto'>Post</button>
        </form>
    </div>
  )
}

export default TweetBox