import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../../components/ui/input';
import { ResumeInfocontext } from '../../Context/Resumeinfocontext';
import { Button } from '../../components/ui/button';
import { Loader2 } from 'lucide-react';
import GlobalApi from '../../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import Rating from '@mui/material/Rating';


function SkillsInfo({setactivenext}) {

  

    const skilldata = {
    skill : '',
    rating : 0
  }

  const {res_info,setres_info}= useContext(ResumeInfocontext);
  const [skilllist,setskilllist] = useState(res_info?.skills?.length ? res_info.skills :[skilldata]);
  const [loading,setloading] = useState(false);
  const {docid} = useParams();

  function handleAdd() {
  setskilllist([...skilllist, skilldata]);
}

function handleRemove() {
  if (skilllist.length > 1) {
    setskilllist(skilllist.slice(0, -1));
  }
}



  useEffect(()=>{

    setres_info({
      ...res_info,
      skills:skilllist
    })


  },[skilllist])

  function handlechange(e,idx){

    const newlist = [...skilllist];
    const {name ,value} = e.target;

    newlist[idx][name] = value;

    setskilllist(newlist);

    setres_info({
      ...res_info,
      skills: newlist
    })




  }

      async function handlesave(){

      setloading(true);

      const data = {
        skills : skilllist
      }

      try{
              const res = await GlobalApi.updateResume(data,docid);

      if(res?.success || res?.status == 200){
        toast("Entry Updated/Submitted")
      }else{
         toast("Entry Updation/Submition Failed")
      }

      setloading(false)
      setactivenext(true);
     

      }catch(err){
        console.log(err);
        toast("Entry Updation/Submition Failed")
        setloading(false)

      }


    }

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-15">Skills</h1>
      <h2 className=" text-center text-xs ">Enter Your Skills : </h2>

      <div className=' justify-center mt-7 '>
        {
          skilllist.map((item,idx)=>(
            <div key ={idx} className='mt-7  border-2 p-7 rounded-md gap-3 '>

              <div>


              <label className=' font-bold'>Enter Your Skill : </label>
              <Input value ={skilllist[idx].skill} onChange = {(e)=>handlechange(e,idx)} name="skill" placeholder ="eg : React" className="mt-1"></Input>
              </div>

              <div className='mt-7 flex gap-2'>


              <label className=' font-bold'>Enter Your Rating : </label>
              {/* <Input onChange = {(e)=>handlechange(e,idx)} name= "rating" placeholder ="eg : 20,30" className="mt-1"></Input> */}
              <Rating value ={skilllist[idx].rating} className ="size-medium " name="rating"  defaultValue={0} onChange={(e)=>handlechange(e,idx)} />
              </div>

            </div>
          ))
        }

      
      </div>

        <div className='flex justify-between mt-7'>


        <div className="flex gap-3 mt-5">
              <Button className='cursor-pointer' variant="outline" type="button" onClick={handleAdd}>+ Add Skill</Button>
              <Button className='cursor-pointer'  variant="outline"type="button" onClick={handleRemove}>- Remove Skill</Button>
        </div>

        <Button className='mt-5 cursor-pointer' onClick={handlesave}>{
          loading?<Loader2 className='animate-spin'></Loader2>:"Save"
          }</Button>
        </div>

      
    </div>
  )
}

export default SkillsInfo
