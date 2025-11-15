import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
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

const About = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    machinery: 0,
    staff: 0,
    projects: 0,
  });

  useEffect(() => {
    const animateCount = (target, setter, key) => {
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
    };

    animateCount(230, setCounts, "clients");
    animateCount(89, setCounts, "machinery");
    animateCount(50, setCounts, "staff");
    animateCount(2348, setCounts, "projects");
  }, []);

  const stats = [
    { icon: FaUser, number: counts.clients, label: "Clients Services" },
    { icon: FaCogs, number: counts.machinery, label: "Machinery" },
    { icon: FaGraduationCap, number: counts.staff, label: "Qualified Staff" },
    { icon: FaClone, number: counts.projects, label: "Project Done" },
  ];

  const teamMembers = [
    {
      image: "/assets/img/team/2.jpg",
      name: "Adam Smith",
      position: "Chairman",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
    {
      image: "/assets/img/team/3.jpg",
      name: "Adam Smith",
      position: "Chairman",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
    {
      image: "/assets/img/team/1.jpg",
      name: "Adam Smith",
      position: "Chairman",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
  ];

  const clients = [
    "/assets/img/clients/1.png",
    "/assets/img/clients/2.png",
    "/assets/img/clients/3.png",
    "/assets/img/clients/4.png",
    "/assets/img/clients/5.png",
    "/assets/img/clients/6.png",
    "/assets/img/clients/7.png",
    "/assets/img/clients/8.png",
    "/assets/img/clients/9.png",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div
        className="relative text-white py-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/img/banner/10.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-heading mb-4">About Us</h1>
            <ul className="flex justify-center gap-4 text-gray-300">
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
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img
                    src="/assets/img/ongoing/1.jpg"
                    alt="About"
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="/assets/img/ongoing/2.jpg"
                    alt="About"
                    className="w-full rounded-lg mt-8"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl text-gray-600 mb-4 font-heading">
                Welcome to Mandeep Cables
              </h3>
              <h2 className="text-4xl font-bold mb-6 font-heading">
                Leading OEM ODM USB Cable Manufacturer
              </h2>
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                  Mr. Mandeep Singh
                </h4>
                <p className="text-lg text-primary font-semibold mb-4">
                  Chairman & Managing Director
                </p>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mr. Mandeep Singh is the visionary founder and driving force
                behind Mandeep Cables Pvt. Ltd. With unwavering dedication and
                relentless hard work, he has built this organization from the
                ground up with his own blood and sweat. Boasting more than 35
                years of extensive experience in the cable industry, he
                possesses comprehensive knowledge of processes, production, and
                components that makes him a true stalwart in the field.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As the Chairman & Managing Director, he continues to lead the
                organization with passion and expertise, ensuring Mandeep Cables
                remains at the forefront of custom USB cable manufacturing and
                OEM/ODM solutions.
              </p>
              <div className="flex items-center gap-6 mt-8">
                <div className="text-6xl font-bold text-primary font-heading">
                  35+
                </div>
                <div>
                  <h4 className="text-xl font-semibold font-heading">
                    Years
                    <br /> Experience Working
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Factor / Stats Section */}
      <div
        className="relative py-20 text-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/img/banner/2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index}>
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

      {/* Team Members Section */}
      {/* <div className="py-20 bg-bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 font-heading">
                Team Mebers
              </h2>
              <p className="text-gray-600">
                Able an hope of body. Any nay shyness article matters own
                removal nothing his forming. Gay own additions education
                satisfied the perpetual. If he cause manor happy. Without
                farther she exposed saw man led. Along on happy could cease
                green oh.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-2xl font-bold mb-2 font-heading">
                    {member.name}
                  </h4>
                  <span className="text-primary mb-4 block">
                    {member.position}
                  </span>
                  <p className="text-gray-600 mb-6">{member.description}</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <FaGooglePlusG />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Video Section */}
      <div
        className="relative py-20 text-center bg-cover bg-center mt-16 min-h-[500px] flex items-center"
        style={{ backgroundImage: "url(/assets/img/banner/16.jpg)" }}
      >
        {/* Light overlay - very subtle */}
        <div className="absolute inset-0  bg-opacity-20 z-0"></div>
        {/* Content - over the image */}
        <div className="container mx-auto px-4 relative z-20 w-full">
          <div className="max-w-3xl mx-auto text-white">
            {/* Text at top */}
            <h4 className="text-xl mb-4 font-heading text-white relative z-30">
              Know more about us!
            </h4>
            <h2 className="text-4xl font-bold mb-8 font-heading text-white relative z-30">
              Check this video presentation to know more about us and our
              process
            </h2>
            {/* Play button below text */}
            <a
              href="https://www.youtube.com/watch?v=vQqZIFCab9o"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary w-20 h-20 rounded-full flex items-center justify-center hover:opacity-90 transition mx-auto relative z-30"
            >
              <FaPlay className="text-white text-xl ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-heading">
                Our Clients
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Yourself required no at thoughts delicate landlord it be.
                Branched dashwood do is whatever it. Farther be chapter at
                visited married in it pressed. By distrusts procuring be oh
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-4 mb-6 text-gray-700 italic">
                frankness existence believing instantly if. Doubtful on an
                juvenile as of servants insisted. Judge why maids led sir whose
                guest drift her point. Him comparison especially friendship was
              </blockquote>
              <p className="text-gray-600 mb-6 leading-relaxed">
                who sufficient attachment favourable how. Luckily but minutes
                ask picture man perhaps are inhabit. How her good all sang more
                why.
                <br />
                Real sold my in call. Invitation on an advantages collecting.
                But event old above shy bed noisy. Had sister see wooded favour
              </p>
              <a
                href="#"
                className="inline-block bg-dark text-white px-6 py-3 rounded text-sm font-semibold hover:opacity-90 transition"
              >
                Request a quote
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-bg-gray p-4 rounded-lg flex items-center justify-center hover:opacity-80 transition"
                >
                  <a href="#">
                    <img
                      src={client}
                      alt={`Client ${index + 1}`}
                      className="max-w-full h-auto"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
