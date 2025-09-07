import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FileText } from 'lucide-react' // icon

function ResumeCard({ eachresume }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() =>
        navigate(`/dashboard/edit/${eachresume.title}/${eachresume.documentId}`)
      }
      className="group cursor-pointer transition-all"
    >
      <div className="relative h-[240px] w-[200px] rounded-2xl border border-grey-300 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-gray-400/70 transition-all flex flex-col items-center justify-center">
    
        <FileText className="h-12 w-12 text-purple-600 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(156,163,175,0.9)] transition-transform" />

        
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 h-1 w-2/3 bg-purple-500 rounded-full opacity-50 group-hover:opacity-90 group-hover:shadow-[0_0_25px_rgba(156,163,175,0.9)] transition-all"></div>
      </div>

      <div className="mt-3 text-center text-sm font-semibold text-gray-700 group-hover:text-purple-600 group-hover:drop-shadow-[0_0_12px_rgba(156,163,175,0.85)] transition-colors">
        {eachresume.title}
      </div>
    </div>
  )
}

export default ResumeCard
