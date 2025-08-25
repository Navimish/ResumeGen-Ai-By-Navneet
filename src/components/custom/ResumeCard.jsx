
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ResumeCard({eachresume}) {

  console.log(eachresume);

  

  
    const navigate = useNavigate()
  return (
    <div >

        <div onClick={()=>navigate(`/dashboard/edit/${eachresume.id}`)} className="   border border-2 shadow-3xl shadow-purple-200 h-[240px] w-[200px] bg-gray-200 flex items-center justify-center rounded-2xl shadow-md hover:bg-gray-300 hover:scale-105 cursor-pointer transition-all border-purple-600">
            {eachresume.title}</div>
      
    </div>
  )
}

export default ResumeCard
