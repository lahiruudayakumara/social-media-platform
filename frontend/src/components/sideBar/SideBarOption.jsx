import React from 'react'

const SideBarOption = ({active, text, Icon}) => {
  return (
    <div className={`flex items-center cursor-pointer p-4 hover:text-twitterBlue hover:bg-[#e8f5fe] hover:rounded-full transition-colors duration-100 ease-out
    ${active && 'text-twitterBlue'}`}>
        <Icon className='mr-5' />
        <h2 className='font-bold text-base mr-5'>{text}</h2>
    </div>
  )
}

export default SideBarOption