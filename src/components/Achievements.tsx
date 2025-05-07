import React from 'react';
import { Award, FileText } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Certificate data structure
interface CertificateItem {
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
}

const certificateData = {
  internships: [
    {
      title: "AIML Internship",
      organization: "Edunet Foundation",
      date: "April 2025",
      image: "/lovable-uploads/certificate.png",
      description: `Developed an AI-powered medical image analysis system to detect pneumonia in chest X-rays and brain tumors in MRI scans, assisting healthcare professionals with early detection.
Implemented two deep learning models: an Improved Pneumonia Model for X-rays and ResNet-18 for MRI-based brain tumor detection.
Enabled image upload functionality where users provide X-ray or MRI images, which are preprocessed and analyzed by the appropriate model.
Built the backend using Python and Flask, and used TensorFlow/PyTorch for model inference; the frontend was developed using HTML/CSS for a clean user interface.
Achieved high accuracy with the pneumonia model; the brain tumor model showed promising results but requires further improvement.
Delivered a preliminary diagnostic tool with the potential to support healthcare professionals in real-world clinical settings.`
    }
  ],
  hackathons: [
    {
      title: "Health Hackathon",
      organization: "VIT Bhopal & Johns Hopkins University",
      date: "February 2025",
      image: "/lovable-uploads/certificates_1.png",
      description: `Padcom - Personalized-AI Powered Diagnostic Companion is an AI-based medical image analysis system designed to detect various diseases in medical images, including chest X-rays, brain MRIs, and more, intended for use in clinics and integration with EHRs.
The system can analyze medical images and convert them into 3D for better clarity, with approximately 80% of the 3D functionality completed.
The frontend is built using HTML, CSS, and Electron.js, while the backend, which I worked on, uses Python with Flask for integration and TensorFlow/PyTorch for deep learning.
Developed by my team and myself, the system provides a diagnostic tool for healthcare professionals, with further work needed for full implementation and improvement.`
    },
    {
      title: "Sustain-AI-Thon",
      organization: "VIT Chennai",
      date: "January 2025",
      image: "/lovable-uploads/certificates_3.png",
      description: `Rento is a mobile app developed by my team and me, designed to make tool and equipment rentals affordable, convenient, and sustainable by connecting users with nearby renters and promoting a sharing economy.
      The app features a location-based search for rentals and dynamic rental pricing that adjusts based on the type of tool and usage frequency, offering flexibility for different needs.
      Trust and security are built into the platform with verified user profiles, rental agreements, secure payment methods, escrow services, and ratings/reviews to ensure safe and reliable transactions.
      I was responsible for the Flutter development, ensuring the app is cross-platform compatible, while the team handled the backend using Node.js and MongoDB to support scalability and provide a seamless user experience.`
    },
    {
      title: "Artiverse 2.0 Hackathon",
      organization: "Kongunadu College of Engineering and Technology, Trichy",
      date: "February 2025",
      image: "/lovable-uploads/certificates_2.png",
      description: "Developed an intelligent surveillance system using computer vision techniques."
    },
    {
      title: "Hack $Day Pondy",
      organization: "0x.Day & Manakula Vinayagar Engineering College, Pondicherry",
      date: "August 2024",
      image: "/lovable-uploads/certificates_4.png",
      description: `This project focused on real-time wildlife monitoring using drones, camera traps, and acoustic sensors powered by AI and machine learning.
The system detects poaching threats, identifies animal species, and analyzes behavioral patterns using computer vision and audio classification.
It includes predictive models to forecast animal movements and environmental changes for proactive conservation planning.
Our team collaborated on the full system, and I was responsible for developing the wildlife detection and classification model using computer vision techniques.`
    }
  ],
  jobSimulations: [
    {
      title: "Artificial Intelligence Job Simulation",
      organization: "Forage - Cognizant",
      date: "March 2025",
      image: "/lovable-uploads/certificates_5.png",
      description: `
Completed a job simulation focused on AI for Cognizant’s Data Science team.
Conducted exploratory data analysis using Python and Google Colab for one of Cognizant’s technology-led clients, Gala Groceries.
Prepare a Python module that contains code to train a model and output the performance metrics for the Machine Learning engineering team.
Communicated findings and analysis in the form of a PowerPoint slide to present the results back to the business.`
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      organization: "Forage - TCS",
      date: "March 2024",
      image: "/lovable-uploads/certificates_6.png",
      description: `Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team.
Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business objectives.
Delivered comprehensive documentation and presentations, showcasing the ability to communicate complex technical concepts effectively.`
    }
  ],
  other: [
    {
      title: "Internet of Things",
      organization: "NPTEL Online Certifications",
      date: "2024",
      image: "/lovable-uploads/other-cer-1.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Workshop on GenAI and XAI",
      organization: "Karpagam College of Engineering, Coimbatore",
      date: "2024",
      image: "/lovable-uploads/other-cer-2.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Paper and Project Presentation on Medical Image Analysis System",
      organization: "Karpagam College of Engineering, Coimbatore",
      date: "2024",
      image: "/lovable-uploads/other-cer-3.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Python Bootcamp",
      organization: "LetsUpgrade",
      date: "2024",
      image: "/lovable-uploads/other-cer-4.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Prompt Engineering Bootcamp",
      organization: "LetsUpgrade",
      date: "2024",
      image: "/lovable-uploads/other-cer-5.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Product Launch",
      organization: "Online - Zenora University",
      date: "2024",
      image: "/lovable-uploads/other-cer-6.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Workshop on How Hackers Really Hack",
      organization: "Vellore Institute of Technology, Chennai",
      date: "2024",
      image: "/lovable-uploads/other-cer-7.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Paper Presentation on Introduction to Cybersecurity",
      organization: "Kongu Engineering College, Erode",
      date: "2024",
      image: "/lovable-uploads/other-cer-8.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Freelancing With AI Workshop",
      organization: "AI-Preneur",
      date: "2024",
      image: "/lovable-uploads/other-cer-9.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Prometeo'25 - Code Golf",
      organization: "Online - Indian Institute of Technology (IIT), Jodhpur",
      date: "2024",
      image: "/lovable-uploads/other-cer-10.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Prometeo'25 - Cyptic Hunt",
      organization: "Online - Indian Institute of Technology (IIT), Jodhpur",
      date: "2024",
      image: "/lovable-uploads/other-cer_11.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Bit by Bit - Technovanza",
      organization: "Online - Veermata Jijabai Technological Institute (VJTI)",
      date: "2024",
      image: "/lovable-uploads/other-cer-12.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    },
    {
      title: "Java Training",
      organization: "Online - Spoken Tutorial Project, Indian Institute of Technology (IIT), Bombay",
      date: "2024",
      image: "/lovable-uploads/other-cer-13.png",
      description: "Professional development certification in cybersecurity and AI/ML technologies."
    }
  ]
};

const CertificateCard = ({ certificate, variant = "default" }: { certificate: CertificateItem, variant?: "default" | "compact" }) => {
  const isInternship = certificate.title.includes("AIML Internship");
  
  // Convert the description to a list of points
  const renderDescription = (description: string) => {
    const points = description.split('\n'); // Split by newlines for bullet points
    return (
      <ul className="list-disc pl-5 text-sm sm:text-base text-gray">
        {points.map((point, index) => (
          <li key={index} className="mb-1">{point}</li>
        ))}
      </ul>
    );
  };

  return variant === "compact" ? (
    <div className="certificate-card-compact bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow animate-fade-in h-full">
      <div className="w-full overflow-hidden">
        <AspectRatio ratio={4/3} className="bg-gray-100">
          <img 
            src={certificate.image} 
            alt={certificate.title} 
            className="w-full h-full object-contain"
          />
        </AspectRatio>
      </div>
      <div className="p-4">
        <h4 className="text-sm font-semibold line-clamp-2">{certificate.title}</h4>
        <p className="text-xs text-gray-500 line-clamp-1">{certificate.organization}</p>
      </div>
    </div>
  ) : (
    <div className="certificate-card flex flex-col lg:flex-row gap-4 bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 hover:shadow-md transition-shadow animate-fade-in">
      {isInternship ? (
        // Special handling for portrait internship certificate
        <div className="w-full lg:w-2/5 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
          <AspectRatio ratio={3/4} className="bg-gray-100">
            <img 
              src={certificate.image} 
              alt={certificate.title} 
              className="w-full h-full object-contain"
            />
          </AspectRatio>
        </div>
      ) : (
        // Standard landscape handling for other certificates
        <div className="w-full lg:w-1/2 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
          <AspectRatio ratio={4/3} className="bg-gray-100">
            <img 
              src={certificate.image} 
              alt={certificate.title} 
              className="w-full h-full object-contain"
            />
          </AspectRatio>
        </div>
      )}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-lg sm:text-xl font-semibold text-royal">{certificate.title}</h3>
        <div className="flex flex-wrap items-center gap-2 my-2 text-gray-500">
          <Award size={16} />
          <span className="text-sm sm:text-base">{certificate.organization}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <FileText size={16} />
          <span className="text-sm sm:text-base">{certificate.date}</span>
        </div>
        <div>
          {renderDescription(certificate.description)}
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Achievements</h2>
        
        <div className="mt-8 sm:mt-12">
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Internships</h3>
            {certificateData.internships.map((cert, index) => (
              <CertificateCard key={index} certificate={cert} />
            ))}
          </div>
          
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Hackathons</h3>
            {certificateData.hackathons.map((cert, index) => (
              <CertificateCard key={index} certificate={cert} />
            ))}
          </div>
          
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Job Simulations</h3>
            {certificateData.jobSimulations.map((cert, index) => (
              <CertificateCard key={index} certificate={cert} />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Other Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certificateData.other.map((cert, index) => (
                <div key={index} className="h-full">
                  <CertificateCard certificate={cert} variant="compact" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
