import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Team = () => {
  const teamMembers = [
    {
      image: "/assets/img/team/4.jpg",
      name: "Adam Smith",
      position: "Chairman",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
    {
      image: "/assets/img/team/2.jpg",
      name: "Mrobal Fukre",
      position: "CEO",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
    {
      image: "/assets/img/team/3.jpg",
      name: "Ashib Niro",
      position: "Product Manager",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
    {
      image: "/assets/img/team/1.jpg",
      name: "John Doe",
      position: "Architect",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
    {
      image: "/assets/img/team/6.jpg",
      name: "Jane Smith",
      position: "Engineer",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
    {
      image: "/assets/img/team/7.jpg",
      name: "Robert Johnson",
      position: "Designer",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div
        className="text-white py-20 relative min-h-[400px] flex items-center"
        style={{
          backgroundImage: `url(/assets/img/banner/1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold font-heading text-white">
            Our Team
          </h1>
          <p className="text-gray-200 mt-2">Home / Team</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Team Members
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Able an hope of body. Any nay shyness article matters own removal
              nothing his forming. Gay own additions education satisfied the
              perpetual. If he cause manor happy. Without farther she exposed
              saw man led. Along on happy could cease green oh.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-96 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-800 py-4 text-center">
                  <h4 className="text-2xl font-bold mb-1 font-heading text-yellow-400">
                    {member.name}
                  </h4>
                  <span className="text-white text-sm uppercase tracking-wide">
                    {member.position}
                  </span>
                </div>
                <div className="p-6 text-center bg-white">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-primary transition"
                    >
                      <i className="fab fa-facebook-f text-sm"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-primary transition"
                    >
                      <i className="fab fa-twitter text-sm"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-primary transition"
                    >
                      <i className="fab fa-google-plus-g text-sm"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
