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
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <i className="fab fa-google-plus-g"></i>
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
