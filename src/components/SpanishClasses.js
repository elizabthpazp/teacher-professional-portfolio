import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Video, 
  MessageCircle, 
  Award, 
  Globe,
  CheckCircle,
  Star
} from 'lucide-react';

const SpanishClasses = () => {
  const [selectedPlan, setSelectedPlan] = useState('individual');

  const plans = {
    individual: {
      title: "Individual Classes",
      price: "$25",
      duration: "60 minutes",
      features: [
        "Personalized 1:1 attention",
        "Flexible schedules",
        "Teaching material included",
        "Personalized follow-up",
        "Participation certificate"
      ]
    },
    group: {
      title: "Group Classes",
      price: "$15",
      duration: "90 minutes",
      features: [
        "Groups of 3-5 students",
        "Group interaction",
        "Shared material",
        "Collaborative activities",
        "Dynamic learning environment"
      ]
    },
    intensive: {
      title: "Intensive Course",
      price: "$200",
      duration: "1 month",
      features: [
        "20 hours of class per month",
        "Daily classes from Monday to Friday",
        "Complete material included",
        "Weekly assessments",
        "Official certificate"
      ]
    }
  };

  const levels = [
    { name: "Beginner", description: "For those starting from scratch", icon: "🌱" },
    { name: "Intermediate", description: "To consolidate basic knowledge", icon: "🌿" },
    { name: "Advanced", description: "To perfect fluency and grammar", icon: "🌳" },
    { name: "Conversational", description: "Focus on intensive oral practice", icon: "💬" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United States",
      text: "Isabel is an exceptional teacher. Her teaching method is very effective and she is always willing to help.",
      rating: 5
    },
    {
      name: "Hans Mueller",
      country: "Germany", 
      text: "Thanks to Isabel's classes, I was able to pass my Spanish exam with excellent results.",
      rating: 5
    },
    {
      name: "Liu Wei",
      country: "China",
      text: "The classes are very dynamic and fun. I totally recommend Isabel as a teacher.",
      rating: 5
    }
  ];

  return (
    <section id="spanish-classes" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Spanish Classes</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Learn Spanish with a personalized and effective methodology. 
            Over 25 years of experience in education guarantee quality learning.
          </p>
        </div>

        {/* Stats */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-14 mb-16 justify-center items-center">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
            <Users className="text-blue-600 dark:text-blue-400 mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">1000+</h3>
            <p className="text-slate-600 dark:text-slate-300">Satisfied Students</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
            <Clock className="text-green-600 dark:text-green-400 mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">10k+</h3>
            <p className="text-slate-600 dark:text-slate-300">Teaching Hours</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
            <Award className="text-orange-600 dark:text-orange-400 mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">25+</h3>
            <p className="text-slate-600 dark:text-slate-300">Years of Experience</p>
          </Card>
           
        </div>

        {/* Levels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-8">Available Levels</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
                <div className="text-4xl mb-4">{level.icon}</div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{level.name}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{level.description}</p>
              </Card>
            ))}
          </div>
        </div>
<div className="text-center pb-14">
         <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
<a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSey39L1dtubBH5OioAhC4o8dJBbyhLMn399rff6VLOpWArdLA/viewform?usp=header" className="flex items-center">
            Take a test to see your level
         </a>   </button>
</div>
        {/* Teaching Method */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-8">My Methodology</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
              <Video className="text-blue-600 dark:text-blue-400 mb-4" size={28} />
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Virtual Classes</h4>
              <p className="text-slate-600 dark:text-slate-300">Interactive online sessions with cutting-edge technology.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
              <MessageCircle className="text-green-600 dark:text-green-400 mb-4" size={28} />
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Conversational Practice</h4>
              <p className="text-slate-600 dark:text-slate-300">Emphasis on oral communication and real-life situations.</p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
              <BookOpen className="text-purple-600 dark:text-purple-400 mb-4" size={28} />
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Personalized Material</h4>
              <p className="text-slate-600 dark:text-slate-300">Resources adapted to your goals and learning level.</p>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-8">What My Students Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-white">{testimonial.name}</h5>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{testimonial.country}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
       <div className="text-center">
  <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white border-0">
    <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
    <p className="mb-6">
      Book your class and discover how I can help you master Spanish.
    </p>
    <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 px-8 py-3 rounded-full">
    <a href="mailto:isapd71@gmail.com" className="flex items-center">
      Book a Class
      </a>
    </Button>
  </Card> 
      </div></div>
    </section>
  );
};

export default SpanishClasses;
