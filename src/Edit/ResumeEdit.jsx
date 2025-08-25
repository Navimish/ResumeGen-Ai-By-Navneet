import React, { useEffect, useState } from "react";
import ResumeInfo from "./ResumeInfo";
import ResumePreview from "./ResumePreview";
import { ResumeInfocontext } from "../Context/Resumeinfocontext";
import dummy from "../dummy";

function ResumeEdit() {

  const [res_info, setres_info] = useState();

  useEffect(()=>{
    setres_info(dummy);
  },[])


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
