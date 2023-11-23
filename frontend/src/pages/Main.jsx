import SideBarProfileItem from "../components/sideBar/SideBarProfileItem";
import Nav from '../components/sideBar/Nav';
import Home from './Home';

const Main = () => {
  return (
    <div className="flex">
      <div className='bg-slate-50 shadow-md w-1/4 h-screen fixed'>
        <Nav />
        <SideBarProfileItem />
      </div>
      <div className='w-3/4 ml-[25%]'>
        <Home />
      </div>
    </div>
  )
}

export default Main