import Image from 'next/image'
import {useSession} from 'next-auth/react'
import {BsEmojiSmile} from 'react-icons/bs'
import {FaVideo} from 'react-icons/fa'
import {MdPhotoCamera} from 'react-icons/md'



const InputBox = () => {

   const { data:session } = useSession();

   const submitPost = (e) => {
      // Preventing reload when button is clicked
      e.preventDefault();

   }

   return ( 

      <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
         {/* Top Half */}
         <div className='flex space-x-4 p-4 items-center'>

            <Image 
               className='rounded-full'
               src={session.user.image}
               width={40} 
               height={40} 
               alt='/' 
            />       
               
            <form className='flex flex-1 '>

               <input type='text' className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' placeholder={`Whats on your mind ${session.user.name}?` }/>

               <button hidden type='submit' onClick={submitPost}>Submit</button>

            </form>

         </div>

         <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon'>
               <FaVideo className='h-7 text-red-600' size={25}/>
               <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>

            <div className='inputIcon'>
               <MdPhotoCamera className='h-7 text-green-500' size={25}/>
               <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
            </div>

            <div className='inputIcon'>
               <BsEmojiSmile className='h-7 text-yellow-500' size={25}/>
               <p className='text-xs sm:text-sm xl:text-base'>Feelings/Activity</p>
            </div>
         </div>
        

         


      </div>
    );
}
 
export default InputBox;