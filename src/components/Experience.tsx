
import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const experienceData = [
  {
    title: "Cybersecurity Intern",
    company: "Cothon Solutions",
    duration: "Apr 2, 2025 – Present",
    description: "Developing an enterprise-grade Data Loss Prevention (DLP) system to secure sensitive data and prevent leaks.",
    details: [
      "Conducted vulnerability assessments and penetration testing on client applications",
      "Implemented secure code practices and encryption methodologies",
      "Collaborated with senior security engineers on threat modeling and risk assessment",
      "Developed automated security scanning tools using Python"
    ]
  },
  {
    title: "AI & ML Intern",
    company: "Edunet Foundation (AICTE, Microsoft, SAP)",
    duration: "Feb 12, 2025 – Mar 7, 2025",
    description: "Built real-world machine learning models and participated in hands-on AI projects, enhancing skills in Python and data analysis.",
    details: [
      "Developed classification models using PyTorch and Scikit-learn",
      "Processed and analyzed large datasets using pandas and NumPy",
      "Implemented computer vision solutions for image recognition tasks",
      "Collaborated with team members on a sentiment analysis project"
    ]
  }
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 300);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12 max-w-3xl mx-auto" ref={timelineRef}>
          {experienceData.map((experience, index) => (
            <div 
              key={index} 
              className="timeline-item opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot"></div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div 
                  className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-royal">{experience.title}</h3>
                    <p className="text-lg text-gray">{experience.company}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 md:mt-0">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="ml-4 text-royal">
                      {expandedIndex === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray">{experience.description}</p>
                
                {expandedIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                    <h4 className="text-md font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray">
                      {experience.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
