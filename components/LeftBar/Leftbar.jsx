import styles from './leftbar.module.scss'
import {useSession} from 'next-auth/react'
import LeftbarRow from '../LeftRow/LeftbarRow.jsx'


import { BsChevronDown , BsBag, BsFillCalendarFill, BsFillClockFill } from 'react-icons/bs'
import { GrGroup } from 'react-icons/gr';
import { RiComputerFill } from 'react-icons/ri'
import { FaUsers } from 'react-icons/fa'

const Leftbar = () => {

  const {data:session, data:loading } = useSession();

  return ( 

      <div className='p-2 mt-5 ax-w-[600px] xl:min-w-[300px]'>

        <LeftbarRow src={session.user.image} title={session.user.name}/>

        <LeftbarRow  Icon={ FaUsers } title="Friends"/>

        <LeftbarRow  Icon={ GrGroup } title="Groups"/>

        <LeftbarRow  Icon={BsBag} title="Marketplace"/>

        <LeftbarRow  Icon={ RiComputerFill} title="Watch"/>

        <LeftbarRow  Icon={BsFillCalendarFill} title="Events"/>

        <LeftbarRow  Icon={BsFillClockFill} title="Memories"/>

        <LeftbarRow  Icon={ BsChevronDown} title="See More" />


    </div>
   );
}
 
export default Leftbar;
