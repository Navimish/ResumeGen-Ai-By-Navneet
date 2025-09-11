import { PlusSquare } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AddResume from '../components/custom/AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from '../../service/GlobalApi';
import ResumeCard from '../components/custom/ResumeCard';

function DashBoard() {

  const {user} = useUser();
  const[resumeList, setResumeList] = useState([]);

    useEffect(()=>{
      user&&getuserlist();
    },[user])

  async function getuserlist(){

    const res =  await GlobalApi.getResume(user?.primaryEmailAddress?.emailAddress);
    

    setResumeList(res.data.data)


    

  }

  useEffect(()=>{
    console.log(resumeList);


  },[resumeList])

  return (
    <div>

      <h1 className='font-bold text-3xl ml-50 mt-17'>My Resumes : </h1>
      <h1 className=' ml-50 mt-2'> Make company wise resume to display your skills</h1>

      <div className=' ml-40 mt-10 grid grid-cols-5  gap-y-10 gap-x-4 mr-40'>
        <AddResume></AddResume>

       
           { resumeList.map((eachresume,idx)=>(
              <ResumeCard  eachresume={eachresume} key={idx} refreshdata={getuserlist}></ResumeCard>))
          }
      
      
        
      </div>
      
    </div>
  )
}


export default DashBoard
