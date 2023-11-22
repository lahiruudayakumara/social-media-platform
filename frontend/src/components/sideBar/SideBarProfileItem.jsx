import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const SideBarProfileItem = () => {
  return (
    <div>
        <div className="fixed bottom-0 w-full pl-9 p-3 ">
            <div className="flex">
                <img src="https://picsum.photos/200/300" alt="post" className='rounded-full w-[50px] h-[50px] mr-4' />
                <div>
                    <h1>lahiru udayakumara</h1>
                    <p>@lahiru</p>
                </div>
                <KeyboardArrowUpIcon className='m-4 hover:bg-white rounded-full cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default SideBarProfileItem