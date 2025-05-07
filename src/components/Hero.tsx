
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Text animation - only run once on page load
    if (textRef.current && !textRef.current.classList.contains('animate-slide-in')) {
      textRef.current.classList.add('animate-slide-in');
    }
    
    // Image animation - only run once on page load
    if (imageRef.current && !imageRef.current.classList.contains('animate-fade-in')) {
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.add('animate-fade-in');
        }
      }, 300);
    }
    
    // Buttons animation - only run once on page load
    if (buttonsRef.current && !buttonsRef.current.classList.contains('animate-fade-in')) {
      setTimeout(() => {
        if (buttonsRef.current) {
          buttonsRef.current.classList.add('animate-fade-in');
        }
      }, 600);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 pb-16 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <div ref={textRef} className="w-full md:w-1/2 space-y-6">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="gradient-text">Akhil <span className="text-royal">R</span></span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-charcoal">
              Backend Developer & Bug Bounty Hunter
            </h2>
            <p className="text-lg text-gray max-w-lg">
              Passionate about securing the future with intelligent technology
            </p>
            
            <div ref={buttonsRef} className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="btn btn-primary flex items-center gap-2 hover:translate-y-[-3px] transition-transform">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline flex items-center gap-2 hover:translate-y-[-3px] transition-transform">
                Contact Me <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div ref={imageRef} className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]">
              <div className="absolute -top-4 -left-4 right-4 bottom-4 bg-royal/5 rounded-full"></div>
              <div className="absolute -top-2 -left-2 right-2 bottom-2 bg-royal/10 rounded-full"></div>
              
              {/* Adding the "Freelancer" label at the top */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-teal text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                Freelancer
              </div>
              
              {/* Using the placeholder image */}
              <img 
                src="public\lovable-uploads\Akhil.jpg" 
                alt="Akhil R" 
                className="absolute inset-0 rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
