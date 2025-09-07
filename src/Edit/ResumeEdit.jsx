import React, { useEffect, useState } from "react";
import ResumeInfo from "./ResumeInfo";
import ResumePreview from "./ResumePreview";
import { ResumeInfocontext } from "../Context/Resumeinfocontext";
import dummy from "../dummy";
import { useParams } from "react-router-dom";
import GlobalApi from "../../service/GlobalApi";

function ResumeEdit() {

  const [res_info, setres_info] = useState();
  const {docid} = useParams();

  useEffect(()=>{
    // setres_info(dummy);
    getResumeDetail();

  },[])

  async function getResumeDetail(){

    const res = await GlobalApi.getResumebyid(docid);

    if(res?.status == 200){
      console.log(res.data.data)
      setres_info(res.data.data)
    }
  }




  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">

      <ResumeInfocontext.Provider  value ={{res_info,setres_info}}>

          {/* form section */}
          <ResumeInfo ></ResumeInfo>

          {/* preview section */}
          <ResumePreview ></ResumePreview>
      </ResumeInfocontext.Provider>
    </div>
  );
}

export default ResumeEdit;
