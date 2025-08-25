import React, { useContext, useState } from "react";
import { Input } from "../../components/ui/input.jsx";
import { ResumeInfocontext } from "../../Context/Resumeinfocontext";
import { useParams } from "react-router-dom";
import { Button } from "../../components/ui/button.jsx";
import GlobalApi from "../../../service/GlobalApi.jsx";

function Personalinfo({ setactivenext }) {
  const { res_info, setres_info } = useContext(ResumeInfocontext);

  const {docid} = useParams();

  const [formdata,setformdata] = useState({});


  async function onsave(e){
    e.preventDefault();
    setactivenext(true)

    

    const data = formdata;



    const res = await GlobalApi.updateResume(data,docid);

   


    
  }

  function handleinput(e) {
    setactivenext(false);

    const { name, value } = e.target;

    setres_info({
      ...res_info,
      [name]: value,
    });

    setformdata({
      ...formdata,
      [name]:value
    })

  }
  return (
    <div className="mt-5">
      <h1 className="font-bold text-lg">Personal details</h1>
      <h2 className="text-xs">Enter Your Details</h2>

      <form onSubmit={onsave}>
        <div className="grid grid-cols-2 gap-5">
          <div className="mt-3">
            <label htmlFor="">First Name</label>
            <Input
              name="firstName"
              required
              onChange={(e) => handleinput(e)} defaultValue={res_info?.firstName}
            ></Input>
          </div>

          <div className="mt-3">
            <label htmlFor="">Last Name</label>
            <Input
              name="lastName"
              required
              onChange={(e) => handleinput(e)} defaultValue={res_info?.lastName}
            ></Input>
          </div>

          <div className="mt-3 col-span-2">
            <label htmlFor="">Job Description</label>
            <Input
              name="jobTitle"
              required
              onChange={(e) => handleinput(e)} defaultValue={res_info?.jobTitle}
            ></Input>
          </div>

          <div className="mt-3 col-span-2">
            <label htmlFor="">Address</label>
            <Input
              name="address"
              required
              onChange={(e) => handleinput(e)} defaultValue={res_info?.address}
            ></Input>
          </div>

          <div className="mt-3">
            <label htmlFor="">Phone Number</label>
            <Input
              name="phone"
              required
              onChange={(e) => handleinput(e)} defaultValue={res_info?.phone}
            ></Input>
          </div>

          <div className="mt-3">
            <label htmlFor="">Email</label>
            <Input
              name="email"
              required
              onChange={(e) => handleinput(e)} defaultValue={res_info?.email}
            ></Input>
          </div>
        </div>

        <div className="mt-5 flex w-full justify-end">
          <Button className="cursor-pointer bg-[#7D79EB]" type="Submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Personalinfo;
