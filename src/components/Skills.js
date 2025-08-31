import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const skills = [
    { name: "Social Media", level: 96, color: "bg-blue-500" },
    { name: "Community Manager", level: 98, color: "bg-green-500" },
    { name: "Digital Marketing", level: 97, color: "bg-purple-500" },
    { name: "HTML & CSS", level: 80, color: "bg-orange-500" },
    { name: "SEO", level: 85, color: "bg-red-500" },
    { name: "Online Reputation Management", level: 90, color: "bg-indigo-500" },
    { name: "Spanish Teaching", level: 95, color: "bg-pink-500" },
    { name: "Academic Research", level: 88, color: "bg-teal-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Competencies developed through years of experience in education, technology, and digital communication.
          </p>
        </div>

        {/* Main Skills - 4 per row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
            >
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full ${skill.color.replace('bg-', 'bg-')} mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <Badge 
                  variant="secondary" 
                  className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 text-xs"
                >
                  {skill.category || 'Advanced'}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2">Data Analysis</Badge>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2">Google Analytics</Badge>
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-4 py-2">Instructional Design</Badge>
            <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-4 py-2">Project Management</Badge>
            <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-4 py-2">WordPress</Badge>
            <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-4 py-2">Canva</Badge>
            <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 px-4 py-2">Adobe Creative Suite</Badge>
            <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 px-4 py-2">Research Methodology</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
