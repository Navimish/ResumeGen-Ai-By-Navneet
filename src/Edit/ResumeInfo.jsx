import React, { useState } from 'react'
import { Button } from '../components/ui/button.jsx';

import Personalinfo from './InputInfo/Personalinfo.jsx'
import { ArrowLeft, ArrowRight,  LayoutGrid } from 'lucide-react'

function ResumeInfo() {

  const [activeidx,setactiveidx] = useState(1);

  const [activenext,setactivenext] = useState(false);




  return (
    <div className="h-[80vh] overflow-y-auto border-2 border-t-[17px] border-t-[#7D79EB] 
                rounded-2xl shadow-lg p-8 
                bg-white/20 backdrop-blur-md">

        <div className='flex  justify-between '>

            <Button className="cursor-pointer bg-[#7D79EB]" ><LayoutGrid></LayoutGrid>Theme</Button>

          <div className='flex gap-1 '>
            {

             activeidx>1?<Button className="cursor-pointer bg-[#7D79EB]" onClick={()=>setactiveidx(activeidx-1)}> <ArrowLeft></ArrowLeft></Button>:
             null

            }
            

              <Button className="cursor-pointer bg-[#7D79EB]" onClick={()=>setactiveidx(activeidx+1)} disabled ={!activenext}>Next <ArrowRight></ArrowRight></Button>
            
          </div> 
        </div>

       


        {/* Pesonal details */}
        {
          activeidx==1?<Personalinfo setactivenext = {setactivenext}></Personalinfo>:null

        }
        


        {/* summary */}
        

        {/* professional experience */}
        


        {/* Education */}
        

        {/* skills       */}

       

     
        

      
    </div>
  )
}

export default ResumeInfo
