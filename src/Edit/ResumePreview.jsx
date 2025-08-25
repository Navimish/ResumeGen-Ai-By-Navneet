import React, { useContext } from 'react'
import Personaldetails from './Preview/Personaldetails'
import { ResumeInfocontext } from '../Context/Resumeinfocontext'
import Summery from './Preview/Summary'
import PersonalExperience from './Preview/Experience.jsx'
import Education from './Preview/Education.jsx'
import Skills from './Preview/Skills.jsx'


function ResumePreview() {

  return (
    <div  className="h-[80vh] overflow-y-auto border-2 border-t-[17px] border-t-[#7D79EB] 
                rounded-2xl shadow-lg p-8 
                bg-white/20 backdrop-blur-md">

        {/* Pesonal details */}
        <Personaldetails ></Personaldetails>


        {/* summary */}
        <Summery></Summery>

        {/* professional experience */}
        <PersonalExperience></PersonalExperience>


        {/* Education */}
        <Education></Education>

        {/* skills       */}

        <Skills></Skills>
    </div>
  )
}

export default ResumePreview
