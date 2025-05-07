import React from 'react';
import { Shield, Target } from 'lucide-react';

const servicesData = [
  {
    title: "Cybersecurity Development",
    icon: <Shield className="h-6 w-6" />,
    description: "Design and develop secure applications and systems. Specialize in vulnerability scanning and penetration testing using tools like Nmap, sqlmap, Burp Suite.",
    color: "border-royal"
  },
  {
    title: "ML Model Development",
    icon: <Target className="h-6 w-6" />,
    description: "Build and train AI models for tasks such as classification, detection, and prediction using PyTorch and Scikit-learn.",
    color: "border-teal"
  }
];

const Services = () => {
  return (
    <section id="services" className="dark:bg-charcoal/90 py-12">
      <div className="container mx-auto px-4">
        <h2 className="section-title dark:text-white text-center">Services I Offer</h2>

        {/* Center the service cards */}
        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`service-card ${service.color} border rounded-xl p-6 hover:shadow-md transition-all dark:bg-charcoal/70`}
              >
                <div className="mb-4 bg-gray-50 dark:bg-charcoal/40 p-3 inline-block rounded-lg text-royal">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
