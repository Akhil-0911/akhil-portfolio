
import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp, FileText } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-charcoal dark:bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
  {/* Section 1: Akhil Info */}
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-white">
      <span>Akhil</span><span className="text-teal"> R</span>
    </h2>
    <p className="text-gray-400 leading-relaxed">
      Backend Developer & Bug Bounty Hunter passionate about securing the future with intelligent technology.
    </p>
    <div className="flex gap-3 pt-3">
      <a href="https://github.com/Akhil-0911" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal transition-colors">
        <Github size={20} />
      </a>
      <a href="https://linkedin.com/in/akhil0911" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal transition-colors">
        <Linkedin size={20} />
      </a>
    </div>
  </div>

  {/* Section 2: Quick Links */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">Quick Links</h3>
    <div className="flex flex-col space-y-2">
      <a href="#home" className="text-gray-400 hover:text-teal transition-colors">Home</a>
      <a href="#about" className="text-gray-400 hover:text-teal transition-colors">About</a>
      <a href="#services" className="text-gray-400 hover:text-teal transition-colors">Services</a>
      <a href="#projects" className="text-gray-400 hover:text-teal transition-colors">Projects</a>
      <a href="#achievements" className="text-gray-400 hover:text-teal transition-colors">Achievements</a>
      <a href="#contact" className="text-gray-400 hover:text-teal transition-colors">Contact</a>
    </div>
  </div>

  {/* Section 3: Contact */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">Contact</h3>
    <div className="space-y-3">
      <a href="mailto:akhil.kncet@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-teal transition-colors group">
        <Mail size={16} className="group-hover:animate-bounce" />
        <span>akhil.kncet@gmail.com</span>
      </a>
      <a href="tel:+918220002860" className="flex items-center gap-2 text-gray-400 hover:text-teal transition-colors group">
        <Phone size={16} className="group-hover:animate-bounce" />
        <span>+91 8220002860</span>
      </a>
    </div>
  </div>

  {/* ✅ Section 4: Interested Fields - Now in the same row */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">Interested Fields</h3>
    <ul className="space-y-2">
      <li className="text-gray-400">Cybersecurity Development</li>
      <li className="text-gray-400">ML Model Development</li>
    </ul>
  </div>
</div>

        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col items-center">
            <div className="mb-6 w-full max-w-xl">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Resumes</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://drive.google.com/drive/folders/1N9rs_5Ma_8FayR9pOZ8qX_dgBkjCMzIR?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-royal/20 text-white px-4 py-2 rounded-full hover:bg-royal/40 transition-colors"
                >
                  <FileText size={16} />
                  <span>AIML Resume</span>
                </a>
                
                <a 
                  href="https://drive.google.com/drive/folders/1N9rs_5Ma_8FayR9pOZ8qX_dgBkjCMzIR?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-teal/20 text-white px-4 py-2 rounded-full hover:bg-teal/40 transition-colors"
                >
                  <FileText size={16} />
                  <span>Cybersecurity Resume</span>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center mb-4">
              <button 
                onClick={scrollToTop}
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-royal transition-colors mb-6 hover:animate-bounce"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
            
            <p className="text-gray-400 text-sm text-center w-full">
              &copy; {new Date().getFullYear()} Akhil R. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
