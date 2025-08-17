import { PlusSquare } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AddResume from '../components/custom/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from '../../service/GlobalApi';

function DashBoard() {

  const {user} = useUser();
  const[resumeList, setResumeList] = useState([]);

    useEffect(()=>{
      user&&getuserlist();
    },[user])

  async function getuserlist(){

    const res =  await GlobalApi.getResume(user?.primaryEmailAddress?.emailAddress);

    setResumeList(res.data.data)

    console.log(resumeList);

  }
  return (
    <div>

      <h1 className='font-bold text-3xl ml-50 mt-17'>My Resumes</h1>
      <h1 className=' ml-50 mt-2'> Make company wise resume to display your skills</h1>

      <div>
        <AddResume></AddResume>
        {/* {
            getuserlist.map((eachresume)=>{
              return eachresume.title
            })
        } */}
      </div>
      
    </div>
  )
}

export default DashBoard
