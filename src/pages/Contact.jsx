import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  // Replace this with your actual Google Form URL
  const googleFormUrl = "https://forms.google.com/your-form-url-here";

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "OUR LOCATION",
      content: "Alexima, NT 456678",
      link: "https://maps.google.com/?q=Alexima+NT+456678",
    },
    {
      icon: "fas fa-envelope",
      title: "SEND US MAIL",
      content: "Info@Yourdomain.Com",
      link: "mailto:Info@Yourdomain.Com",
    },
    {
      icon: "fas fa-phone-alt",
      title: "CALL US",
      content: "+456 456 4443",
      link: "tel:+4564564443",
    },
  ];

  const whyChooseUs = [
    { text: "24/7 Customer Support", icon: "fas fa-check-circle" },
    { text: "Quick Response Time", icon: "fas fa-check-circle" },
    { text: "Expert Team", icon: "fas fa-check-circle" },
    { text: "100% Satisfaction", icon: "fas fa-check-circle" },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Info@Yourdomain.Com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">Contact Us</h1>
          
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Map and Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Find Us Here Section */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">
                    Find Us Here
                  </h2>
                  
                  {/* Map */}
                  <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5439674098!2d72.81764931490256!3d19.039823787106677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAyJzIzLjQiTiA3MsKwNDknMTEuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>

                  {/* Contact Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : "_self"}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                        className="group block"
                      >
                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 mb-4">
                            <i className={`${info.icon} text-white text-lg`}></i>
                          </div>
                          <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                            {info.title}
                          </h3>
                          <p className="text-gray-900 font-medium group-hover:text-gray-700 transition">
                            {info.content}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="bg-[#1E2939] rounded-2xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Why Choose Us?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <i className={`${item.icon} text-white text-lg`}></i>
                      <span className="text-white">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Send Message */}
            <div className="lg:col-span-1">
              <div className="bg-[#1E2939] rounded-2xl p-8 text-white sticky top-8">
                {/* White Circle Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <i className="fas fa-paper-plane text-black text-3xl"></i>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-center mb-4 text-white">
                  Send Us a Message
                </h3>
                
                <p className="text-center mb-8 text-gray-300 opacity-90">
                  Have a question or want to work together? Fill out our form and 
                  we'll get back to you within 24 hours.
                </p>

                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-white text-black px-6 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-external-link-alt mr-3"></i>
                  Open Contact Form
                </a>

                {/* Alternative Contact Options */}
                <div className="mt-8 pt-8 border-t border-gray-300 border-opacity-30">
                  <p className="text-center text-sm text-gray-300 opacity-80 mb-4">
                    Or reach out directly
                  </p>
                  
                  <div className="space-y-3">
                    <button
                      onClick={handleCopyEmail}
                      className="w-full bg-gray-300 hover:bg-gray-400 text-black px-4 py-3 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <i className="fas fa-copy mr-2"></i>
                      {copied ? "Email Copied!" : "Copy Email"}
                    </button>
                    
                    <a
                      href="tel:+4564564443"
                      className="w-full bg-gray-300 hover:bg-gray-400 text-black px-4 py-3 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <i className="fas fa-phone mr-2"></i>
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;