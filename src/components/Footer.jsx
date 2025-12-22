import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/griptronicsindia/', label: 'Facebook' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/griptronicsindia/', label: 'Instagram' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/company/griptronics-india-wires-cables-pvt-ltd/', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:crm@griptronics.com', label: 'Email' }
  ];

  const contactInfo = [
    { icon: 'fas fa-globe', text: 'www.mandeepcables.com', url: 'https://www.mandeepcables.com' },
    { icon: 'fas fa-envelope', text: 'crm@griptronics.com / sales@griptronics.com', url: 'mailto:crm@griptronics.com' },
    { icon: 'fas fa-map-marker-alt', text: 'A-22, Phase II, Sector 80, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301' }
  ];

  const footerLinks = [
    { text: 'Terms of Use', url: '/terms-conditions' },
    { text: 'Privacy Policy', url: '/privacy-policy' },
    { text: 'Contact Us', url: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About Us Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">About Us</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-2xl text-sm sm:text-base">
              Griptronics India Wires & Cables Pvt. Ltd. is a reputed manufacturer of a wide assortment of electric wires, 
              networking cables, cords & wire harnesses. We have gained a huge client base all across the nation and 
              presently catering to the needs of the domestic market successfully.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 sm:space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                    <i className={`${item.icon} text-green-500 text-xs sm:text-sm`}></i>
                  </div>
                  {item.url ? (
                    <a 
                      href={item.url} 
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="md:text-left lg:text-right">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Follow Us</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Stay connected with us on social media
            </p>
            <div className="flex md:justify-start lg:justify-end space-x-2 sm:space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  target={social.url !== '#' ? "_blank" : "_self"}
                  rel={social.url !== '#' ? "noopener noreferrer" : ""}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <i className={`${social.icon} text-white text-sm`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © Copyright {new Date().getFullYear()}. All rights reserved.
          </div>
          
          <nav className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-green-500 transition-colors text-xs sm:text-sm"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;