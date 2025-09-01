import React, { useContext, useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import RichtextEditor from "../../components/custom/RichtextEditor";
import { ResumeInfocontext } from "../../Context/Resumeinfocontext";

function Experienceinfo({ setactivenext }) {

    const {res_info, setres_info} = useContext(ResumeInfocontext);

    
    const formdata = {
        title: "",
        companyName: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
    };
    
    const [experiencelist, setexperiencelist] = useState([formdata]);


  useEffect(()=>{
   
        setres_info({
        ...res_info,
        experience :experiencelist
    })

  },[experiencelist])

  function handletextedit(e,name,idx){
        const newlist = experiencelist.slice();

        newlist[idx][name] = e;

        setexperiencelist(newlist);
  }


  function handleinput(e,idx){
    const newlist = experiencelist.slice();

    const {name,value} =e.target;
    newlist[idx][name] = value;

    setexperiencelist(newlist)

    setres_info({
        ...res_info,
        experience :newlist
    })

  }

  function handleAdd(){
    setexperiencelist(
        [...experiencelist,formdata]
    )
  }

  function handleRemove(){

    setexperiencelist(experiencelist.slice(0,-1))
  }

  return (
    <div className="mt-5">
      <h1 className="font-bold text-lg">Experiences :</h1>
      <h2 className="text-xs">Enter Your Previous Job Experiences : </h2>

      <div>
        {experiencelist.map((item, idx) => (
          <div key={idx} className="border-2 p-7 rounded-md mt-5 mb-5">
            <div key={idx} className="grid grid-cols-2 gap-5 text-xs mt-7 ">
              {/* title */}
              <div>
                <label className="mb-2 block font-bold">Job Title</label>
                <Input
                  name="title"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* companyName */}
              <div>
                <label className="mb-2 block font-bold">Company Name</label>
                <Input
                  name="companyName"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* city */}
              <div>
                <label className="mb-2 block font-bold">City</label>
                <Input
                  name="city"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* state */}
              <div>
                <label className="mb-2 block font-bold">State</label>
                <Input
                  name="state"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* startDate */}
              <div>
                <label className="mb-2 block font-bold">Start Date</label>
                <Input
                  type="Date"
                  name="startDate"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* endDate */}
              <div>
                <label className="mb-2 block font-bold">End Date</label>
                <Input
                  type="Date"
                  name="endDate"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* workSummery */}
              <div className="col-span-2">
                

              
              <RichtextEditor sendtoparent={(e)=>handletextedit(e,'workSummery',idx)} idx={idx} ></RichtextEditor>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <div className="flex gap-2">

        <Button variant="outline" className="cursor-pointer text-primary" onClick={handleAdd}>+ Add More Experience</Button>
        <Button variant="outline" className="cursor-pointer text-primary" onClick={handleRemove} >- Remove Experience</Button>
        </div>
        <Button className="cursor-pointer">save</Button>
      </div>
    </div>
  );
}

export default Experienceinfo;
