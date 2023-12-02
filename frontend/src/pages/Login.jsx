import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { userLogin } from '../api/apiUser';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    try {
      const token = await userLogin(data);
      localStorage.setItem('token', token);
      window.location.href = '/';
    } catch (error) {
      if(error.response.status === 400) alert('Invalid credentials');
    }
  };

  return (
    <div className="h-screen md:min-h-screen flex flex-wrap bg-gradient-to-r from-twitterBlue to-twitterGray  ">
      <div className='md:w-2/3 flex justify-center items-center m-auto'>
      <img src={logo} className='w-40 md:w-54' alt='logo'/>
      </div>
      <div className="bg-White w-full bottom-0 md:w-1/3 rounded-l-xl md:min-h-screen h-auto p-8 md:p-5 mt-auto">
        <div className='bg-white md:p-8  md:mx-auto md:my-auto md:mt-24'>
        <h1 className='text-xl md:text-5xl mb-4 md:mb-8'>Happening Now</h1>
        <h3 className='md:text-3xl'>Join Twitter Today</h3>
          <input type="email"  onChange={(e) => setData({...data, email: e.target.value})} placeholder='Email' className='w-[95%] p-3 m-2 border-b-2 border-twitterGray hover:border-twitterBlue outline-none' />
          <input type="password" onChange={(e) => setData({...data, password: e.target.value})} placeholder='Password' className='w-[95%] p-3 m-2 border-b-2 border-twitterGray hover:border-twitterBlue outline-none'  /><br/>
          <button type="submit" onClick={handleSubmit} className='bg-twitterBlue text-White p-3 rounded-full w-full'>Login</button>
          <p>You haven't Account<Link className='text-twitterBlue' to={'/register'} >Creat Account</Link></p>
        </div>
    </div>
  </div>

  );
};

export default Login;


