import React, { useState, useEffect } from 'react';
import { ChevronRight, FileText, Zap, Download, Star, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ResumeGenHomePage() {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: FileText, title: "Professional Templates", description: "Choose from modern, ATS-friendly designs" },
    { icon: Zap, title: "Instant Generation", description: "Create your resume in minutes, not hours" },
    { icon: Download, title: "Multiple Formats", description: "Download as PDF, Word, or print-ready" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20" style={{ backgroundColor: '#7D79EB' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-15" style={{ backgroundColor: '#7D79EB' }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 w-6 h-6 rounded-full opacity-30 animate-bounce" style={{ backgroundColor: '#7D79EB', animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 rounded-full opacity-40 animate-bounce" style={{ backgroundColor: '#7D79EB', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 rounded-full opacity-25 animate-bounce" style={{ backgroundColor: '#7D79EB', animationDelay: '2s' }}></div>
      </div>



      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative mb-8">
              {/* Decorative elements around title */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full" style={{ backgroundColor: '#7D79EB' }}></div>
              
              <h1 className="text-7xl md:text-9xl font-black mb-4 relative">
                <h1 className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Resume
                <span  style={{ color: '#7D79EB' }}>Gen</span>
                </h1>
              </h1>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-px bg-gray-300 flex-1 max-w-20"></div>
                <span className="text-2xl md:text-3xl text-gray-500 font-light px-4">By</span>
                <div className="h-px bg-gray-300 flex-1 max-w-20"></div>
              </div>
              
              <div className="relative inline-block">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 relative z-10">
                  Navneet Mishra
                </h2>
                <div className="absolute -bottom-3 left-0 w-full h-4 opacity-30 rounded-lg" style={{ backgroundColor: '#7D79EB' }}></div>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create stunning, professional resumes that get you noticed. 
              <span className="font-bold" style={{ color: '#7D79EB' }}> AI-powered, ATS-friendly, and beautifully designed.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <button onClick={()=>navigate('/dashboard')} className="cursor-pointer group text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3 shadow-lg" style={{ backgroundColor: '#7D79EB' }}>
                <span>Start Creating</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </div>

          {/* Features Grid */}
          <div 
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white border border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                >
                  {/* Subtle background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl" style={{ background: `linear-gradient(135deg, #7D79EB, transparent)` }}></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#7D79EB15' }}>
                      <feature.icon className="w-8 h-8" style={{ color: '#7D79EB' }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div 
            className={`transform transition-all duration-1000 delay-900 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: '#7D79EB' }}>10k+</div>
                  <div className="text-gray-600 font-medium">Resumes Created</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: '#7D79EB' }}>95%</div>
                  <div className="text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: '#7D79EB' }}>50+</div>
                  <div className="text-gray-600 font-medium">Templates</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-gray-600 font-medium">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 mt-16 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2024 ResumeGen by Navneet. Crafted with <span style={{ color: '#7D79EB' }}>❤️</span> for job seekers worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
}