import {signIn,signOut} from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/login.module.scss';

export default function Login(){
          return (
            <div className='grid place-items-center'>
                  
               <Image src='https://links.papareact.com/5me'
               width={400} 
               height={400} 
               alt='/'
               object-fit='contained' 
               />

               <h1 className='p-5 m-5 bg-blue-500 rounded-full text-white text-center cursor-pointer' onClick={()=> signIn()}>Login with Facebook</h1> 

            </div>
      )
}



