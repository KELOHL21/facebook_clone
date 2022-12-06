import styles from './navbar.module.scss';
import Image from 'next/image';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import {useSession,signOut} from 'next-auth/react'

// Icons

import { HiBell  } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown,BsFillChatDotsFill, BsGridFill } from "react-icons/bs";
import { MdGroups } from 'react-icons/md';
import { FiPlayCircle, FiFlag } from 'react-icons/fi';

// Icons


const Navbar = () => {

   const { data:session } = useSession();

   return (
      <div className='sticky top-0 z-50 flex items-center p-2 lg:px-5 shadow-md'>
      {/* left */}
      <div className='flex items-center'>
         <Image src='https://links.papareact.com/5me'
         width={40} 
         height={40} 
         alt='/' 
         />
         <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
            <HiMagnifyingGlass  className='h-6 text-gray-600 aria-hidden=true'/>
            <input type='text' className='aria-hidden md:inline-flex ml-2 item-center bg-transparent flex-shrink
            ' placeholder='Search Facebook'/>
         </div>
      </div>

      {/* Center */}
      <div className='flex justify-center flex-grow'>
         <div className='flex space-x-6 md:space-x-2'>
            <HeaderIcon active Icon={AiFillHome}/>
            <HeaderIcon Icon={FiFlag}/>
            <HeaderIcon Icon={FiPlayCircle}/>
            <HeaderIcon Icon={AiOutlineShoppingCart}/>
            <HeaderIcon Icon={MdGroups}/>
         </div>
      </div>

      {/* Right */}
      
      <div className='flex items-center sm:space-x-2 justify-end'>
         {/* Profile pic */}

         <Image
            onClick={()=> signOut()}
            src={session.user.image} 
            alt='/'
            width='40' 
            height='40'
            fixed="true"
            className='rounded-full cursor-pointer'
         />

         <p className='font-semibold pr-3 whitespace-nowrap'>{session.user.name}</p>

         <BsGridFill className='icon'/>
         <BsFillChatDotsFill className='icon'/>
         <HiBell className='icon'/>
         <BsChevronDown className='icon'/>

      </div>

      </div>
   )
};

export default Navbar;

