import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";

import Personalinfo from "./InputInfo/Personalinfo.jsx";
import { ArrowLeft, ArrowRight, Home, HomeIcon, LayoutDashboard, LayoutGrid } from "lucide-react";
import Summeryinfo from "./InputInfo/Summeryinfo.jsx";
import Experienceinfo from "./InputInfo/Experienceinfo.jsx";
import EducationInfo from "./InputInfo/EducationInfo.jsx";
import SkillsInfo from "./InputInfo/SkillsInfo.jsx";
import { useNavigate, useParams } from "react-router-dom";

function ResumeInfo() {
  const [activeidx, setactiveidx] = useState(3);

  const [activenext, setactivenext] = useState(false);

  const navigate = useNavigate();
  const {mytitle,docid} = useParams();

  return (
    <div
      className="h-[80vh] overflow-y-auto border-2 border-t-[17px] border-t-[#7D79EB] 
                rounded-2xl shadow-lg p-8 
                bg-white/20 backdrop-blur-md"
    >
      <div className="flex  justify-between ">
        <Button onClick={()=>navigate(`/dashboard`)} className="cursor-pointer bg-[#7D79EB]">
            <LayoutDashboard></LayoutDashboard>    Dashboard
        </Button>

        <div className="flex gap-1 ">
          {activeidx > 1 ? (
            <Button
              className="cursor-pointer bg-[#7D79EB]"
              onClick={() => setactiveidx(activeidx - 1)}
            >
              {" "}
              <ArrowLeft></ArrowLeft>
            </Button>
          ) : null}

          <Button
            className="cursor-pointer bg-[#7D79EB]"
            onClick={() => setactiveidx(activeidx + 1)}
            disabled={!activenext}
          >
            Next <ArrowRight></ArrowRight>
          </Button>
        </div>
      </div>

      {/* Pesonal details */}
      {activeidx == 1 ? (
        <Personalinfo setactivenext={setactivenext}></Personalinfo>
      ) : null}

      {/* Summery */}
      {activeidx == 2 ? (
        <Summeryinfo setactivenext={setactivenext}></Summeryinfo>
      ) : null}

      {/* professional experience */}
        {activeidx == 3 ? (
        <Experienceinfo setactivenext={setactivenext}></Experienceinfo>
        ):null}
      

      {/* Education */}
      {activeidx == 4 ? (
        <EducationInfo setactivenext={setactivenext}></EducationInfo>
        ):null}

      {/* skills       */}
       {activeidx == 5 ? (
        <SkillsInfo setactivenext={setactivenext}></SkillsInfo>
        ):null}

        {/* download and share */}
        {
          activeidx == 6?navigate(`/${mytitle}/${docid}/view&download`):null

        }


      
    </div>
  );
}

export default ResumeInfo;
