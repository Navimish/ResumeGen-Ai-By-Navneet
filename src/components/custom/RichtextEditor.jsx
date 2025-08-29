import React, { useState } from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnNumberedList, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'

function RichtextEditor() {

    const[value,setvalue] = useState();
  return (
    <div>
    <EditorProvider>

    <Editor value={value} onChange={(e)=>setvalue(e.target.value)}>
      <Toolbar>
         <Separator />
        <BtnNumberedList />
        <BtnBulletList />
        <BtnBold />
        <BtnItalic />
      </Toolbar>
    </Editor>
    </EditorProvider>
      
    </div>
  )
}

export default RichtextEditor


