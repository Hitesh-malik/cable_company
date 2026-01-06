import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Services = () => {
  const featuredServices = [
    {
      icon: "fas fa-drafting-compass",
      title: "Metal Roofing",
      description:
        "Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as",
    },
    {
      icon: "fas fa-city",
      title: "Green Building",
      description:
        "Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as",
    },
    {
      icon: "fas fa-hard-hat",
      title: "House Renovation",
      description:
        "Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as",
    },
  ];

  const services = [
    {
      image: "/assets/img/services/hr-4.jpg",
      title: "Green Building",
      products: 1240,
      description:
        "Day her likewise smallest expenses judgment building man carriage gay. Considered introduced themselves mr to discretion at. Means among saw hopes for. Death mirth in oh learn he equal on. Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day. Evening way luckily.",
    },
    {
      image: "/assets/img/services/kt-1.jpg",
      title: "Printing And Cutting",
      products: 349,
      description:
        "Day her likewise smallest expenses judgment building man carriage gay. Considered introduced themselves mr to discretion at. Means among saw hopes for. Death mirth in oh learn he equal on. Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day. Evening way luckily.",
    },
    {
      image: "/assets/img/services/hr-1.jpg",
      title: "Metal Roofing",
      products: 456,
      description:
        "Day her likewise smallest expenses judgment building man carriage gay. Considered introduced themselves mr to discretion at. Means among saw hopes for. Death mirth in oh learn he equal on. Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day. Evening way luckily.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$29.00",
      period: "Per Month",
      features: [
        "Business Analyzing",
        "24/7 Tech Suport",
        "Operational Excellence",
        "Knowledge Management",
        "Business Idea Ready",
        "2 database",
        "Customer Support",
      ],
      buttonText: "Buy This Plan",
      isActive: false,
      buttonClass: "bg-dark",
    },
    {
      name: "Standard",
      price: "$59.00",
      period: "Per Month",
      badge: "Trending",
      features: [
        "Full Business Analyzing",
        "24/7 Tech Suport",
        "Next Generation Accounting",
        "Online staff training sessions",
        "Business Idea Ready",
        "2 database",
        "Customer Support",
      ],
      buttonText: "Buy This Plan",
      isActive: true,
      buttonClass: "bg-primary",
    },
    {
      name: "Complete",
      price: "$78.00",
      period: "Per Month",
      features: [
        "Digital Transformation",
        "24/7 Tech Suport",
        "Supply Chain Optimization",
        "Management + People Strategy",
        "Business Idea Ready",
        "2 database",
        "Customer Support",
      ],
      buttonText: "Buy This Plan",
      isActive: false,
      buttonClass: "bg-dark",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div
        className="relative text-white py-12 sm:py-16 md:py-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/img/banner/2.jpg)" }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 sm:mb-4">
              Our Services
            </h1>
            <ul className="flex justify-center gap-4 text-gray-300">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  Pages
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary">Services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="bg-bg-gray">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => {
            const isMiddle = index === 1;
            return (
              <div
                key={index}
                className={`text-center p-8 sm:p-12 md:p-16 transition-all duration-500 group featured-service-card ${
                  isMiddle
                    ? "bg-primary middle-card"
                    : "bg-white hover:bg-primary border-r border-gray-200 last:border-r-0 sm:border-b lg:border-b-0"
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 featured-service-icon ${
                    isMiddle ? "bg-white" : "bg-primary"
                  }`}
                >
                  <i
                    className={`${service.icon} text-3xl transition-all duration-500`}
                    style={{
                      color: isMiddle ? "#0e0e0e" : "white",
                    }}
                    aria-hidden="true"
                  ></i>
                </div>
                <h4
                  className={`text-2xl font-bold mb-4 font-heading transition-all duration-500 ${
                    isMiddle ? "text-gray-900" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h4>
                <p
                  className={`transition-all duration-500 ${
                    isMiddle
                      ? "text-gray-900"
                      : "text-gray-600 group-hover:text-gray-900"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trending Services */}
      <div className="py-12 sm:py-16 md:py-20 bg-bg-gray">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading">
                Trending Services
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
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8"
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-heading">
                    {service.title}
                  </h3>
                  <h5 className="text-lg text-gray-600 mb-4">
                    Complated Product -{" "}
                    <span className="text-primary">{service.products}</span>
                  </h5>
                  <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-2 rounded text-sm font-semibold hover:bg-gray-900 hover:text-white transition"
                  >
                    Know more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tables */}
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading">
                Best Pricing
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-lg overflow-hidden ${
                  plan.isActive
                    ? "border-primary shadow-lg scale-105"
                    : "border-gray-200"
                }`}
              >
                <ul className="text-center">
                  <li className="p-6 bg-gray-50 border-b">
                    <h4 className="text-2xl font-bold mb-2 font-heading">
                      {plan.name}
                    </h4>
                    <h2 className="text-4xl font-bold text-primary mb-2 font-heading">
                      {plan.price}
                    </h2>
                    <span className="text-gray-600 block mb-2">
                      {plan.period}
                    </span>
                    {plan.badge && (
                      <span className="inline-block bg-primary text-gray-900 px-3 py-1 rounded text-xs font-semibold uppercase">
                        {plan.badge}
                      </span>
                    )}
                  </li>
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="px-6 py-4 border-b border-gray-100 text-gray-700"
                    >
                      {feature}
                    </li>
                  ))}
                  <li className="p-6">
                    <a
                      href="#"
                      className={`inline-block ${plan.buttonClass} text-white px-6 py-3 rounded text-sm font-semibold hover:opacity-90 transition`}
                    >
                      {plan.buttonText}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
