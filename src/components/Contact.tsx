
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "akhil.kncet@gmail.com",
    href: "mailto:akhil.kncet@gmail.com"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 8220002860",
    href: "tel:+918220002860"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/akhil0911",
    href: "https://linkedin.com/in/akhil0911"
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/Akhil-0911",
    href: "https://github.com/Akhil-0911"
  }
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactSectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    emailjs.init("mqPGAAFg5D_HUqxdY");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (formRef.current) observer.observe(formRef.current);
    
    return () => observer.disconnect();
  }, []);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email";
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      errors.message = "Message should be at least 10 characters";
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send("service_un5jf4u", "template_i60vsdz", {
        from_name: formData.name,
        email_id: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(true);
      
      // Reset submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={contactSectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          <div className="w-full lg:w-1/3 space-y-6 opacity-0 animate-fade-in contact-info" ref={contactInfoRef} style={{ animationDuration: '0.8s' }}>
            <h3 className="text-2xl font-semibold dark:text-white">Contact Information</h3>
            <p className="text-gray dark:text-gray-300">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            
            <div className="space-y-4 mt-8">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-charcoal/60 transition-all duration-300 hover:translate-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-royal/10 p-3 rounded-full text-royal">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                    <p className="text-charcoal font-medium dark:text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationDuration: '0.8s' }}>
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 transition-all duration-300 hover:shadow-md dark:bg-charcoal/50 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6 dark:text-white">Send me a message</h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray flex items-center justify-between">
                    Your Name
                    {formErrors.name && (
                      <span className="text-red-500 text-xs flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {formErrors.name}
                      </span>
                    )}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${formErrors.name ? 'border-red-400' : 'border-gray-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-colors`}
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray flex items-center justify-between">
                    Your Email
                    {formErrors.email && (
                      <span className="text-red-500 text-xs flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {formErrors.email}
                      </span>
                    )}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-400' : 'border-gray-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-colors`}
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray flex items-center justify-between">
                    Subject
                    {formErrors.subject && (
                      <span className="text-red-500 text-xs flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {formErrors.subject}
                      </span>
                    )}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${formErrors.subject ? 'border-red-400' : 'border-gray-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-colors`}
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray flex items-center justify-between">
                    Message
                    {formErrors.message && (
                      <span className="text-red-500 text-xs flex items-center">
                        <AlertCircle size={12} className="mr-1" />
                        {formErrors.message}
                      </span>
                    )}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-3 py-2 border ${formErrors.message ? 'border-red-400' : 'border-gray-200'} rounded-md focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent transition-colors`}
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`btn ${isSubmitted ? 'bg-green-500 hover:bg-green-600' : 'btn-primary'} w-full flex items-center justify-center gap-2 transition-all duration-500 relative overflow-hidden`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center">
                      <CheckCircle size={18} className="mr-2" />
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message 
                      <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
