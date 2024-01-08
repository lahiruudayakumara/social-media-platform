import React from 'react'

const FollowYou = () => {
  return (
    <div className='mt-2 p-4 rounded-md shadow-md bg-slate-50'>
        <h1 className='text-base font-bold'>Who to follow</h1>
        <div className='flex'>
            <img className='rounded-full w-12 h-12 mt-2' src='https://picsum.photos/200/300' alt='profile' />
            <div className='ml-2'>
                <h1 className='font-bold'>Sri Lanka</h1>
                <p className='text-sm'>@SriLanka</p>
            </div>
            <button className='bg-twitterBlue text-White font-bold rounded-full p-1 mt-2 pl-4 pr-4 h-10 ml-auto'>Follow</button>
        </div>
    </div>
  )
}

export default FollowYou