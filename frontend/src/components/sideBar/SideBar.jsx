import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SideBarOption from './SideBarOption';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = ({userName}) => {

  const [click, setClick] = useState('Home');

  const handleClick = (name) => {
    setClick(name)
  }

  const dataList = [
    {
      name: 'Home',
      icon: HomeIcon,
      path: '/'
    },
    {
      name: 'Explore',
      icon: SearchIcon,
      path: '/explore'
    },
    {
      name: 'Notification',
      icon: NotificationsIcon,
      path: '/notification'
    },
    {
      name: 'Messeage',
      icon: EmailOutlinedIcon,
      path: '/messeage'
    },
    {
      name: 'Bookmarks',
      icon: BookmarkBorderOutlinedIcon,
      path: '/bookmarks'
    },
    {
      name: 'List',
      icon: ListAltOutlinedIcon,
      path: '/list'
    },
    {
      name: 'Profile',
      icon: Person2OutlinedIcon,
      path: `/profile/${userName}`
    }
  ]

  return (
    <div className='hidden md:block md:mt-5 md:pl-5 md:pr-5 md:flex-[0.3]'>
      <TwitterIcon className='text-twitterBlue text-3xl ml-5 mb-5'/>

      {dataList.map((item, index) => (
        <Link to={item.path} key={index} onClick={() => handleClick(item.name)} >
          <SideBarOption Icon={item.icon}  text={item.name} active={click} />
        </Link>
      ))}
      <button className='hidden md:block bg-twitterBlue border-none text-White w-full h-12 rounded-full mt-5 font-bold '>Post</button>  
    </div>
  )
}

export default Nav