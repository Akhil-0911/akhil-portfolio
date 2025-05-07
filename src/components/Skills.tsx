import React, { useEffect } from 'react';
import { Code, Shield, Database, GitBranch, Users, Smartphone } from 'lucide-react';

const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "C", proficiency: 75 },
      { name: "HTML", proficiency: 85 },
      { name: "CSS", proficiency: 80 },
      { name: "React JS", proficiency: 85 },
      { name: "Node JS", proficiency: 80 },
      { name: "Dart", proficiency: 75 }
    ]
  },
  {
    category: "Cybersecurity Tools",
    icon: <Shield className="h-6 w-6" />,
    skills: [
      { name: "Nmap", proficiency: 85 },
      { name: "sqlmap", proficiency: 80 },
      { name: "Burp Suite", proficiency: 75 },
      { name: "OWASP ZAP", proficiency: 70 }
    ]
  },
  {
    category: "AI/ML Frameworks",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "PyTorch", proficiency: 85 },
      { name: "Scikit-learn", proficiency: 80 },
      { name: "TensorFlow", proficiency: 60 },
      { name: "pandas", proficiency: 90 },
      { name: "NumPy", proficiency: 85 }
    ]
  },
  {
    category: "Web Development",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Django", proficiency: 80 },
      { name: "Flask", proficiency: 65 }
    ]
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      { name: "Flutter", proficiency: 80 },
      { name: "Android Studio", proficiency: 75 }
    ]
  },
  {
    category: "Soft Skills",
    icon: <Users className="h-6 w-6" />,
    skills: [
      { name: "Problem-solving", proficiency: 90 },
      { name: "Teamwork", proficiency: 85 },
      { name: "Communication", proficiency: 80 },
      { name: "Quick learner", proficiency: 95 }
    ]
  },
  {
    category: "Other Tools",
    icon: <GitBranch className="h-6 w-6" />,
    skills: [
      { name: "Git", proficiency: 85 },
      { name: "PyCharm", proficiency: 90 },
      { name: "VS Code", proficiency: 85 },
      { name: "Jupyter Notebook", proficiency: 90 }
    ]
  }
];

const Skills = () => {
  useEffect(() => {
    // Add animation classes immediately after mount
    const skillElements = document.querySelectorAll('.skill-category');
    skillElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  // Find index of Soft Skills to place it in the center on larger screens
  const softSkillsIndex = skillsData.findIndex(category => category.category === "Soft Skills");
  const reorderedSkillsData = [...skillsData];
  if (softSkillsIndex !== -1) {
    // Remove Soft Skills from its original position
    const [softSkills] = reorderedSkillsData.splice(softSkillsIndex, 1);
    
    // On larger screens, we want to place it in the middle (position 3)
    // This ensures it appears centered on the third row when we have 3 columns
    const targetPosition = 6; // Place it at the end for proper ordering
    reorderedSkillsData.splice(targetPosition, 0, softSkills);
  }

  return (
    <section id="skills" className="bg-gray-50 dark:bg-charcoal/90">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reorderedSkillsData.map((category, index) => (
            <div 
              key={index} 
              className={`skill-category bg-white dark:bg-charcoal/70 rounded-lg shadow-sm p-6 border-l-4 border-royal hover:shadow-md transition-shadow ${
                category.category === "Soft Skills" ? "md:col-span-2 lg:col-span-3 lg:w-1/2 lg:mx-auto" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-royal/10 dark:bg-royal/20 p-3 rounded-full text-royal">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white">{category.category}</h3>
              </div>
              
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-badge bg-royal/10 dark:bg-royal/20 text-charcoal dark:text-white px-3 py-1.5 rounded-full text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
