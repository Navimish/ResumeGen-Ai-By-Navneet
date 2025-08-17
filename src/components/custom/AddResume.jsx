import React, { useState } from "react";
import { Loader2, PlusSquare } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import { useUser } from "@clerk/clerk-react";
import GlobalApi from "../../../service/GlobalApi";



function AddResume() {

    const [opendialog,setopendialog] = useState(false);
    const [resumename,setresumename] = useState("");
    const {user} = useUser();
    const [loading,setloading] = useState(false);
    const navigate = useNavigate();

    async function handlecreate(){
        setloading(true);
        const resumeid = uuidv4();
        const data = {
            title : resumename,
            resumeid : resumeid,
            userEmail : user?.primaryEmailAddress?.emailAddress,
            userName : user?.fullName


        }

        await GlobalApi.createResume(data).then((res)=>console.log(res.data)
        )

        setloading(false);
        navigate(`/dashboard/${resumeid}/edit`)
        

        
    }


  return (
    <div>
      <div onClick={()=>setopendialog(true)} className=" ml-50 mt-10 border-dashed border-2 h-[240px] w-[200px] bg-gray-200 flex items-center justify-center rounded-2xl shadow-md hover:bg-gray-300 hover:scale-105 cursor-pointer transition-all">
        <PlusSquare className="text-gray-600"></PlusSquare>
      </div>


            <Dialog open ={opendialog}>
        
        <DialogContent>
            <DialogHeader>
            <DialogTitle className="font-bold text-2xl">
                Create New Resume
            </DialogTitle>
              Add Title For Your New Resume
            <div className='mt-5'>
                

            <Input onChange={(e)=>setresumename(e.target.value)}></Input>
                <div className="mt-5 flex justify-end gap-3 ">
                    <Button variant='outline' className='cursor-pointer' onClick={()=>setopendialog(false)}>Close</Button>
                    <Button disabled={!resumename || loading}
                     onClick={handlecreate} className='cursor-pointer'>{
                         loading?<Loader2 className="animate-spin"></Loader2>:'Create'
                        }</Button>
                </div>
             </div>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    </div>


  );
}

export default AddResume;
