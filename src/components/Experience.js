import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "2015 - 2022",
      company: "FORMATUR School of Tourism Branch",
      position: "Professor of IT and Technologies",
      location: "Cuba",
      description: "Lead professor in the Department of Tourism, Culture, and Development. Responsible for teaching technology applied to tourism.",
      achievements: [
        "Development of innovative educational programs",
        "Implementation of classroom technologies",
        "Mentoring over 500 students"
      ]
    }, 
    {
      period: "2007 - 2015",
      company: "Havana School of Hospitality and Tourism",
      position: "Lead Professor",
      location: "Havana, Cuba",
      description: "Teaching, research, and distance education projects. Specialized in IT and applied technologies.",
      achievements: [
        "Design of distance education programs",
        "Publication of educational materials",
        "Coordination of research projects"
      ]
    },
    {
      period: "2005 - 2007",
      company: "International School of Physical Education and Sports",
      position: "Assistant University Professor",
      location: "Cuba",
      description: "Teaching in the area of educational technologies and information systems.",
      achievements: [
        "Development of information systems",
        "Training in educational technologies",
        "Support for international students"
      ]
    }
  ];

  return (
       <section id="experience" className="pt-20 pb-8 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A professional journey focused on educational innovation and digital management.
          </p>
        </div>

        <div className="mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-700"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-5">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-6/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-4' : 'md:pr-4'}`}>
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
                    {/* Period Badge */}
                    <div className="mb-4">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        <Calendar className="mr-1" size={14} />
                        {exp.period}
                      </Badge>
                    </div>
                    
                    {/* Position and Company */}
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{exp.position}</h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      <Building className="mr-2" size={16} />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 mb-4">
                      <MapPin className="mr-2" size={16} />
                      {exp.location}
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    {/* <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Logros principales:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-300 text-sm flex items-start">
                            <span className="text-green-500 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Experience;