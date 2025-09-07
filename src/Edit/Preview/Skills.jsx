import React, { useContext } from 'react'
import { ResumeInfocontext } from '../../Context/Resumeinfocontext'

function Skills() {

    const {res_info} = useContext(ResumeInfocontext)
  return (
    <div >
        <h1 className='font-bold text-[#7D79EB] text-center mb-3'>Skills</h1>

        <div className=' grid grid-cols-2 place-items-center gap-6 text-center'>


        {
            res_info?.skills?.map((value,idx)=>(
                
                <div className='text-xs ' key={idx}>
                    <h1 className='font-bold mb-2'>{value?.skill}</h1>
                    <div className="w-40 bg-gray-200 rounded h-2">
                        <div  className="bg-[#7D79EB] h-2 rounded"
                        style ={{width:`${value?.rating*20}%`}}>
                            

                        </div>
                    </div>
                </div>
            ))
        }

        </div>

      
    </div>
  )
}

export default Skills
