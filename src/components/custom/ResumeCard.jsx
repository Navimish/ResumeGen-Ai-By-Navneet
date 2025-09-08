import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Loader2, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import GlobalApi from "../../../service/GlobalApi";
import { toast } from "sonner";

function ResumeCard({ eachresume,refreshdata }) {
  const navigate = useNavigate();
  const [openAlert, setopenAlert] = useState(false);
  const [loading,setloading] = useState(false);


  async function handledelete(){

    setloading(true);
    try{

      const res = await GlobalApi.deleteResumebyid(eachresume.documentId);
      if(res?.status == 200){
        toast("Resume Deleted successfully")
      }

    }catch(err){
      console.log(err);
      toast("Deletion Failed")

    }
    setloading(false);
    setopenAlert(false);
    refreshdata();
  }

  return (
    <div>
      <div
        onClick={() =>
          navigate(
            `/dashboard/edit/${eachresume.title}/${eachresume.documentId}`
          )
        }
        className="group cursor-pointer transition-all"
      >
        <div className="relative h-[240px] w-[200px] rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 transition-all flex flex-col items-center justify-center overflow-hidden">
          <FileText className="h-14 w-14 text-purple-600 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.9)] transition-transform duration-300" />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-1.5 w-2/3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] transition-all"></div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[200px] mt-4 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-50 via-white to-purple-50 backdrop-blur-md text-center text-sm font-bold text-gray-700 tracking-wide group-hover:text-purple-700 group-hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.8)] transition-all duration-300 shadow-lg hover:scale-105">
        <span className="truncate max-w-[140px]">{eachresume.title}</span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <MoreHorizontal className="cursor-pointer h-5 w-5 text-gray-500 group-hover:text-purple-600 transition-colors duration-300"></MoreHorizontal>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() =>
                navigate(
                  `/dashboard/edit/${eachresume.title}/${eachresume.documentId}`
                )
              }
            >
              Edit
            </DropdownMenuItem>

            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() =>
                navigate(
                  `/${eachresume.title}/${eachresume.documentId}/view&download`
                )
              }
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() =>
                navigate(
                  `/${eachresume.title}/${eachresume.documentId}/view&download`
                )
              }
            >
              Download
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setopenAlert(true)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                resume and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer" onClick={()=>setopenAlert(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction className="cursor-pointer" onClick={handledelete}>
                { loading?<Loader2 className="animate-spin"></Loader2>:"Delete"
                
                }</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default ResumeCard;
