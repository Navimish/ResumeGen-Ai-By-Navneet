import React, { useContext } from "react";
import Personaldetails from "./Preview/Personaldetails";
import { ResumeInfocontext } from "../Context/Resumeinfocontext";
import Summery from "./Preview/Summery";
import PersonalExperience from "./Preview/Experience.jsx";
import Education from "./Preview/Education.jsx";
import Skills from "./Preview/Skills.jsx";

function ResumePreview() {
  return (
    <div  
       className="border-2 border-t-[17px] border-t-[#7D79EB] 
              shadow-lg p-8 
             bg-white/20 backdrop-blur-md"
    >
      {/* Pesonal details */}
      <Personaldetails></Personaldetails>

      {/* Summery */}
      <Summery></Summery>

      {/* professional experience */}
      <PersonalExperience></PersonalExperience>

      {/* Education */}
      <Education></Education>

      {/* skills       */}

      <Skills></Skills>
    </div>
  );
}

export default ResumePreview;
