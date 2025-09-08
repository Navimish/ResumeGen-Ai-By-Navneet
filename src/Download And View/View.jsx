import React, { useEffect, useState } from 'react'
import { RouterProvider, useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import ResumePreview from '../Edit/ResumePreview'
import GlobalApi from '../../service/GlobalApi';
import { ResumeInfocontext } from '../Context/Resumeinfocontext';
import Header from '../components/custom/Header';

function View() {

    const [res_info, setres_info] = useState();
    const {docid,mytitle} = useParams();

    useEffect(()=>{
        getResumeDetail();
      
    },[])

    async function getResumeDetail(){

        const res = await GlobalApi.getResumebyid(docid);

        if(res?.status == 200){
            console.log(res.data.data)
        }else{
            console.log('Response Failed')
        }

        setres_info(res.data.data)
    }

    function handleDownload(){
        window.print();
    }

    async function handleShare(){
        if (navigator.share) {
            try {
                await navigator.share({
                    text:`Hello Their, This is mu ${mytitle} resume , Please open it` ,
                    url: import.meta.env.VITE_Base_url + `/${mytitle}/${docid}/view&download`,
                    title: `${res_info?.firstName} ${res_info?.lastName} rResume`,
                })
                console.log("shared successfully!")
            } catch (err) {
                console.error("Error sharing:", err)
            }
        } else {
            alert("Sharing not supported on this browser.")
        }
    }

    
  return (

    <ResumeInfocontext.Provider value={{res_info, setres_info}} >

    <div  id='no-print'>
            
        <Header></Header>

        <div className='mt-10'>


        <h1 className='text-center text-2xl font-medium'>Congratulations ResumeGen Has Generated Your Ai Based Resume</h1>
        <h1 className='text-center  '>Now You Can Download And Share Your Resume</h1>
        <h1></h1>

        <div className='flex justify-center gap-200 mt-10'>
            <Button className='cursor-pointer' onClick={handleDownload}>Download</Button>
            <Button className='cursor-pointer' onClick={handleShare}>Share</Button>
        </div>

        </div>
     

      
    </div>

        <div id="print-area" 
            className='w-[80vw] mx-auto flex justify-center mt-10 mb-10'> 
                    
            <ResumePreview></ResumePreview>
        </div>



    </ResumeInfocontext.Provider>
  )
}

export default View
