import React, { useContext } from 'react'
import { ResumeInfocontext } from '../../Context/Resumeinfocontext'

function Summery() {

    const {res_info} = useContext(ResumeInfocontext)
  return (
    <div className='text-center my-5 '>

        <h1 className='font-bold text-[#7D79EB]'>Summery</h1>
        <p className='text-xs mt-2'>{res_info?.summery}</p>
        <hr  className='mt-5 border-[#7D79EB] border-1'/>

        
      
    </div>
  )
}

export default Summery
