import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Post = ({
  displayName,
  userName,
  verifired,
  text,
  image,
  avatar
}) => {

  const [like, setLike] = useState(null);

  const likeHandler = () => {
    if (like === null) {
      setLike('true')
    } else {
      setLike(null)
    }
  }
  
  return (
    <Link to='/username/status/_id'>
      <div className='flex items-start border-b-2 border-twitterBack p-4'>
        <div>
          <Avatar src={image} />
        </div>
        <div className='ml-4'>
          <div>
            <div>
              <h3>{displayName}
                <span>
                  {verifired === 'true' ? <VerifiedIcon className='text-twitterBlue text-sm'/> : <p></p>}
                </span>
              </h3>
            </div>
            <div>
              <p className='justify'>{text}</p>
            </div>
          </div>
          <img src={image} className='rounded-md' alt='img' />
          <div className='flex justify-between mt-2'>
            <div onClick={likeHandler}>
              <FavoriteBorderOutlinedIcon className='text-twitterGray hover:bg-twitterBack cursor-pointer rounded-full' />
            </div>
            <ChatBubbleOutlineRoundedIcon className='text-twitterGray'  />
            <SwapHorizOutlinedIcon className='text-twitterGray'  />
            <BarChartOutlinedIcon className='text-twitterGray'  />
            <div className='flex left-0'>
                  <BookmarkBorderOutlinedIcon className='text-twitterGray'  />
                  <IosShareOutlinedIcon className='text-twitterGray'  />
            </div>
          </div>
        </div>
      </div>
    </Link>
)}

export default Post