import React, { useState, useRef } from "react";
import { FaBullhorn, FaPlayCircle, FaCode, FaBars, FaTimes, FaEnvelope, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import img from "../assets/site-stats-concept-illustration.png"
// Sample project data for portfolio section
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/api/placeholder/600/400",
    description: "A fully responsive e-commerce solution with payment integration."
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    category: "Data Analysis",
    image: "/api/placeholder/600/400",
    description: "Interactive dashboard for real-time business analytics and reporting."
  },
  {
    id: 3,
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image: "/api/placeholder/600/400",
    description: "Strategic marketing campaign that increased client conversions by 45%."
  },
  {
    id: 4,
    title: "Product Launch Video",
    category: "Video Editing",
    image: "/api/placeholder/600/400",
    description: "Professional promo video for a successful product launch event."
  }
];

export default function HomePage() {
  // State for mobile nav menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Refs for scrolling to sections
  const featuresRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  // Function to scroll to section
  const scrollToSection = (ref) => {
    setIsMenuOpen(false); // Close mobile menu after clicking
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    window.location.href = `mailto:starttheway@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header - Responsive Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex justify-between items-center px-4 md:px-10 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-blue-600"></span>
            Start the Way
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm items-center">
            <button onClick={() => scrollToSection(featuresRef)} className="hover:text-blue-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection(portfolioRef)} className="hover:text-blue-600 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-600 transition-colors">Contact</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Get Started</button>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white w-full border-t p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection(featuresRef)} className="text-left py-2 hover:text-blue-600 transition-colors">Features</button>
              <button onClick={() => scrollToSection(portfolioRef)} className="text-left py-2 hover:text-blue-600 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection(aboutRef)} className="text-left py-2 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection(contactRef)} className="text-left py-2 hover:text-blue-600 transition-colors">Contact</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full">Get Started</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-xl mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Grow your business with our software
          </h1>
          <p className="text-gray-600 mb-6">
            Our platform offers innovative solutions to help you achieve your goals and streamline your operations.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
        <div>
          <img src={img} alt="Dashboard Illustration" className="w-full max-w-md rounded-lg shadow-md" />
        </div>
      </section>

      {/* Services/Features Section */}
      <section ref={featuresRef} className="px-4 md:px-10 py-16 md:py-20 bg-white">
        <h2 className="text-2xl font-bold mb-10 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 p-6">
              <FaBullhorn className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Digital Marketing</h3>
                <p className="text-sm text-gray-600">Strategic online marketing to increase your business presence</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 p-6">
              <IoAnalytics className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Data Analysis</h3>
                <p className="text-sm text-gray-600">Utilize data insights to make informed business decisions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 p-6">
              <FaPlayCircle className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Video Editing</h3>
                <p className="text-sm text-gray-600">Professional video production and editing services</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 p-6">
              <FaCode className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Web Development</h3>
                <p className="text-sm text-gray-600">Custom website development for your specific needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="px-4 md:px-10 py-16 md:py-20 bg-gray-50">
        <h2 className="text-2xl font-bold mb-2 text-center">Our Portfolio</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Check out some of our recent projects that have helped our clients achieve success
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-xs font-semibold text-blue-600">{project.category}</span>
                <h3 className="font-bold mt-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About/Testimonials Section */}
      <section ref={aboutRef} className="px-4 md:px-10 py-16 md:py-20 bg-blue-50">
        <h2 className="text-2xl font-bold mb-10 text-center">What our customers are saying</h2>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4 text-lg italic">"This software has transformed our business. The results have been outstanding. We've seen a 30% increase in productivity and our team is more coordinated than ever before."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-gray-600">ABC Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="px-4 md:px-10 py-16 md:py-20 bg-white">
        <h2 className="text-2xl font-bold mb-2 text-center">Contact Us</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to us directly.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email address"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Message subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Send Message
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                This will open your email client with a pre-filled message to starttheway@gmail.com
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-10 py-10 bg-gray-900 text-white text-sm">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
          <div className="mb-6 md:mb-0">
            <div className="text-lg font-semibold mb-4">Start the Way</div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <button onClick={() => scrollToSection(featuresRef)} className="hover:text-blue-300 transition-colors">Features</button>
              <button onClick={() => scrollToSection(portfolioRef)} className="hover:text-blue-300 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-300 transition-colors">About</button>
              <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-300 transition-colors">Contact</button>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} Start the Way. All rights reserved.
        </div>
      </footer>
    </div>
  );
}