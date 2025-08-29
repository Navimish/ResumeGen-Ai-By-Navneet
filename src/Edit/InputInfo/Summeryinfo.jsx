import React, { useContext, useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Brain, Loader2 } from "lucide-react";
import { ResumeInfocontext } from "../../Context/Resumeinfocontext";
import GlobalApi from "../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { AIChatSession } from "../../../service/AiModal";
import { toast } from "sonner";

function Summeryinfo({ setactivenext }) {
  const { docid } = useParams();

  const [Summery, setSummery] = useState("");

  const { res_info, setres_info } = useContext(ResumeInfocontext);

  const [loading, setloading] = useState(false);

  const prompt = "Job Title : {jobTitle} , Give me a 4 to 5 line summary for my resume in json format"

  async function handleaisession(){

    setloading(true)
    const PROMPT = prompt.replace('{jobTitle}', res_info?.jobTitle)
        console.log(PROMPT);


    const result = await AIChatSession.sendMessage(PROMPT)
    console.log(result.response.text());

    const responsetxt = result.response.text();
    const parsed = JSON.parse(responsetxt)

    const summerytxt = parsed.summary.join(" ");

    setSummery(summerytxt);

    setloading(false)

  }

    useEffect(() => {
    setactivenext(false);
  }, []);



  useEffect(() => {
    setactivenext(false)
    setres_info({
      ...res_info,
      summery: Summery,
    });

  }, [Summery]);

  async function onsave(e) {
    e.preventDefault();

    setloading(true);

    const data = {
      
        summery:Summery,
    
    };

    const res = await GlobalApi.updateResume(data, docid);

    setloading(false);

    setactivenext(true);

    toast("Entry has been updated")
  }

  return (
    <div className="mt-5">
      <h1 className="font-bold text-2xl text-center mt-15">Summery details</h1>
      <h2 className=" text-center text-xs">Enter Your Career Summery</h2>

      <div className="flex justify-center">
        <Button
          variant="outline" type="button"
          className="text-[#6D55AD] border-[#6D55AD] mt-9 cursor-pointer flex"
          onClick ={handleaisession}
        >
          <Brain></Brain>
          Generate Through AI
        </Button>
      </div>

      <form onSubmit={onsave}>
        <Textarea
          className="mt-15"
          onChange={(e) => setSummery(e.target.value)} value={Summery || res_info?.summery || ""}
        ></Textarea>
        <div className="mt-5 flex w-full justify-end">
          <Button className="cursor-pointer bg-[#7D79EB]" type="Submit">
            {loading ? <Loader2 className="animate-spin"></Loader2> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Summeryinfo;
