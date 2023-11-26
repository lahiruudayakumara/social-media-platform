import SideBarProfileItem from "../components/sideBar/SideBarProfileItem";
import SideBar from '../components/sideBar/SideBar';
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex">
      <div className='bg-slate-50 shadow-md w-1/4 h-screen fixed'>
        <SideBar />
        <SideBarProfileItem />
      </div>
      <div className='w-3/4 ml-[25%]'>
        <Outlet />
      </div>
    </div>
  )
}

export default Main