import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Globe, BookOpen, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
      <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Profile Content */}
      <div className="space-y-6">
        <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Professional Profile</h3>
          </div>
          
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              - Passionate about digital marketing and technology, with over 20 years of experience helping businesses and educational projects grow through innovative digital strategies.
            </p>
            <p>
              - I have managed marketing campaigns that increased brand engagement on social media by 30%. In addition, I have trained more than 1,000 students in technological tools.
            </p>
            <p>
              - Currently, I am looking to collaborate on digital marketing projects to bring value through creative, data-driven strategies.
            </p>  
          </div>

          {/* Specialties */}
          <div className="mt-6">
            <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Areas of Expertise:</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Educational Technologies
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Community Management
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Digital Marketing
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                Tourism Research
              </Badge>
              <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                Spanish Teaching
              </Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Contact Info (optional, commented out) */}
      {/* 
      <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
        <div className="flex items-center mb-6">
          <Mail className="text-blue-600 dark:text-blue-400 mr-3" size={28} />
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Contact Information</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-600">
            <span className="font-medium text-slate-800 dark:text-white">Email:</span>
            <span className="text-slate-600 dark:text-slate-300">isapd71@gmail.com</span>
          </div> 
        </div>
      </Card> 
      */}

      {/* Education */}
      <div className="space-y-6">
        <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <div className="flex items-center mb-6">
            <BookOpen className="text-blue-600 dark:text-blue-400 mr-3" size={28} />
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Academic Background</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <h4 className="font-semibold text-slate-800 dark:text-white">PhD in Tourism</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Autonomous University of Baja California</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Graduated</p>
            </div>
            
            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <h4 className="font-semibold text-slate-800 dark:text-white">Master’s in Distance Education</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Specialization in IT</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Graduated</p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <h4 className="font-semibold text-slate-800 dark:text-white">Bachelor’s in Education</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Specialization in Physics and Electronics</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Graduated</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</section>

  );
};

export default About;