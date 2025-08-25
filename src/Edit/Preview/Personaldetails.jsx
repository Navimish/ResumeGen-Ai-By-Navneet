import React, { useContext } from 'react'
import { ResumeInfocontext } from '../../Context/Resumeinfocontext';

function Personaldetails() {
    const { res_info } = useContext(ResumeInfocontext);
  return (
    <div className='justify-center text-xs'
    style={{textAlign:'center'}}>

        <h1 className='font-bold'>{res_info?.firstName} {res_info?.lastName}</h1>
        <h1 className='font-bold'>{res_info?.jobTitle} </h1>
        <h1 className=''>{res_info?.address} </h1>

        <div className='flex justify-between'>
            <h2>{res_info?.phone}</h2>
            <h2>{res_info?.email}</h2>
        </div>

        <hr  className='mt-2 border-[#7D79EB] border-1'/>
      
    </div>
  )
}

export default Personaldetails
