import React, { useState } from 'react';
import { Code, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const projectsData = [
  {
    title: "Comprehensive Vulnerability Scanner (OWASP Top 10)",
    role: "Developer",
    description: "VulnScanner is a Python-based automated vulnerability scanning tool that detects OWASP Top 10 vulnerabilities by integrating industry-standard tools like Nmap, SQLMap, Sublist3r, and Tenable.io, offering fast, reliable, and modular scanning with professional report generation.",
    stack: ["Python", "Flask", "Django", "Nmap", "sqlmap", "Burp Suite", "OWASP ZAP"],
    detailedDescription: `VulnScanner detects OWASP Top 10 vulnerabilities using integrated tools like Nmap, SQLMap, Sublist3r, and Tenable.io for efficient and automated scanning.
The system is built in Python with a modular architecture, allowing easy feature integration and support for CI/CD deployment.
It generates professional reports in both PDF and TXT formats, highlighting vulnerabilities with clear, structured sections.
The tool includes performance enhancements like parallel scanning, API rate limit handling, and false positive reduction mechanisms.`,
    link: "https://github.com/Akhil-0911/Vuln_Scanner.git"
  },
  {
    title: "Enterprise Data Loss Prevention (DLP) System",
    role: "Developer",
    description: "Developed a secure system to prevent data leaks by enforcing encryption, monitoring data flow, and securing endpoints across the organization.",
    stack: ["Python", "Flask", "Security Tools", "Encryption Libraries"],
    detailedDescription: "The Enterprise DLP system is designed to protect sensitive information from unauthorized access, data breaches, and insider threats. The system monitors data in motion, at rest, and in use across an organization's network.\n\nKey features include real-time data monitoring, policy enforcement, encryption of sensitive data, and alerts for suspicious activities. The system uses machine learning algorithms to detect anomalous data access patterns that might indicate a security breach or data exfiltration attempt.",
    link: "https://github.com/yourusername/enterprise-dlp"
  },
  {
    title: "Pneumonia & Tumor Detection in Medical Imaging",
    role: "Developer",
    description: "This project is an AI-powered medical image analysis system that uses deep learning to automatically detect pneumonia in chest X-rays and brain tumors in MRI scans, aiming to assist doctors with early and accurate diagnosis.",
    stack: ["Python", "PyTorch", "TensorFlow", "CNN", "Medical Imaging Tools"],
    detailedDescription:`The system integrates two specialized deep learning models: an Improved Pneumonia Model for analyzing chest X-rays and ResNet-18 for detecting tumors in brain MRI scans.
Users can upload medical images through a web interface, where images are preprocessed and classified by the appropriate model to indicate the presence or absence of disease.
It is developed using Python with Flask for backend operations, TensorFlow/PyTorch for deep learning inference, and a simple HTML/CSS frontend for accessibility.
The pneumonia model achieved high accuracy, while the tumor detection model showed promising results, with potential for clinical adoption after further enhancement.`,
    link: "https://github.com/Akhil-0911/PADCOM.git"
  },
  {
    title: "Smart Surveillance System",
    role: "Developer",
    description: "This project develops a smart surveillance system using YOLOv8s for real-time object detection in video feeds or SSTV cameras, aimed at enhancing security monitoring with automated alerts.",
    stack: ["Python", "OpenCV", "YOLOv8", "PyTorch", "Flask", "Windows/Linux"],
    detailedDescription: `The system utilizes YOLOv8s for real-time detection of objects such as people, vehicles, and animals in live video or SSTV streams.
It processes video frames using OpenCV and applies YOLOv8s for object detection, displaying results with bounding boxes and class labels.
Hardware requirements include a minimum CPU of Intel i5/AMD Ryzen 5, with optional GPU acceleration for faster inference.
The model achieves high performance with a precision of 0.89 and recall of 0.85, running at ~30 FPS on an NVIDIA GTX 1650.`,
    link: "https://github.com/Akhil-0911/Target_detection.git"
  },
  {
    title: "Phishing Website Detector using ML",
    role: "Developer",
    description: "This project aims to detect phishing websites by training machine learning models on a dataset of phishing and legitimate URLs, achieving high accuracy with the XGBoost classifier.",
    stack: ["Python", "Scikit-learn", "XGBoost", "TensorFlow", "Pandas", "NumPy", "Flask"],
    detailedDescription: `The project uses a dataset of 10,000 URLs (5000 phishing and 5000 legitimate) collected from PhishTank and the University of New Brunswick for training and testing machine learning models.
A total of 17 features are extracted from URLs, including address bar, domain, and HTML/Javascript-based features, to aid in the classification task.
The models trained for phishing detection include Decision Tree, Random Forest, MLP, XGBoost, Autoencoder Neural Network, and SVM, with XGBoost achieving the highest accuracy of 86.4%.
Future enhancements include the development of a browser extension and a GUI to predict whether a URL is phishing or legitimate.`,
    link:"https://github.com/Akhil-0911/Phishing.git"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section id="projects" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>

        <div className="grid grid-cols-1 gap-6 mt-12">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-sm transition-all duration-300 ${activeProject === index ? 'shadow-md' : 'hover:shadow-lg'}`}
            >
              <div 
                onClick={() => toggleProject(index)}
                className="cursor-pointer p-6"
              >
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h3 className="text-xl font-semibold text-royal">{project.title}</h3>
                      <div className="ml-4 text-royal">
                        {activeProject === index ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">Role: {project.role}</p>
                    <p className="text-gray-500 line-clamp-3">{project.description}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <Code size={16} className="text-teal" />
                      <div className="text-sm text-gray-500 overflow-hidden whitespace-nowrap overflow-ellipsis w-full">
                        {project.stack.join(", ")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {activeProject === index && (
                <div className="p-6 pt-0 border-t border-gray-100">
                  <div className="mt-4">
                    <h4 className="text-lg font-medium mb-4">Project Details:</h4>
                    <ul className="text-gray-500 mb-4 list-disc pl-5">
                      {project.detailedDescription.split('\n').map((point, idx) => (
                        <li key={idx} className="mb-2">{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span key={techIndex} className="skill-badge bg-royal/10 text-royal">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline flex items-center gap-2 text-sm hover:translate-y-[-3px] transition-transform"
                    >
                      View Details <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;