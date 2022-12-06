import React from 'react'
import Image from 'next/image'


const LeftbarRow = ({src, Icon, title}) => {
  return ( 
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
    {/* If pass in a src ...then render Image */}
    {src &&(
          <Image 
          className='rounded-full'
          src={src}
          width={30}
          height={30}
          fixed='true'
          alt='/'
          />
    )}
    {/* If a icon..then render Icon */}
    {Icon && (
       <Icon className='h-[8] w-[8] text-blue-500'/>
    )}
    <p className='hidden sm:inline-flex font-medium'>{title}</p>
  </div>
   );
}
 
export default LeftbarRow ;
