import Image from 'next/image';
import {useSession} from 'next-auth/react';
import {BsEmojiSmile} from 'react-icons/bs';
import {FaVideo} from 'react-icons/fa';
import {MdPhotoCamera} from 'react-icons/md';
import { useRef, useState } from 'react';
import   { db,storage }   from '../../firebase';
// import { collection, addDoc } from "firebase/firestore"; 
import { addDoc , collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"; 
import {getDownloadURL, ref, uploadString} from '@firebase/storage'



const InputBox = () => {

   const { data:session } = useSession();

   const [post, setPost] = useState ('') ;

   const[loading, setLoading] = useState(false);

   const filePicker = useRef(null);

   const[selectedFile,setSelectedFile]=useState(null)

   const handlePost = async () => { 
 
      if (loading) return ;

      setLoading(true);

      const docRef = await addDoc(collection(db, 'posts'),{
         //User Input
         message:post,
         name:session.user.name,
         email:session.user.email,
         image:session.user.image,
         timestamp:serverTimesramp(),

      });

      const imageRef = ref(storage, `post/${docRef.name}/image` ) ;

      if (selectedFile) {
         await uploadString(imageRef,selectedFile,'data_url').then(async () => {
            const downloadURL= await getDownloadURL(imageRef)
            await updateDoc(doc(db,'posts',docRef.name),{
               image:downloadURL,
            })
         })
      }

      setLoading(false);
      setPost("");
      setSelectedFile(null);

      const addImageToPostn = (e) => {
         const reader = new FileReader();
         if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
         }

         reader.onload = (readerEvent) => {
            setSelectedFile
         }
         
      }

      // e.preventDefault();

      // const CollectionReference= collection(db, 'posts');

      // const payload = {
      //    //User Input
      //    message:post,
      //    name:session.user.name,
      //    email:session.user.email,
      //    image:session.user.image,
      // }

      // await addDoc(CollectionReference, payload)
   }


   // Functionallity to allow input-value into the input field
   // const inputRef = useRef(null);

   // async function submitPost(e){
   //    // Preventing reload when button is clicked
   //    e.preventDefault();

   //    if (!inputRef.current.value) return;


   //    // Db Object

   //    // Add a new document in collection "cities"
   //    await setDoc(doc(db, "posts"), {

   //       //User Input
   //       message:inputRef.current.value,
   //       name:session.user.name,
   //       email:session.user.email,
   //       image:session.user.image,
   //    });

   //    // // Add a new document with a generated id.
   //    // const docRef = await  addDoc(collection(db, "posts"), {

   //    //    //User Input
   //    //    message:inputRef.current.value,
   //    //    name:session.user.name,
   //    //    email:session.user.email,
   //    //    image:session.user.image,

   //    // });


   //    // db.collection('posts').add({
   //    //    //User Input
   //    //    message:inputRef.current.value,
   //    //    name:session.user.name,
   //    //    email:session.user.email,
   //    //    image:session.user.image,
   //    //    // using database
   //    //    timestamp:firebase.firestore.FieldValue.serverTimestamp()
   //    // });

   //       inputRef.current.value='';
   

   // }

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
               
            <form className='flex flex-1 'onSubmit={handlePost}>

               <input 
               type='text' 
               className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' 
               value={post}
               onChange= {(e) => setPost(e.target.value)}
               placeholder={`Whats on your mind ${session.user.name}?`}/>

               <button hidden type='submit'>Submit</button>

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