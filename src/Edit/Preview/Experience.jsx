import React, { useContext } from 'react'
import { ResumeInfocontext } from '../../Context/Resumeinfocontext'

function PersonalExperience() {

    const {res_info} = useContext(ResumeInfocontext);
  return (
    <div>
        <h1 className='font-bold text-[#7D79EB] text-center'>Experience</h1>
        <div className='text-xs mt-5'>

        {
            res_info?.experience?.map((value,idx)=>(
                <div key={idx} className='mb-5'>
                     <h1 className='font-bold'>{value?.title}</h1>
                     <div className='flex justify-between'>

                     <span className='font-bold'>{value?.companyName} , {value?.city}, {value?.state}</span>
                     <span>{value?.startDate}  --  {value?.currentlyWorking?"Present":value?.endDate}</span>
                     </div>
                     <div dangerouslySetInnerHTML={{ __html:value?.workSummery }} />
                     
                     

                </div>
                
            ))
        }

        </div>
        <hr  className='mt-5 border-[#7D79EB] border-1'/>



      
    </div>
  )
}

export default PersonalExperience
