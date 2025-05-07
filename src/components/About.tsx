
import React, { useEffect, useRef } from 'react';

const About = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (bioRef.current) observer.observe(bioRef.current);
    if (educationRef.current) observer.observe(educationRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div ref={bioRef} className="w-full lg:w-2/3 space-y-6 opacity-0">
            <h3 className="text-2xl font-semibold">Get to know me</h3>
            
            <div className="space-y-4">
              <p className="text-gray leading-relaxed">
                A curious technologist passionate about solving real-world challenges with creative code and secure systems. My journey in technology began with a fascination for understanding how systems work and evolved into a dedication to building and securing digital infrastructures.
              </p>
              
              <p className="text-gray leading-relaxed">
                Throughout my academic and professional journey, I've cultivated expertise in cybersecurity and machine learning, driven by the belief that technology should empower and protect users. I thrive in environments that challenge conventional thinking and embrace innovative approaches to complex problems.
              </p>
              
              <p className="text-gray leading-relaxed">
                When I'm not coding or hunting vulnerabilities, I enjoy exploring emerging technologies, contributing to open-source projects, and mentoring aspiring developers. My goal is to create secure, intelligent systems that make a meaningful impact on how we interact with technology in our daily lives.
              </p>
            </div>
          </div>
          
          <div ref={educationRef} className="w-full lg:w-1/3 opacity-0">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h4 className="font-semibold mb-2">B.E. in Computer Science and Engineering</h4>
              <p className="text-gray mb-1">Kongunadu College of Engineering and Technology</p>
              <p className="text-sm text-gray-400">Expected Graduation: 2027</p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h5 className="font-medium mb-2">Focus Areas:</h5>
                <ul className="list-disc list-inside text-gray space-y-1">
                  <li>Cybersecurity & Network Defense</li>
                  <li>Machine Learning & Data Science</li>
                  <li>Backend Development</li>
                  <li>Secure Application Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
