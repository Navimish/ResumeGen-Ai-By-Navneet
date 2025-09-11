import React, { useContext, useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import RichtextEditor from "../../components/custom/RichtextEditor";
import { ResumeInfocontext } from "../../Context/Resumeinfocontext";
import GlobalApi from "../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Brain, Loader2 } from "lucide-react";
import { Textarea } from "../../components/ui/textarea";
import { AIChatSession } from "../../../service/AiModal";

function Experienceinfo({ setactivenext }) {
  const { res_info, setres_info } = useContext(ResumeInfocontext);

  const { docid } = useParams();

  const formdata = {
    title: "",
    companyName: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    workSummery: "",
  };

  const [experiencelist, setexperiencelist] = useState(res_info?.experience?.length ? res_info.experience :[formdata]);
  const [loading, setloading] = useState(false);
  const[aiload,setaiload] = useState(false);

  const prompt  = `Generate a summary of 2 to 3 lines for a resume for work summary as a {jobtitle} Important: Always return the response ONLY as valid JSON in the following format:
{"resumeSummery": ["point1", "point2", "point3"]} and also parsed key will be resumeSummery not resumesummary
;`

  async function handleAi(idx){

    setaiload(true);

    if(!experiencelist?.[idx].title){
      toast("Please Enter Job Title")
      return;
    }

    const PROMPT = prompt.replace("{jobtitle}", experiencelist?.[idx].title)
    // console.log(PROMPT);

    const res = await AIChatSession.sendMessage(PROMPT);
    const responsetxt = res.response.text();
    const parsed = JSON.parse(responsetxt);
    // console.log(parsed);
    const joinedSummary = parsed.resumeSummery.join("\n");
        // console.log(joinedSummary);


        const newlist = experiencelist.slice();
        newlist[idx].workSummery = joinedSummary;

        setexperiencelist(newlist);

        setres_info({
          ...res_info,
          experience : newlist
        })

        setaiload(false);

  }

  // useEffect(() => {
  //   if (res_info?.experience) {
  //     setexperiencelist(res_info.experience);
  //     // console.log(res_info.experience);
  //   }
  // }, [res_info]);

  // function handletextedit(e,name,idx){
  //       const newlist = experiencelist.slice();

  //       newlist[idx][name] = e;

  //       setexperiencelist(newlist);
  //           setres_info({
  //       ...res_info,
  //       experience :newlist
  //   })
  // }

  function handleinput(e, idx) {
    const newlist = experiencelist.slice();

    const { name, value } = e.target;
    newlist[idx][name] = value;

    setexperiencelist(newlist);

    setres_info({
      ...res_info,
      experience: newlist,
    });
  }

  function handleAdd() {
    setexperiencelist([...experiencelist, formdata]);
  }

  function handleRemove() {
    
    setexperiencelist(experiencelist.slice(0, -1));
  }

async function handlesave() {
    const invalid = experiencelist.some((exp) => !exp.title);

    if (invalid) {
      toast("Please Enter Title First");
      return;
    }

    setloading(true);

    const payload = experiencelist.map(exp => {
      // destructure id
      const { id, ...restOfExp } = exp; 

      // Return the rest of the object
      return {
        ...restOfExp,
        startDate: restOfExp.startDate === '' ? null : restOfExp.startDate,
        endDate: restOfExp.endDate === '' ? null : restOfExp.endDate,
      };
    });

    try {
      const data = {
        experience: payload 
      };

      console.log("Final data being sent:", JSON.stringify(data, null, 2));
      const res = await GlobalApi.updateResume(data, docid);
      
      if (res?.success || res?.status == 200) {
        toast("Entry Submitted/Updated");
      }

      setloading(false);
      setactivenext(true);
    } catch (err) {
      console.error(err); 
      toast("Submission Failed. Check console for details.");
      setloading(false);
    }
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
                  value={experiencelist[idx].title}
                  name="title"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* companyName */}
              <div>
                <label className="mb-2 block font-bold">Company Name</label>
                <Input
                  value={experiencelist[idx].companyName}
                  name="companyName"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* city */}
              <div>
                <label className="mb-2 block font-bold">City</label>
                <Input
                  value={experiencelist[idx].city}
                  name="city"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* state */}
              <div>
                <label className="mb-2 block font-bold">State</label>
                <Input
                  value={experiencelist[idx].state}
                  name="state"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* startDate */}
              <div>
                <label className="mb-2 block font-bold">Start Date</label>
                <Input
                  value={experiencelist[idx].startDate}
                  type="Date"
                  name="startDate"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

              {/* endDate */}
              <div>
                <label className="mb-2 block font-bold">End Date</label>
                <Input
                  value={experiencelist[idx].endDate}
                  type="Date"
                  name="endDate"
                  onChange={(e) => handleinput(e, idx)}
                ></Input>
              </div>

                <div>
                  <Button onClick={()=>handleAi(idx)} variant="outline" className="cursor-pointer  text-primary">{
                    aiload?<Loader2 className="animate-spin"></Loader2>:<><Brain></Brain> Generate Work Summery</>
                    }</Button>
                </div>

              {/* workSummery */}
              <div className="col-span-2 text-xs">
                <Textarea
                  value={experiencelist[idx].workSummery}
                  name="workSummery"
                  onChange={(e) => handleinput(e, idx)}
                ></Textarea>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="cursor-pointer text-primary"
            onClick={handleAdd}
          >
            + Add More Experience
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer text-primary"
            onClick={handleRemove}
          >
            - Remove Experience
          </Button>
        </div>
        <Button onClick={()=>{handlesave()}} className="cursor-pointer bg-[#7D79EB]">
          {loading ? <Loader2 className="animate-spin"></Loader2> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Experienceinfo;
