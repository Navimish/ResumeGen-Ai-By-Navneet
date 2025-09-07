import React, { useContext, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnNumberedList,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { Button } from "../ui/button";
import { Brain, Loader2 } from "lucide-react";
import { ResumeInfocontext } from "../../Context/Resumeinfocontext";
import { AIChatSession } from "../../../service/AiModal";
import { toast } from "sonner";

function RichtextEditor({ sendtoparent, idx, experiencelist }) {
  const { res_info, setres_info } = useContext(ResumeInfocontext);

  const [loading, setloading] = useState(false);

  const PROMPT = `
Generate 3-4 resume bullet points for the job title: {jobtitle}.
Keep them concise, professional, and achievement-driven.

⚠️ Important: Always return the response ONLY as valid JSON in the following format:
{"summary": ["point1", "point2", "point3"]}
`;

  async function handlegenerateai() {
    if (!res_info?.experience[idx].title) {
      toast("Please Enter Job Title");
      return;
    }
    setloading(true);

    const prompt = PROMPT.replace(
      "{jobtitle}",
      res_info?.experience[idx].title
    );
    console.log(prompt);

    try{

      
    const result = await AIChatSession.sendMessage(prompt);
    // console.log(result.response.text());

    const responsetxt = result.response.text();
    const parsed = JSON.parse(responsetxt);
    console.log(parsed);
    const joinedSummary = parsed.summary.join("\n"); // newline separated
    setvalue(joinedSummary);
    sendtoparent(joinedSummary);

    setloading(false);

    }catch(err){
      console.log(err);
      toast("Ai Generation Failed")
       setloading(false);
    }

  }

  const [value, setvalue] = useState();
  return (
    <div className="mt-3 text-xs">
      <div className="flex justify-between">
        <h2 className="mb-2 mt-2 font-bold">Work Summery</h2>

        <Button
          variant="outline"
          className="text-primary mb-2 cursor-pointer"
          onClick={handlegenerateai}
        >
          {loading ? (
            <Loader2 className="animate-spin"></Loader2>
          ) : (
            <>
              <Brain></Brain> Generate From Ai{" "}
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
        value={experiencelist[idx].workSummery}
          
          onChange={(e) => {
            setvalue(e.target.value);
            sendtoparent(e.target.value);
          }}
        ></Editor>
      </EditorProvider>
    </div>
  );
}

export default RichtextEditor;
