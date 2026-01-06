import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import TextAnimation from "../components/TextAnimation";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FaUser,
  FaCogs,
  FaGraduationCap,
  FaClone,
  FaPlay,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";
import HAVELSImg from "../assets/img/clients/HAVELS.png";
import DCLINKImg from "../assets/img/clients/DCLINK.png";
import HMIImg from "../assets/img/clients/HMI.png";
import KEIImg from "../assets/img/clients/KEI.png";
import FinolexImg from "../assets/img/clients/finolex.png";
import PolycabImg from "../assets/img/clients/polycab.png";
import AnchorImg from "../assets/img/clients/anchor.png";
import RRKabelImg from "../assets/img/clients/rrkabel.png";
import SyskaImg from "../assets/img/clients/syska.png";

// Breadcrumb components - moved outside to prevent recreation
const BreadcrumbTitle = React.memo(() => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <h1
      ref={ref}
      className={`text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 sm:mb-4 text-white scroll-fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      About Us
    </h1>
  );
});

BreadcrumbTitle.displayName = "BreadcrumbTitle";

const BreadcrumbNav = React.memo(() => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <ul
      ref={ref}
      className={`flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base text-gray-300 scroll-fade-in scroll-fade-in-delay-1 ${
        isVisible ? "visible" : ""
      }`}
    >
      <li>
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
      </li>
      <li>/</li>
      <li>
        <Link to="/about" className="hover:text-primary">
          Pages
        </Link>
      </li>
      <li>/</li>
      <li className="text-primary">About</li>
    </ul>
  );
});

BreadcrumbNav.displayName = "BreadcrumbNav";

// About Section Component - moved outside
const AboutSection = React.memo(() => {
  const [imageRef, imageVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });
  const [contentRef, contentVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <div
            ref={imageRef}
            className={`w-full lg:w-1/2 scroll-slide-left ${
              imageVisible ? "visible" : ""
            }`}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <img
                  src="/assets/img/ongoing/1.jpg"
                  alt="About"
                  className="w-full rounded-lg image-fade-in"
                  style={{
                    opacity: imageVisible ? 1 : 0,
                    transform: imageVisible ? "scale(1)" : "scale(0.95)",
                    transition: "opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s",
                  }}
                />
              </div>
              <div>
                <img
                  src="/assets/img/ongoing/2.jpg"
                  alt="About"
                  className="w-full rounded-lg mt-8 image-fade-in"
                  style={{
                    opacity: imageVisible ? 1 : 0,
                    transform: imageVisible ? "scale(1)" : "scale(0.95)",
                    transition: "opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            ref={contentRef}
            className={`w-full lg:w-1/2 scroll-slide-right ${
              contentVisible ? "visible" : ""
            }`}
          >
            <TextAnimation
              text="Welcome to Mandeep Cables"
              type="word"
              delay={60}
              as="h3"
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 font-heading"
              animationOptions={{
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px",
                triggerOnce: true,
              }}
            />
            <TextAnimation
              text="Leading OEM ODM USB Cable Manufacturer"
              type="word"
              delay={80}
              as="h2"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 font-heading"
              animationOptions={{
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px",
                triggerOnce: true,
              }}
            />
            <div className="mb-4 sm:mb-5 md:mb-6">
              <TextAnimation
                text="Mr. Mandeep Singh"
                type="word"
                delay={50}
                as="h4"
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-heading"
                animationOptions={{
                  threshold: 0.2,
                  rootMargin: "0px 0px -50px 0px",
                  triggerOnce: true,
                }}
              />
              <TextAnimation
                text="Chairman & Managing Director"
                type="word"
                delay={50}
                className="text-base sm:text-lg text-primary font-semibold mb-3 sm:mb-4"
                animationOptions={{
                  threshold: 0.2,
                  rootMargin: "0px 0px -50px 0px",
                  triggerOnce: true,
                }}
              />
            </div>
            <TextAnimation
              text="Mr. Mandeep Singh is the visionary founder and driving force behind Mandeep Cables Pvt. Ltd. With unwavering dedication and relentless hard work, he has built this organization from the ground up with his own blood and sweat. Boasting more than 35 years of extensive experience in the cable industry, he possesses comprehensive knowledge of processes, production, and components that makes him a true stalwart in the field."
              type="word"
              delay={30}
              className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed"
              animationOptions={{
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px",
                triggerOnce: true,
              }}
            />
            <TextAnimation
              text="As the Chairman & Managing Director, he continues to lead the organization with passion and expertise, ensuring Mandeep Cables remains at the forefront of custom USB cable manufacturing and OEM/ODM solutions."
              type="word"
              delay={30}
              className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed"
              animationOptions={{
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px",
                triggerOnce: true,
              }}
            />
            <div className="flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary font-heading">
                35+
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold font-heading">
                  Years
                  <br /> Experience Working
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

AboutSection.displayName = "AboutSection";

// Stats Section Component - moved outside
const StatsSection = React.memo(({ stats, onSectionVisible }) => {
  const [sectionRef, sectionVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });

  useEffect(() => {
    if (sectionVisible && onSectionVisible) {
      onSectionVisible();
    }
  }, [sectionVisible, onSectionVisible]);

  return (
    <div
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 text-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/img/banner/2.jpg)" }}
    >
      <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-white">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <div
                key={index}
                className={`stats-item-entrance ${
                  sectionVisible ? "visible" : ""
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <IconComponent className="text-5xl text-primary mx-auto mb-4" />
                <div className="text-5xl font-bold text-primary mb-2 font-heading">
                  {stat.number}
                </div>
                <span className="text-lg font-medium">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

StatsSection.displayName = "StatsSection";

// Video Section Component - moved outside
const VideoSection = React.memo(() => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });

  return (
    <div
      className="relative py-12 sm:py-16 md:py-20 text-center bg-cover bg-center mt-8 sm:mt-12 md:mt-16 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center"
      style={{ backgroundImage: "url(/assets/img/banner/16.jpg)" }}
    >
      <div className="absolute inset-0 bg-opacity-20 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-20 w-full">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-white section-entrance ${
            isVisible ? "visible" : ""
          }`}
        >
          <TextAnimation
            text="Know more about us!"
            type="word"
            delay={80}
            as="h4"
            className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 font-heading text-white relative z-30"
            animationOptions={{
              threshold: 0.2,
              rootMargin: "0px 0px -50px 0px",
              triggerOnce: true,
            }}
          />
          <TextAnimation
            text="Check this video presentation to know more about us and our process"
            type="word"
            delay={60}
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 font-heading text-white relative z-30 px-4"
            animationOptions={{
              threshold: 0.2,
              rootMargin: "0px 0px -50px 0px",
              triggerOnce: true,
            }}
          />
          <a
            href="https://www.youtube.com/watch?v=vQqZIFCab9o"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center hover:opacity-90 transition mx-auto relative z-30 scroll-scale-up"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.8)",
              transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
            }}
          >
            <FaPlay className="text-white text-lg sm:text-xl ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
});

VideoSection.displayName = "VideoSection";

// Clients Section Component - moved outside
const ClientsSection = React.memo(({ clients }) => {
  const [textRef, textVisible] = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });
  const [imagesRef, imagesVisible] = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div
            ref={textRef}
            className={`scroll-slide-left order-1 lg:order-1 ${textVisible ? "visible" : ""}`}
          >
            <div className="w-full">
              <TextAnimation
                text="Our Clients"
                type="word"
                delay={80}
                as="h2"
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 font-heading text-gray-900"
                animationOptions={{
                  threshold: 0.1,
                  rootMargin: "0px 0px -100px 0px",
                  triggerOnce: true,
                }}
              />
              <TextAnimation
                text="At Griptronics, we proudly serve a diverse portfolio of clients across multiple industries who rely on high-performance and durable cable solutions. Our commitment to quality, consistency, and timely delivery has made us a trusted partner for businesses of all scales."
                type="word"
                delay={30}
                className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed"
                animationOptions={{
                  threshold: 0.1,
                  rootMargin: "0px 0px -100px 0px",
                  triggerOnce: true,
                }}
              />
              <div className="mb-4 sm:mb-5 md:mb-6">
                <TextAnimation
                  text="We work closely with:"
                  type="word"
                  delay={40}
                  className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-semibold"
                  animationOptions={{
                    threshold: 0.1,
                    rootMargin: "0px 0px -100px 0px",
                    triggerOnce: true,
                  }}
                />
                <ul className="text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-2.5">
                  {[
                    "Electrical Contractors & System Integrators",
                    "Industrial & Manufacturing Units",
                    "Infrastructure & Real Estate Developers",
                    "OEMs & Equipment Manufacturers",
                    "Renewable Energy & Power Projects",
                    "Telecom & Networking Companies",
                    "Commercial & Residential Projects",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                      style={{
                        opacity: textVisible ? 1 : 0,
                        transform: textVisible ? "translateY(0)" : "translateY(20px)",
                        transition: `opacity 0.6s ease-out ${0.4 + index * 0.1}s, transform 0.6s ease-out ${0.4 + index * 0.1}s`,
                      }}
                    >
                      <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                      <span className="flex-1 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <TextAnimation
                text="From large-scale industrial operations to specialized project requirements, our clients trust Griptronics for reliable products, technical expertise, and long-term value."
                type="word"
                delay={30}
                className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed"
                animationOptions={{
                  threshold: 0.1,
                  rootMargin: "0px 0px -100px 0px",
                  triggerOnce: true,
                }}
              />
              <div
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "scale(1)" : "scale(0.9)",
                  transition: "opacity 0.8s ease-out 1.2s, transform 0.8s ease-out 1.2s",
                }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-dark text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-xs sm:text-sm font-semibold hover:opacity-90 transition"
                >
                  Request a quote
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Client Logos */}
          <div
            ref={imagesRef}
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 scroll-slide-right order-2 lg:order-2 ${
              imagesVisible ? "visible" : ""
            }`}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-bg-gray p-4 rounded-lg flex items-center justify-center hover:opacity-80 transition min-h-[100px] sm:min-h-[120px]"
                style={{
                  opacity: imagesVisible ? 1 : 0,
                  transform: imagesVisible ? "scale(1)" : "scale(0.9)",
                  transition: `opacity 0.6s ease-out ${0.2 + index * 0.1}s, transform 0.6s ease-out ${0.2 + index * 0.1}s`,
                }}
              >
                <a href="#" className="w-full h-full flex items-center justify-center">
                  <img
                    src={client}
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full h-auto object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

ClientsSection.displayName = "ClientsSection";

const About = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    machinery: 0,
    staff: 0,
    projects: 0,
  });

  // Stats counter animation function - useCallback to prevent recreation
  const animateCount = useCallback((target, setter, key) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setter((prev) => ({ ...prev, [key]: Math.floor(current) }));
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  // Memoize stats array to prevent recreation
  const stats = useMemo(
    () => [
      { icon: FaUser, number: counts.clients, label: "Clients Services" },
      { icon: FaCogs, number: counts.machinery, label: "Machinery" },
      { icon: FaGraduationCap, number: counts.staff, label: "Qualified Staff" },
      { icon: FaClone, number: counts.projects, label: "Project Done" },
    ],
    [counts.clients, counts.machinery, counts.staff, counts.projects]
  );

  // Memoize clients array
  const clients = useMemo(
    () => [
      HAVELSImg,
      DCLINKImg,
      HMIImg,
      KEIImg,
      FinolexImg,
      PolycabImg,
      AnchorImg,
      RRKabelImg,
      SyskaImg,
    ],
    []
  );

  // Handle stats section visibility
  const handleStatsVisible = useCallback(() => {
    animateCount(230, setCounts, "clients");
    animateCount(89, setCounts, "machinery");
    animateCount(50, setCounts, "staff");
    animateCount(2348, setCounts, "projects");
  }, [animateCount]);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div
        className="relative text-white py-12 sm:py-16 md:py-20 pt-28 sm:pt-32 md:pt-36 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/img/banner/10.jpg)" }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <BreadcrumbTitle />
            <BreadcrumbNav />
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Fun Factor / Stats Section */}
      <StatsSection stats={stats} onSectionVisible={handleStatsVisible} />

      {/* Video Section */}
      <VideoSection />

      {/* Clients Section */}
      <ClientsSection clients={clients} />

      <Footer />
    </div>
  );
};

export default About;
