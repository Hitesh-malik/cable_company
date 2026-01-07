import React from "react";
import { motion } from "framer-motion";
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
      {/* Breadcrumb */}
      <motion.div
        className="text-white py-12 sm:py-16 md:py-20 relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center mt-16 sm:mt-20 lg:mt-24"
        style={{
          backgroundImage: `url(/assets/img/banner/1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="text-gray-200 mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Home / Team
          </motion.p>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="py-12 sm:py-16 md:py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1600px]">
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading text-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Capabilities & Partners
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Griptronics combines cutting-edge technology with industry
              expertise to deliver exceptional wire and cable solutions. Our
              commitment to innovation and customer satisfaction sets us apart
              in the industry.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Image Section - Top */}
                <motion.div
                  className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gray-200"
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  <motion.img
                    src={member.image}
                    alt={member.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Placeholder overlay for 500x500 */}
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gray-400">
                      500x500
                    </span>
                  </div>
                </motion.div>

                {/* Title Section */}
                <motion.div
                  className="bg-gradient-to-r from-gray-800 to-gray-900 py-6 px-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <motion.h4
                    className="text-2xl font-bold mb-2 font-heading text-orange-400"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    {member.title}
                  </motion.h4>
                  <motion.span
                    className="text-white text-sm uppercase tracking-wide"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    {member.subtitle}
                  </motion.span>
                </motion.div>

                {/* Content Section - Bottom */}
                <motion.div
                  className="p-6 bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                  <motion.p
                    className="text-gray-600 mb-6 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    {member.description}
                  </motion.p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {member.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="mb-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + 0.6 + idx * 0.1,
                        }}
                      >
                        <motion.h5
                          className="font-semibold text-gray-800 mb-2 text-sm"
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + 0.6 + idx * 0.1,
                          }}
                        >
                          {feature.title}
                        </motion.h5>
                        <ul className="space-y-1.5">
                          {feature.items.map((item, itemIdx) => (
                            <motion.li
                              key={itemIdx}
                              className="text-gray-600 text-sm flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay:
                                  index * 0.2 +
                                  0.7 +
                                  idx * 0.1 +
                                  itemIdx * 0.05,
                              }}
                            >
                              <span className="text-orange-500 mr-2 mt-0.5">
                                •
                              </span>
                              <span className="flex-1">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Team;
