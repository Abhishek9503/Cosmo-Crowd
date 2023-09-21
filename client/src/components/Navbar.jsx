import React from 'react'
import {CustomButton} from './'
import { useState } from 'react';
import {logo , menu, search, thirdweb} from '../assets'
import {navlinks} from '../constants';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive]= useState('dashboard');
  const[toggleDrawer, setToggleDrawer] = useState(false);
  const address = '0xabacd';
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
      <div className='lg:flex-1 flex flex-row  max--w-[458px] py-2 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]'>
        <input type="text" placeholder='Search for campaign' className='flex w-full font-epilouge font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none' />

          <div className='w-[72px] h-full rounded-[20px]  bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
        <img src={search} alt="search_button"  className='w-[15px] h-[15px] object-contain'/>
      </div>

    </div>      

    <div className='sm:flex hidden flex-row justify-end gap-4'>
    <CustomButton
      btnType="button"
      title={address ? 'Create a campaign': 'Connect' }
      styles={address ?  'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
      handleClick={ ()=>{
        if(address) navigate('create-campaign')
        else 'connect()'
      }}
    />
    <Link to='/profile'>
      <div className='w-[52px] rounded-full h-[52px] bg-[#2c2f33] flex justify-center items-center cursor-pointer'>
        <img src={thirdweb} alt="user"  className='w-[60%] h-[60%] object-contain'/>
      </div>
    </Link>

    </div>



    {/* //mobile version of out website i.e meadia queries */}
      <div className=' sm:hidden flex justify-between items-center relative'>
    
      <div className='w-[40px] rounded-[10px] h-[40px] bg-[#2c2f33] flex justify-center items-center cursor-pointer'>
        <img src={thirdweb} alt="user"  className='w-[60%] h-[60%] object-contain'/>
      </div>
      <img src={menu} alt="menu"
      className='w-[34px] h-[34px]  object-contain cursor-pointer'
      onClick={()=> setToggleDrawer(!toggleDrawer)}
       />


      <div className={` absolute top-[60px] right-0 left-0 bg-[#] z-10 shadow-secondary py-4 
      ${!toggleDrawer } ? ' -translate-y-[100vh]': 'translate-y-0' transition-all duration-700 `}>
        <ul className='mb-4'>
        {navlinks.map((link)=>(
          <li
          key={link.name}
          className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
          onClick={()=> {
            setIsActive(link.name);
          setToggleDrawer(false);
          navigate(link.link);
          
          }}
          >

          <img className={`w-[24px] h-[24px] object-contain 
           ${isActive === link.name ? 'grayscale-0':'grayscale'}`} 
          src={link.imgUrl} alt={link.name} />
          <p className={`ml-[20px] font-epeilouge font-semibold text-[14px]
          ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}
          `}>{link.name}</p>

          </li>
          

        ))}

        </ul>

<div className='flex mx-4'>
<CustomButton
      btnType="button"
      title={address ? 'Create a campaign': 'Connect' }
      styles={address ?  'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
      handleClick={ ()=>{
        if(address) navigate('create-campaign')
        else 'connect()'
      }}
    />

</div>


      </div>

      </div>

    </div>
  )
}

export default Navbar
