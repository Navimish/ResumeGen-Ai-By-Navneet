import React, { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import RichtextEditor from "../../components/custom/RichtextEditor";

function Experienceinfo({ setactivenext }) {

    
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
    console.log(experiencelist)

  },[experiencelist])


  function handleinput(e,idx){
    const newlist = experiencelist.slice();

    const {name,value} =e.target;
    newlist[idx][name] = value;

    setexperiencelist(newlist)

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
      <h1 className="font-bold text-lg">Personal details</h1>
      <h2 className="text-xs">Enter Your Previous Job Experiences : </h2>

      <div>
        {experiencelist.map((item, idx) => (
          <div key={idx} className="border-2 p-7 rounded-md mt-5 mb-5">
            <div key={idx} className="grid grid-cols-2 gap-5 text-xs mt-7 font-bold">
              {/* title */}
              <div>
                <label className="mb-2 block">Job Title</label>
                <Input
                  name="title"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* companyName */}
              <div>
                <label className="mb-2 block">Company Name</label>
                <Input
                  name="companyName"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* city */}
              <div>
                <label className="mb-2 block">City</label>
                <Input
                  name="city"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* state */}
              <div>
                <label className="mb-2 block">State</label>
                <Input
                  name="state"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* startDate */}
              <div>
                <label className="mb-2 block">Start Date</label>
                <Input
                  type="Date"
                  name="startDate"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* endDate */}
              <div>
                <label className="mb-2 block">End Date</label>
                <Input
                  type="Date"
                  name="endDate"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* workSummery */}
              <div className="col-span-2">
                <h2 className="mb-2">Work Summery</h2>

              
              <RichtextEditor ></RichtextEditor>
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
