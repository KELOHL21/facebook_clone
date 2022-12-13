import Image from 'next/image';
import {useSession} from 'next-auth/react';
import {BsEmojiSmile} from 'react-icons/bs';
import {FaVideo} from 'react-icons/fa';
import {MdPhotoCamera} from 'react-icons/md';
import { useRef, useState } from 'react';
import   { db,storage }   from '../../firebase';
import firebase from 'firebase'



const InputBox = () => {

   const { data:session } = useSession();

   const inputRef = useRef(null);

   const filepickerRef = useRef(null);

   // State that retains the image
   const [imagePost, setImagePost] = useState(null);


   const submitPost = (e) => {

      e.preventDefault();

      if (!inputRef.current.value) return;

      // Storing the input from the User into Cloud FireStore Document

         db.collection('posts').add({
         //User Input
         message:inputRef.current.value,
         name:session.user.name,
         email:session.user.email,
         image:session.user.image,
         // using database
         timestamp:firebase.firestore.FieldValue.serverTimestamp()

      });
      // Returns the input to be empty once enter has been pressed
       inputRef.current.value='';
      
   }

   const addImage = (e) => {
      // initializing file reader
      const reader = new FileReader();

      if(e.target.files[0]){

         reader.readAsDataURL(e.target.files[0]);
      }

      reader.onload = (readerEvent) => {

         setImagePost(readerEvent.target.result)

      }
   };

   const removeImage = () => {

      setImagePost(null);

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
               
            <form className='flex flex-1'>

               <input 
               type='text' 
               className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' 
               ref={inputRef}
               placeholder={`Whats on your mind ${session.user.name}?`}/>

               <button hidden type='submit' onClick={submitPost}>Submit</button>

            </form>

            {imagePost && (

               <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>

                  <Image src={imagePost} className='h-10 object-contain' alt='/' width={70} height={50}/>
                  <p className='text-sx text-red-500 text-center'>Remove</p>

               </div>

            )}

         </div>

         <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon'>
               <FaVideo className='h-7 text-red-600' size={25}/>
               <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>

               <div onClick={() => filepickerRef.current.click()} className='inputIcon'>
               <MdPhotoCamera className='h-7 text-green-500' size={25}/>
               <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
               {/* Selcecting a fie */}
               <input 
                  type="file" 
                  ref={filepickerRef} 
                  onChange={addImage} 
                  hidden/>
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