import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Share2, TrendingUp, Globe, Users, Code } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Volunteer Work",
      description: "As a volunteer at MI CASA, I collaborate in designing and developing Office courses and curricula, helping students acquire practical tech skills to enhance their academic and professional growth.",
      icon: GraduationCap,
      tags: ["Volunteer", "Curriculum Design", "Tech Skills"],
      color: "bg-blue-500",
      image: './volunteer.png'
    },
    {
      id: 2,
      title: "Social Media Marketing Strategy",
      description: "Research on the components of social media marketing strategies for restaurants in the tourist destination of Playas de Rosarito, Baja California, to improve communication with consumers.",
      icon: Share2,
      tags: ["Social Media", "Marketing Strategy", "Tourism"],
      color: "bg-green-500",
      image: './Estrategia Marketing Digital Restaurantes Rosarito (1).png'
    },
    {
      id: 3,
      title: "Professional Competencies for Social Media & Community Managers",
      description: "Theoretical study to define job competencies, develop a study plan, and train social media and community managers in the tourism sector.",
      icon: TrendingUp,
      tags: ["Social Media", "Community Manager", "Professional Training"],
      color: "bg-purple-500",
      image: './Competencias Profesionales Social Media Turismo - Tú.png'
    },
    {
      id: 4,
      title: "PhD in Tourism",
      description: "Doctoral research on sustainable tourism and digital transformation, conducted remotely in Mexico.",
      icon: Globe,
      tags: ["Research", "Tourism", "Sustainability"],
      color: "bg-orange-500",
      image: './Estrategia Marketing Digital Restaurantes Rosarito.png'
    },
    {
      id: 5,
      title: "Spanish classes and E-Learning Development",
      description: "Design and development of online Spanish courses for non-native speakers, utilizing digital tools to enhance learning experiences.",
      icon: Users,
      tags: ["E-Learning", "Online courses", "Digital Pedagogy"],
      color: "bg-red-500",
      image: './spanish.png'
    },
    {
      id: 6,
      title: "Sierram Electric Corp",
      description: "Content Creation and Digital Marketing for an electrical company, enhancing their online presence and customer engagement.",
      icon: Code,
      tags: ["Marketing digital", "Social Media", "Community Manager"],
      color: "bg-indigo-500",
      image: './sierram.png'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Projects and experiences that demonstrate my commitment to educational innovation and digital development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.id} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600"
              >
                {/* Image Header */}
                <div className="h-48 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-800 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-blue-800 dark:hover:text-blue-200 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Interested in collaborating on a project?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <a href="mailto:isapd71@gmail.com" className="flex items-center">
            Contact me
            </a>  
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;