import React from 'react'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';

const Post = () => {
  return (
    <div className='p-6'>

        <div className='flex'>
            <img src="https://picsum.photos/200/300" alt="post" className='rounded-full w-[150px] h-[50px] mr-4' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laborum iste veritatis dolorem, 
                doloremque non dolorum magni ipsa earum est. Maxime nemo modi pariatur dicta ratione aspernatur rerum exercitationem consectetur?</p>
        </div> 

        <div className='ml-12 mt-3 w-[70%] mb-4'>
            <img src="https://picsum.photos/200/300" alt="post" className='rounded-md' />
            <div className='flex justify-between mt-4 '>
                <FavoriteBorderOutlinedIcon />
                <ChatBubbleOutlineRoundedIcon />
                <SwapHorizOutlinedIcon />
                <BarChartOutlinedIcon />
                <div className='flex'>
                  <BookmarkBorderOutlinedIcon />
                  <IosShareOutlinedIcon />
                </div>
            </div>
        </div> 
        <hr/> 
        
    </div>
  )
}

export default Post