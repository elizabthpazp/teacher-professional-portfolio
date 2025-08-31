import React from 'react';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 dark:bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200/40 dark:bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-indigo-200/35 dark:bg-indigo-400/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-16 w-12 h-12 bg-blue-300/45 dark:bg-blue-300/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-300/50 dark:bg-purple-300/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-indigo-300/40 dark:bg-indigo-300/25 rounded-full animate-float" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-blue-400/30 dark:bg-blue-400/20 rounded-full animate-float" style={{animationDelay: '2.2s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/15 dark:to-purple-500/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 dark:from-indigo-500/15 dark:to-blue-500/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-10 w-28 h-28 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/15 dark:to-pink-500/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
        <div className="mb-4 inline-block relative">
  {/* Decorative rings around profile - Fixed positioning */}
  
  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-xl transform hover:scale-105 transition-transform duration-300 relative z-10">
    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
      <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-inner overflow-hidden">
        <img src="/profile.png" alt="Isabel Portal" className="w-full h-full object-cover rounded-full"/>
      </div>
    </div>
  </div>
</div>

          {/* Main Content */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-400 dark:via-purple-400 dark:to-blue-500 bg-clip-text text-transparent animate-gradient">
                Isabel Portal
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
              Digital Marketing Strategist | Certified Community Manager | Technology Teacher
            </p>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Driving innovation in education through digital strategies. PhD dedicated to excellence in learning and Spanish language teaching.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                onClick={() => scrollToSection('spanish-classes')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white px-8 py-5 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-gradient"
              >
                <span>See Spanish Classes</span>
                <ArrowRight className="ml-2" size={18} />
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-5 rounded-full transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 backdrop-blur-sm bg-white/80 dark:bg-slate-800/80"
              >
                <a href="mailto:isapd71@gmail.com" className="flex items-center">
                <Mail className="mr-2" size={18} />
                Contact
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a 
                href="https://www.facebook.com/isabel.portaldiaz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-white/20 dark:border-slate-700/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href="https://twitter.com/isa_portald?s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-white/20 dark:border-slate-700/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/isabel-portal-diaz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-white/20 dark:border-slate-700/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.instagram.com/isaportald/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-white/20 dark:border-slate-700/50"
              >
              <svg     width="25px"
            height="25px" fill="currentColor" className=" group-hover:fill-gray-300"
            id="Layer_1" version="1.1" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" ><g><path d="M505,257c0,34.8-0.7,69.7,0.2,104.5c1.5,61.6-37.2,109.2-86.5,130.4c-19.8,8.5-40.6,13-62.1,13c-67.3,0.1-134.7,1-202-0.3   c-50.7-1-92.4-22.2-122.3-64c-15.7-22-23.2-47-23.2-74.1c0-71.7,0-143.3,0-215c0-58.5,28.5-99.4,79.1-126C110.2,14,134.1,9.1,159,9   c65.3,0,130.7-0.4,196,0.2c50.7,0.4,93,19.8,124.2,60.6c17.4,22.8,25.8,49,25.8,77.8C505,184,505,220.5,505,257z M46,257   c0,36.7,0,73.3,0,110c0,16.4,3.8,31.8,12.3,45.7c22.3,36.5,56,54.3,97.8,55c67.1,1,134.3,0.4,201.5,0.2c16.5,0,32.5-3.4,47.4-10.5   c40.6-19.4,63.3-50.3,63.1-96.7c-0.4-71-0.1-142-0.1-213c0-20.1-5.7-38.5-17.6-54.7c-23-31.1-54.8-46.4-92.8-46.8   c-67-0.8-134-0.3-201-0.2c-14.3,0-28.1,2.9-41.5,7.9c-36.8,13.7-71,48.4-69.4,99.5C46.9,188,46,222.5,46,257z"/><path d="M257.6,363c-64.5,0-116.5-51.4-116.6-115.4c-0.1-63,52.3-114.6,116.4-114.6c64.3-0.1,116.5,51.4,116.6,114.9   C374,311.3,321.9,362.9,257.6,363z M257.6,326c43.9,0,79.5-35.1,79.4-78.3c-0.1-42.8-35.7-77.8-79.4-77.8   c-43.9,0-79.7,34.9-79.7,78C178,291.1,213.7,326.1,257.6,326z"/><path d="M387.5,98c13.5,0,24.5,11.5,24.5,25.6c-0.1,14.1-11.2,25.5-24.7,25.4c-13.3-0.1-24.2-11.5-24.2-25.3   C363,109.6,374,98,387.5,98z"/></g></svg>
             
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;