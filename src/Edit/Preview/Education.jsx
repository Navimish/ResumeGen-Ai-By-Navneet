import React, { useContext } from 'react'
import { ResumeInfocontext } from '../../Context/Resumeinfocontext'

function Education() {
   const {res_info} = useContext(ResumeInfocontext)
  return (
    <div className=' my-5 '>

        <h1 className='font-bold text-[#7D79EB] text-center'>Education</h1>

        {
            res_info?.education?.map((value,idx)=>(

                <div key ={idx}>

                
                <div  className='flex justify-between text-xs' >

                <div>

                <h1 className='font-bold'>{value?.universityName}</h1>
                
                    <span>{value?.degree} : {value?.major} </span>
              

                </div>

                <span>{value?.startDate} -- {value?.endDate}</span>




                </div>

                <p className='mt-2 text-xs mb-5'>
                    {value?.description}
                </p>
                </div>
            ))
        }

                <hr  className='mt-2 border-[#7D79EB] border-1'/>

       

        
      
    </div>
  )
}

export default Education
