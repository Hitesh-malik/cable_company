import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fab fa-instagram', url: '#', label: 'Instagram' },
    { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fab fa-youtube', url: '#', label: 'YouTube' }
  ];

  const contactInfo = [
    { icon: 'fas fa-globe', text: 'www.validtheme.com', url: 'https://www.validtheme.com' },
    { icon: 'fas fa-envelope', text: 'support@validtheme.com', url: 'mailto:support@validtheme.com' },
    { icon: 'fas fa-map-marker-alt', text: '123 6th St. Melbourne, FL 32904' }
  ];

  const footerLinks = [
    { text: 'Terms of Use', url: '/terms-conditions' },
    { text: 'Privacy Policy', url: '/privacy-policy' },
    { text: 'Contact Us', url: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* About Us Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">About Us</h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">
              Excellence decisively nay man yet impression for contrasted remarkably. 
              There spoke happy for you are out. Fertile how old address did showing 
              because sitting replied six. Had arose guest visit going off child she new.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mr-3 group-hover:bg-green-500/20 transition-colors">
                    <i className={`${item.icon} text-green-500 text-sm`}></i>
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
          <div className="lg:text-right">
            <h3 className="text-2xl font-bold mb-4 text-white">Follow Us</h3>
            <p className="text-gray-400 mb-6">
              Stay connected with us on social media
            </p>
            <div className="flex lg:justify-end space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
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
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © Copyright {new Date().getFullYear()}. All rights reserved.
          </div>
          
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-green-500 transition-colors text-sm"
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