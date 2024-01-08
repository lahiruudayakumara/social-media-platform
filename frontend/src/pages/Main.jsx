import { useEffect, useState } from "react";
import SideBarProfileItem from "../components/sideBar/SideBarProfileItem";
import SideBar from '../components/sideBar/SideBar';
import { Outlet } from "react-router-dom";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import { Avatar } from "@mui/material";
import {jwtDecode} from 'jwt-decode';

const token = localStorage.getItem("token");

const Main = () => {
  const [msg, setMsg] = useState(true);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    
    const decodedToken = jwtDecode(token);
    setData2(decodedToken)
  }, [])

  console.log(data2);

  return (
    <div className="flex">
      <div className='bg-slate-50 shadow-md md:w-1/4 w-screen md:h-screen fixed border-r-2 border-twitterBack'>
        <SideBar userName={data2.userName} />
        <SideBarProfileItem name={data2.name} userName={data2.userName} img={data2.profilePicture} />
      </div>
      <div className='md:w-3/4 md:ml-[25%]'>
        <Outlet />
      </div>

      <div className="fixed z-10 hidden  border-2 border-twitterBack bottom-1/2 p-3 mr-10 w-[600px] h-14 bg-White shadow-md shadow-twitterGray rounded-lg  items-center">
        <div className="flex justify-between">
          <p className="text-2xl">Messeage</p>
          <p>hello</p>
        </div>
      </div>

      <div className={`hidden md:fixed z-10 right-0 border-2 border-twitterBack bottom-0 mr-10 w-1/5 ${msg === true ? 'h-96' : 'h-14' }  bg-White shadow-md shadow-twitterGray rounded-tl-lg rounded-tr-lg  items-center`}>
        <div className="flex justify-between p-3">
          <p className="text-2xl">Messeage</p>
          <div className="flex">
              <EmailOutlinedIcon />
              {msg === true ? <KeyboardDoubleArrowDownOutlinedIcon className="cursor-pointer" onClick={() => setMsg(false)} /> : <KeyboardDoubleArrowUpOutlinedIcon className="cursor-pointer"  onClick={() => setMsg(true)} />}
          </div>
        </div>
        <div className={msg === true? 'show' : 'hidden'}>
          <div className="flex p-2 hover:bg-twitterBack cursor-pointer">
            <Avatar />
            <div className="ml-2">
              <h1 className="font-bold">Lahiru Udayakumara</h1>
              <p className="text-twitterGray">Hello I'm Lahiru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main