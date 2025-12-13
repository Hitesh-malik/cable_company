import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Team = () => {
  const teamMembers = [
    {
      image: "/assets/img/team/infrastructure.jpg",
      title: "Infrastructure & Technology",
      subtitle: "Built for Precision. Powered by Innovation.",
      description:
        "Griptronics is equipped with modern high-speed extruders, automatic online diameter controllers, and the latest production systems for consistency and performance.",
      features: [
        {
          title: "Manufacturing Capabilities:",
          items: [
            "High-speed extrusion technology",
            "Automatic insulation thickness and diameter control",
            "Continuous online monitoring systems",
            "Zero-defect quality management",
          ],
        },
        {
          title: "Research & Development:",
          items: [
            "Our R&D team continuously innovates new products and materials to meet evolving industrial standards and customer needs.",
          ],
        },
        {
          title: "Sustainability:",
          items: [
            "We're committed to environmental responsibility by adopting eco-friendly materials and minimizing industrial waste in every production cycle.",
          ],
        },
      ],
    },
    {
      image: "/assets/img/team/clients.jpg",
      title: "Clients & Industries We Serve",
      subtitle: "Trusted by Leading Industries Worldwide",
      description:
        "Our strong rapport with clients stems from our commitment to quality, transparency, and timely delivery — values that define the Griptronics brand.",
      features: [
        {
          title: "Industries Served:",
          items: [
            "Telecommunications",
            "Electrical & Power Distribution",
            "Consumer Electronics",
            "Automotive",
            "Construction & Infrastructure",
            "IT & Networking",
          ],
        },
        {
          title: "Our Clients Choose Us Because:",
          items: [
            "Reliable supply chain & quick turnaround",
            "Custom design capability",
            "Consistent product quality",
            "Strong after-sales support",
          ],
        },
        {
          title: "Client Confidence:",
          items: [
            "Our strong rapport with clients stems from our commitment to quality, transparency, and timely delivery — values that define the Griptronics brand.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div
        className="text-white py-12 sm:py-16 md:py-20 relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center"
        style={{
          backgroundImage: `url(/assets/img/banner/1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white">
            Our Team
          </h1>
          <p className="text-gray-200 mt-2">Home / Team</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1600px]">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading text-gray-800">
              Our Capabilities & Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Griptronics combines cutting-edge technology with industry
              expertise to deliver exceptional wire and cable solutions. Our
              commitment to innovation and customer satisfaction sets us apart
              in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Section - Top */}
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Placeholder overlay for 500x500 */}
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-400">
                      500x500
                    </span>
                  </div>
                </div>

                {/* Title Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-6 px-6">
                  <h4 className="text-2xl font-bold mb-2 font-heading text-orange-400">
                    {member.title}
                  </h4>
                  <span className="text-white text-sm uppercase tracking-wide">
                    {member.subtitle}
                  </span>
                </div>

                {/* Content Section - Bottom */}
                <div className="p-6 bg-white">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {member.features.map((feature, idx) => (
                      <div key={idx} className="mb-3">
                        <h5 className="font-semibold text-gray-800 mb-2 text-sm">
                          {feature.title}
                        </h5>
                        <ul className="space-y-1.5">
                          {feature.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="text-gray-600 text-sm flex items-start"
                            >
                              <span className="text-orange-500 mr-2 mt-0.5">
                                •
                              </span>
                              <span className="flex-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Social Icons */}
                  {/* <div className="flex justify-center gap-3 mt-6 pt-6 border-t border-gray-200">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-orange-500 transition"
                    >
                      <i className="fab fa-facebook-f text-sm"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-orange-500 transition"
                    >
                      <i className="fab fa-twitter text-sm"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-orange-500 transition"
                    >
                      <i className="fab fa-google-plus-g text-sm"></i>
                    </a>
                  </div> */}
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
