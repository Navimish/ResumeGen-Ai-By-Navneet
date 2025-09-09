import React, { useContext, useState } from 'react'
import { Input } from '../../components/ui/input'
import { ResumeInfocontext } from '../../Context/Resumeinfocontext';
import { Brain, Loader2, University } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { AIChatSession } from '../../../service/AiModal';
import { toast } from 'sonner';
import GlobalApi from '../../../service/GlobalApi';
import { useParams } from 'react-router-dom';

function EducationInfo({setactivenext}) {

        const formdata = {
        universityName: "",
        degree: "",
        major: "",
        
        startDate: "",
        endDate: "",
        description:""
    };
    const {res_info,setres_info} = useContext(ResumeInfocontext);

    const [list,setlist] = useState(res_info?.education?.length ? res_info.education :[formdata])

    const {docid} = useParams();


    const[loading,setloading] = useState(false);
    const [load,setload] = useState(false);

    // const [description,setdescription ] = useState("");

    const prompt =` i have done {major}, give some description about the role is 50 words so that i can add it into my resume ,⚠️ Important: Always return the response ONLY as valid JSON in the following format:
{"description": ["point1", "point2", "point3"]}`





    
    // function handledescp(e,idx){

    //     const newlist = list.slice();
    //     newlist[idx].description =e.target.value;


    //     setlist(newlist);

    //     setres_info({
    //         ...res_info,
    //         education : newlist

    //     })


    // }

   async function handleAi(idx){

    if(!res_info.education?.[idx]?.major){
        toast("Enter Your Major Please")
        return;
    }

            setloading(true)


        const PROMPT = prompt.replace('{major}', res_info.education[idx].major)

        const res = await AIChatSession.sendMessage(PROMPT);
        const responsetxt = res.response.text();
        const parsed = JSON.parse(responsetxt);
        const joinedSummary = parsed.description.join("\n");
        console.log(joinedSummary);

                const newlist = list.slice();
        newlist[idx].description = joinedSummary;


        setlist(newlist);

        setres_info({
            ...res_info,
            education : newlist

        })

        
       


        

        setloading(false);
    }

    function handleAdd(){
        setlist([
            ...list,formdata
        ])
    }

    function handleRemove(){
      const newlist = list.slice(0,-1);

      setlist(newlist)
    }

    function handleinput(e,idx){
        
        const newlist = list.slice();

        const {name,value} = e.target;

        newlist[idx][name] = value;

        setlist(newlist);
        
  

        setres_info({
            ...res_info,
            education : newlist
        })


    }

   async function save() {
    setload(true);

    const payload = list.map(edu => {
      const { id, ...restOfEdu } = edu;
      return {
        ...restOfEdu,
        startDate: restOfEdu.startDate === '' ? null : restOfEdu.startDate,
        endDate: restOfEdu.endDate === '' ? null : restOfEdu.endDate,
      };
    });

    const data = {
      education: payload
    };

    try {
      console.log("Sending updated education data:", JSON.stringify(data, null, 2));
      const updateresp = await GlobalApi.updateResume(data, docid);

      if (updateresp?.success || updateresp?.status == 200) {
        toast("Entry submitted/Updated");
      } else {
        toast("Process Failed");
      }

      setload(false);
      setactivenext(true);

    } catch (err) {
      console.error(err);
      toast("Entry Submission Failed");
      setload(false);
    }
}

  return (
    <div className='mt-7'>

            <h1 className="font-bold text-lg">Education details</h1>
            <h2 className="text-xs">Enter Your Education Details</h2>

        
        {
            list?.map((item,idx)=>(

        <div className='mt-7  text-xs border-2 p-7 rounded-md grid grid-cols-2 gap-3' key={idx}>

        

            <div className="mt-3">

            <label htmlFor="" className='font-bold'>University Name</label>
            <Input
            value={list[idx].universityName}
             className="mt-1" onChange ={(e)=>handleinput(e,idx)} name="universityName"></Input>
            </div>


            <div className="mt-3">

            <label htmlFor="" className='font-bold'>Degree</label>
            <Input
            value={list[idx].degree}
             className="mt-1" onChange ={(e)=>handleinput(e,idx)} name="degree"></Input>
            </div>


            <div className="mt-3"> 

            <label htmlFor="" className='font-bold'>Major</label>
            <Input className="mt-1" onChange ={(e)=>handleinput(e,idx)} name="major"
            value={list[idx].major}
            ></Input>
            </div>

            <div className="mt-3">

            <label htmlFor="" className='font-bold'>Start Date</label>
            <Input 
            value={list[idx].startDate}
            className="mt-1" type="date" onChange ={(e)=>handleinput(e,idx)} name="startDate"></Input>
            </div>
            
            <div className="mt-3">

            <label htmlFor="" className='font-bold'>End Date</label>
            <Input 
            value={list[idx].endDate}
            className="mt-1" type="date" onChange ={(e)=>handleinput(e,idx)} name="endDate"></Input>
            </div>

            <div className="mt-8 ml-5" >

                <Button variant="outline" className="cursor-pointer text-primary" onClick={()=>handleAi(idx)}>
                    {loading?<Loader2 className='animate-spin'></Loader2>:<>
                    <Brain></Brain> Generate With AI</>}
                    </Button>
            </div>

            <div className='col-span-2'>
                <Textarea 
                name = "description"
                value={list[idx].description} 

                  onChange ={(e)=>handleinput(e,idx)}></Textarea>
            </div>

        
      
        </div>

            ))
        }

        <div className='flex justify-between'>


        <div className="flex gap-2 mt-7">

        <Button variant="outline" className="cursor-pointer text-primary" onClick={handleAdd}>+ Add More Details</Button>
        <Button variant="outline" className="cursor-pointer text-primary" onClick={handleRemove} >- Remove Details</Button>
        </div>

        <Button onClick={save} className='mt-7 cursor-pointer '>{
            load?<Loader2 className='animate-spin'></Loader2>:"Save"
            
            }</Button>
        </div>
       
    </div>
  )
}

export default EducationInfo

