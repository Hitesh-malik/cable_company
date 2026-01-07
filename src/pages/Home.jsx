import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";
import ProductSection from "../components/ProductSection";

// Import product images for services section
import AVSSWireImg from "../assets/img/products/AutomobileWires/AVSS-Wire.jpg";
import BISCablesImg from "../assets/img/products/BuildingWirePanelWire/BIS-Cables-300x300.jpg";
import Cat6UTPImg from "../assets/img/products/NetworkingCables/Cat-6-UTP-300x300.jpg";
import HDMICablesImg from "../assets/img/products/Duraconnect - DataCables/HDMI-Cables-300x300.jpg";
import AirConditionerWireHarnessImg from "../assets/img/products/WireandHarnesses/Air-Conditioner-Wire-Harnesses-300x300.jpg";
import IndianPlugImg from "../assets/img/products/PowerCord/Indian-Plug-300x300.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [servicesPerView, setServicesPerView] = useState(3);

  const slides = [
    {
      image: "assets/img/banner/bannertwo.png",
      title: "We are the",
      heading: "Best Choice for you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nobis aliquid sed id saepe. Quasi totam, dolorem repellendus cupiditate! Quos eaque, voluptas doloribus",
    },
    {
      image: "assets/img/banner/bannerone.png",
      title: "We are the",
      heading: "Best Choice for you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nobis aliquid sed id saepe. Quasi totam, dolorem repellendus cupiditate! Quos eaque, voluptas doloribus",
    },
    {
      image: "assets/img/banner/bannertwo.png",
      title: "We are the",
      heading: "Best Choice for you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nobis aliquid sed id saepe. Quasi totam, dolorem repellendus cupiditate! Quos eaque, voluptas doloribus",
    },
  ];

  const services = [
    {
      image: BISCablesImg,
      icon: "fas fa-building",
      title: "Building & Panel Wires",
      description:
        "Premium BIS certified building wires and panel wires designed for safe and reliable residential and commercial electrical installations. Engineered to meet Indian Standard specifications.",
    },
    {
      image: Cat6UTPImg,
      icon: "fas fa-network-wired",
      title: "Networking Solutions",
      description:
        "High-performance Category 6 UTP cables designed for Gigabit Ethernet and high-bandwidth networking applications. Ensuring efficient connectivity and dependable data transmission.",
    },
    {
      image: HDMICablesImg,
      icon: "fas fa-tv",
      title: "Data & Connectivity Cables",
      description:
        "Superior HDMI and USB cables for high-definition multimedia transmission and universal connectivity. Delivering flawless audio and video performance in home entertainment and professional AV systems.",
    },
    {
      image: AVSSWireImg,
      icon: "fas fa-car",
      title: "Automotive Wires",
      description:
        "High-quality AVSS and FLRY automotive wires engineered for reliable vehicle electrical systems. Designed with flexible multi-colored patterns for heavy-duty automotive applications.",
    },
    {
      image: AirConditionerWireHarnessImg,
      icon: "fas fa-cog",
      title: "Wire Harnesses",
      description:
        "Specialized wire harnesses for appliances including air conditioners, refrigerators, and washing machines. Ensuring reliable electrical connections and optimal performance in demanding environments.",
    },
    {
      image: IndianPlugImg,
      icon: "fas fa-plug",
      title: "Power Cords & Plugs",
      description:
        "Indian standard power plugs and cords (IS 1293) designed for safe and compliant electrical connections. Meeting UL/CSA standards for reliable power transmission.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const updateServicesPerView = () => {
      if (window.innerWidth >= 1024) {
        setServicesPerView(3);
      } else if (window.innerWidth >= 640) {
        setServicesPerView(2);
      } else {
        setServicesPerView(1);
      }
    };

    updateServicesPerView();
    window.addEventListener("resize", updateServicesPerView);
    return () => window.removeEventListener("resize", updateServicesPerView);
  }, []);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => {
        const maxSlide = Math.max(0, services.length - servicesPerView);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);
    return () => clearInterval(serviceInterval);
  }, [services.length, servicesPerView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Commented out sections - uncomment if needed
  /*
  const tabs = [
    {
      id: "tabs_1",
      icon: "fas fa-bullseye",
      title: "Our Mission",
      image: "/assets/img/tabs/4.jpg",
      heading: "Printing And Cutting",
      description:
        "Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted. Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how. uncivil matters weather forbade her minutes. Ready how but truth son new under.",
      list: [
        "Very ye lady girl",
        "Invitation on an advantages",
        "Inhabiting travelling impression",
        "Admiration considered acceptance",
        "Extremity so attending",
      ],
    },
    {
      id: "tabs_2",
      icon: "fas fa-chart-pie",
      title: "Strategry",
      image: "/assets/img/tabs/2.jpg",
      heading: "House Extentions",
      description:
        "Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted. Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how. uncivil matters weather forbade her minutes. Ready how but truth son new under.",
      list: [
        "Very ye lady girl",
        "Invitation on an advantages",
        "Inhabiting travelling impression",
        "Admiration considered acceptance",
        "Extremity so attending",
      ],
    },
    {
      id: "tabs_3",
      icon: "fas fa-smile",
      title: "Integrity",
      image: "/assets/img/tabs/3.jpg",
      heading: "Laminate Flooring",
      description:
        "Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted. Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how. uncivil matters weather forbade her minutes. Ready how but truth son new under.",
      list: [
        "Very ye lady girl",
        "Invitation on an advantages",
        "Inhabiting travelling impression",
        "Admiration considered acceptance",
        "Extremity so attending",
      ],
    },
    {
      id: "tabs_4",
      icon: "fas fa-globe",
      title: "Sustainabilty",
      image: "/assets/img/tabs/1.jpg",
      heading: "House Renovation",
      description:
        "Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed. By distrusts procuring be oh frankness existence believing instantly if. Doubtful on an juvenile as of servants insisted. Judge why maids led sir whose guest drift her point. Him comparison especially friendship was who sufficient attachment favourable how.",
      list: [
        "Very ye lady girl",
        "Invitation on an advantages",
        "Inhabiting travelling impression",
        "Admiration considered acceptance",
        "Extremity so attending",
      ],
    },
  ];

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
      position: "Chairman",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
    {
      image: "/assets/img/team/3.jpg",
      name: "Ashib Niro",
      position: "Chairman",
      description:
        "We are a team of multi-skilled and curious digital specialists who are always up for a challenge and learning as fast as digital is changing.",
    },
  ];

  const blogPosts = [
    {
      image: "/assets/img/blog/1.jpg",
      date: "Aug 3, 2024",
      title: "Old unsatiable our now",
      description:
        "Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter",
      author: "John Doe",
      comments: 2,
      icon: "fas fa-images",
    },
    {
      image: "/assets/img/blog/2.jpg",
      date: "Aug 3, 2024",
      title: "Ecstatic elegance gay but disposed",
      description:
        "Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter",
      author: "John Doe",
      comments: 2,
      icon: "fas fa-video",
    },
    {
      image: "/assets/img/blog/3.jpg",
      date: "Aug 3, 2024",
      title: "Prepared do an dissuade",
      description:
        "Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter",
      author: "John Doe",
      comments: 2,
      icon: "fas fa-images",
    },
  ];
  */

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-16 sm:pt-20 lg:pt-24">
        {/* Banner Carousel */}
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden banner-area shadow-inner">
          <div
            className="relative h-full w-full flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="relative h-full w-full flex-shrink-0">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center slider-thumb"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>

                {/* Content Box with Dark Overlay */}
                <div className="box-table h-full w-full">
                  <div className="box-cell">
                    <div className="container mx-auto px-4 sm:px-6">
                      <div className="max-w-4xl">
                        <div
                          className="content relative z-10 text-white p-6 sm:p-10 md:p-16 lg:p-20"
                          key={`slide-${index}-${currentSlide}`}
                        >
                          {/* Title with staggered word animation */}
                          <motion.h3
                            className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 md:mb-6 font-heading uppercase relative inline-block pb-3 sm:pb-4 md:pb-5 text-white"
                            key={`title-${index}-${currentSlide}`}
                            initial={{ opacity: 0, y: -30 }}
                            animate={
                              index === currentSlide
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: -30 }
                            }
                            transition={{
                              duration: 0.6,
                              delay: 0.2,
                              ease: "easeOut",
                            }}
                          >
                            {slide.title.split(" ").map((word, wordIndex) => (
                              <motion.span
                                key={`${index}-${wordIndex}`}
                                className="inline-block"
                                initial={{ opacity: 0, y: -20 }}
                                animate={
                                  index === currentSlide
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: -20 }
                                }
                                transition={{
                                  duration: 0.5,
                                  delay: 0.2 + wordIndex * 0.15,
                                  ease: "easeOut",
                                }}
                              >
                                {word}
                                {wordIndex <
                                  slide.title.split(" ").length - 1 && "\u00A0"}
                              </motion.span>
                            ))}
                            <motion.span
                              className="absolute bottom-0 left-0 h-0.5 bg-white"
                              initial={{ width: 0 }}
                              animate={
                                index === currentSlide
                                  ? { width: "50%" }
                                  : { width: 0 }
                              }
                              transition={{
                                duration: 0.6,
                                delay: 0.5,
                                ease: "easeOut",
                              }}
                            ></motion.span>
                          </motion.h3>

                          {/* Heading with staggered line animation */}
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-5 md:mb-6 font-heading uppercase leading-tight">
                            <motion.span
                              className="inline-block bg-primary text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                              key={`heading1-${index}-${currentSlide}`}
                              initial={{ opacity: 0, y: -40 }}
                              animate={
                                index === currentSlide
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: -40 }
                              }
                              transition={{
                                duration: 0.7,
                                delay: 0.4,
                                ease: "easeOut",
                              }}
                            >
                              BEST CHOICE
                            </motion.span>
                            <br />
                            <motion.span
                              className="inline-block bg-primary text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                              key={`heading2-${index}-${currentSlide}`}
                              initial={{ opacity: 0, y: -40 }}
                              animate={
                                index === currentSlide
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: -40 }
                              }
                              transition={{
                                duration: 0.7,
                                delay: 0.6,
                                ease: "easeOut",
                              }}
                            >
                              FOR YOU
                            </motion.span>
                          </h1>

                          {/* Description with staggered word animation */}
                          <motion.p
                            className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-white leading-relaxed max-w-2xl"
                            key={`desc-${index}-${currentSlide}`}
                            initial={{ opacity: 0 }}
                            animate={
                              index === currentSlide
                                ? { opacity: 1 }
                                : { opacity: 0 }
                            }
                            transition={{ duration: 0.6, delay: 0.8 }}
                          >
                            {slide.description
                              .split(" ")
                              .map((word, wordIndex) => (
                                <motion.span
                                  key={`${index}-desc-${wordIndex}`}
                                  className="inline-block"
                                  initial={{ opacity: 0, y: -15 }}
                                  animate={
                                    index === currentSlide
                                      ? { opacity: 1, y: 0 }
                                      : { opacity: 0, y: -15 }
                                  }
                                  transition={{
                                    duration: 0.4,
                                    delay: 0.8 + wordIndex * 0.03,
                                    ease: "easeOut",
                                  }}
                                >
                                  {word}
                                  {wordIndex <
                                    slide.description.split(" ").length - 1 &&
                                    "\u00A0"}
                                </motion.span>
                              ))}
                          </motion.p>

                          {/* Button animation */}
                          <motion.a
                            href="#"
                            className="inline-block bg-primary text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded font-semibold hover:opacity-90 transition text-xs sm:text-sm uppercase"
                            key={`button-${index}-${currentSlide}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={
                              index === currentSlide
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: -20 }
                            }
                            transition={{
                              duration: 0.6,
                              delay: 1.2,
                              ease: "easeOut",
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Learn more
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls - Left Arrow */}
          <button
            onClick={prevSlide}
            className="carousel-control left"
            aria-label="Previous slide"
          >
            <i className="fas fa-angle-left"></i>
          </button>

          {/* Carousel Controls - Right Arrow */}
          <button
            onClick={nextSlide}
            className="carousel-control right"
            aria-label="Next slide"
          >
            <i className="fas fa-angle-right"></i>
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-5 sm:w-6 bg-primary shadow-[0_0_0_3px_rgba(0,0,0,0.35)] sm:shadow-[0_0_0_4px_rgba(0,0,0,0.35)]"
                    : "w-1.5 sm:w-2 bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

            <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.25em] text-white/80 uppercase">
              {String(currentSlide + 1).padStart(2, "0")}
              <span className="text-white/50">
                {" "}
                / {String(slides.length).padStart(2, "0")}
              </span>
            </span>
          </div>
        </div>

        {/* About Section */}
        <motion.div
          className="py-12 sm:py-16 md:py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12">
              {/* LEFT SIDE — unchanged */}
              <motion.div
                className="w-full lg:w-1/2 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative">
                  {/* Red L-shaped block behind the image */}
                  <motion.div
                    className="absolute -left-6 sm:-left-8 md:-left-10 -bottom-8 sm:-bottom-10 md:-bottom-12 right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8 bg-primary z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Vertical part (left edge) */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-primary"></div>
                    {/* Horizontal part (bottom edge) */}
                    <div className="absolute left-0 bottom-0 right-0 h-12 sm:h-16 md:h-20 bg-primary"></div>
                  </motion.div>

                  {/* Image with gap/margin to show the red block behind */}
                  <motion.div
                    className="relative ml-6 sm:ml-8 md:ml-10 mb-6 sm:mb-8 md:mb-10 z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="/assets/img/about/1.jpg"
                      alt="About"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <motion.a
                        href="https://www.youtube.com/watch?v=vQqZIFCab9o"
                        className="bg-primary w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center hover:opacity-90 transition z-20"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="fas fa-play text-gray-700 text-base sm:text-lg md:text-xl ml-0.5 sm:ml-1"></i>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT SIDE — updated content */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Tagline with staggered word animation */}
                <motion.h3
                  className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 font-heading"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {"Powering Connections. Building Reliability."
                    .split(" ")
                    .map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        className="inline-block"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + wordIndex * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        {word}
                        {wordIndex <
                          "Powering Connections. Building Reliability.".split(
                            " "
                          ).length -
                            1 && "\u00A0"}
                      </motion.span>
                    ))}
                </motion.h3>

                {/* Main heading with staggered word animation */}
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 font-heading"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {"Griptronics is a trusted Indian manufacturer of high-performance electrical wires, networking cables, cords, and wire harness solutions engineered for reliability, safety, and innovation."
                    .split(" ")
                    .map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        className="inline-block"
                        initial={{ opacity: 0, y: -25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + wordIndex * 0.04,
                          ease: "easeOut",
                        }}
                      >
                        {word}
                        {wordIndex <
                          "Griptronics is a trusted Indian manufacturer of high-performance electrical wires, networking cables, cords, and wire harness solutions engineered for reliability, safety, and innovation.".split(
                            " "
                          ).length -
                            1 && "\u00A0"}
                      </motion.span>
                    ))}
                </motion.h2>

                {/* Feature list with staggered animation */}
                <motion.div
                  className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-3 sm:space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {[
                    {
                      text: "Premium Quality Standards —",
                      desc: "Certified and tested under IS, UL, JIS, JASO & DIN specifications.",
                    },
                    {
                      text: "Custom Manufacturing —",
                      desc: "Tailor-made cable and wire solutions built to your specifications.",
                    },
                    {
                      text: "Trusted Across Industries —",
                      desc: "Supplying to leading telecom, electrical, and networking sectors nationwide.",
                    },
                    {
                      text: "20+ Years of Expertise —",
                      desc: "Built on precision engineering and customer-first values.",
                    },
                  ].map((item, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                    >
                      <motion.strong
                        className="inline-block"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.15,
                          ease: "easeOut",
                        }}
                      >
                        {item.text.split(" ").map((word, wordIndex) => (
                          <motion.span
                            key={wordIndex}
                            className="inline-block"
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.5 + index * 0.15 + wordIndex * 0.05,
                              ease: "easeOut",
                            }}
                          >
                            {word}
                            {wordIndex < item.text.split(" ").length - 1 &&
                              "\u00A0"}
                          </motion.span>
                        ))}
                      </motion.strong>{" "}
                      {item.desc.split(" ").map((word, wordIndex) => (
                        <motion.span
                          key={wordIndex}
                          className="inline-block"
                          initial={{ opacity: 0, y: -15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay:
                              0.5 +
                              index * 0.15 +
                              item.text.split(" ").length * 0.05 +
                              wordIndex * 0.03,
                            ease: "easeOut",
                          }}
                        >
                          {word}
                          {wordIndex < item.desc.split(" ").length - 1 &&
                            "\u00A0"}
                        </motion.span>
                      ))}
                    </motion.p>
                  ))}
                </motion.div>

                {/* Button animation */}
                <motion.div
                  className="mt-6 sm:mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-block bg-primary text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base font-semibold hover:opacity-90 transition"
                    >
                      👉 Explore Our Range | Request a Quote
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-bg-gray services-area"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-3 sm:px-5 md:px-6 lg:px-8">
            <motion.div
              className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="max-w-3xl mx-auto">
                <motion.h2
                  className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 md:mb-5 font-heading"
                  style={{ fontSize: "clamp(1.25rem, 5vw, 3.75rem)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Our Services
                </motion.h2>
                <motion.p
                  className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 px-2 sm:px-4 md:px-6 leading-relaxed"
                  style={{ fontSize: "clamp(0.75rem, 2vw, 1.5rem)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Griptronics is a leading manufacturer and supplier of
                  high-quality electrical and electronic cables, engineered to
                  deliver superior performance, long-term durability, and
                  consistent reliability. Our product range is designed to meet
                  the evolving demands of modern industries, ensuring safe power
                  transmission, efficient connectivity, and dependable operation
                  across diverse applications. With a strong focus on quality
                  standards, precision manufacturing, and customer-centric
                  solutions, Griptronics provides cables that perform flawlessly
                  even under challenging environments, making us a trusted
                  partner for reliable electrical solutions.
                </motion.p>
              </div>
            </motion.div>

            {/* Services Carousel */}
            <div className="services-items services-carousel text-center w-full">
              <div className="overflow-hidden w-full">
                <div
                  className="flex transition-transform duration-700 ease-in-out items-stretch w-full"
                  style={{
                    transform: `translateX(-${
                      currentService * (100 / servicesPerView)
                    }%)`,
                  }}
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-1.5 sm:px-2 md:px-2.5 lg:px-3 xl:px-4 flex"
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: "easeOut",
                      }}
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <div className="relative w-full h-full rounded-lg overflow-hidden services-item shadow-lg">
                        {/* Background Image with Grayscale Filter */}
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: `url(${service.image})`,
                            filter: "grayscale(100%)",
                          }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/90 via-gray-700/70 to-gray-600/50"></div>
                        <div className="relative h-full w-full flex flex-col items-center justify-center text-white z-10">
                          <div className="info w-full max-w-full px-3 sm:px-4 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-3.5 flex flex-col items-center justify-center h-full">
                            {/* Icon */}
                            <motion.div
                              className="shrink-0"
                              style={{ marginBottom: "0.25rem" }}
                              initial={{ opacity: 0, scale: 0, rotate: -180 }}
                              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.6,
                                delay: 0.3,
                                type: "spring",
                                stiffness: 200,
                              }}
                              whileHover={{ scale: 1.2, rotate: 360 }}
                            >
                              <i
                                className={`${service.icon} text-primary`}
                                style={{
                                  fontSize:
                                    "clamp(1.5rem, 2.5vw + 0.5rem, 3rem)",
                                  display: "block",
                                  lineHeight: "1",
                                }}
                              ></i>
                            </motion.div>

                            {/* Content Section */}
                            <motion.div
                              className="flex flex-col items-center w-full px-2 sm:px-2 md:px-2.5 lg:px-3 overflow-hidden"
                              style={{ gap: "0.25rem" }}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                            >
                              <motion.h4
                                className="font-bold font-heading text-white text-center w-full m-0"
                                style={{
                                  fontSize: "clamp(1rem, 2vw + 0.25rem, 2rem)",
                                  lineHeight: "1.1",
                                  padding: 0,
                                  margin: 0,
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                              >
                                {service.title}
                              </motion.h4>
                              <motion.p
                                className="text-center text-white/95 w-full mx-auto overflow-hidden text-ellipsis m-0"
                                style={{
                                  fontSize:
                                    "clamp(0.875rem, 1.5vw + 0.25rem, 1.25rem)",
                                  lineHeight: "1.3",
                                  display: "-webkit-box",
                                  WebkitLineClamp: "3",
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                  padding: 0,
                                  margin: 0,
                                }}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                              >
                                {service.description}
                              </motion.p>
                            </motion.div>

                            {/* Button */}
                            <motion.div
                              className="shrink-0"
                              style={{ marginTop: "0.25rem" }}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: 0.7,
                                type: "spring",
                              }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Link
                                  to="/products"
                                  className="bg-white text-gray-700 border border-gray-700 rounded font-semibold hover:bg-primary hover:border-primary hover:text-white transition uppercase inline-block px-3 sm:px-3.5 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 whitespace-nowrap"
                                  style={{
                                    fontSize:
                                      "clamp(0.6875rem, 1vw + 0.125rem, 0.875rem)",
                                  }}
                                >
                                  Read More
                                </Link>
                              </motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-1.5 sm:gap-2.5 md:gap-3 mt-6 sm:mt-8 md:mt-10">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    className={`rounded-full transition-all ${
                      index === currentService
                        ? "bg-primary"
                        : "bg-gray-400 hover:bg-gray-600"
                    }`}
                    style={{
                      height: "clamp(0.375rem, 0.8vw, 0.75rem)",
                      width:
                        index === currentService
                          ? "clamp(1.5rem, 3vw, 3rem)"
                          : "clamp(0.375rem, 0.8vw, 0.75rem)",
                    }}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Section */}
        <ProductSection />

        {/* Popular Work / Tabs Section */}
        {/* <div className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <ul className="flex flex-wrap border-b border-gray-600">
              {tabs.map((tab) => (
                <li key={tab.id} className="mr-2">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 font-semibold border-b-2 transition ${
                      activeTab === tab.id
                        ? "border-primary text-primary"
                        : "border-transparent hover:text-gray-300"
                    }`}
                  >
                    <i className={`${tab.icon} mr-2`}></i>
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${activeTab === tab.id ? "block" : "hidden"}`}
              >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="w-full lg:w-1/2">
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 font-heading">
                      {tab.heading}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {tab.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {tab.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-300"
                        >
                          <i className="fas fa-check text-primary mr-3"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className="inline-block bg-primary text-gray-700 px-6 py-3 rounded font-semibold hover:opacity-90 transition"
                    >
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

        {/* Team Members Section */}
        {/* <div className="py-20 bg-bg-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Team Mebers
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
                      href="https://www.facebook.com/griptronicsindia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/griptronicsindia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/griptronics-india-wires-cables-pvt-ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

        {/* Blog Section */}
        {/* <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Recent Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Able an hope of body. Any nay shyness article matters own removal
              nothing his forming. Gay own additions education satisfied the
              perpetual. If he cause manor happy. Without farther she exposed
              saw man led. Along on happy could cease green oh.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-0 group-hover:bg-opacity-50 transition">
                    <i
                      className={`${post.icon} text-white text-3xl opacity-0 group-hover:opacity-100 transition`}
                    ></i>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h4 className="text-xl font-bold mt-2 mb-3 font-heading">
                    <a href="#" className="hover:text-primary transition">
                      {post.title}
                    </a>
                  </h4>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>
                      <i className="fas fa-user mr-2"></i>
                      {post.author}
                    </span>
                    <span>
                      <i className="fas fa-comments mr-2"></i>
                      {post.comments} Comments
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      </div>

      <Footer />

      {/* Lightbox */}
      <Lightbox
        image={lightboxImage}
        isOpen={isLightboxOpen}
        onClose={() => {
          setIsLightboxOpen(false);
          setLightboxImage(null);
        }}
      />
    </div>
  );
};

export default Home;
const WorkHistory = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6 font-heading tracking-tight">
            Work History
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            M/s Mandeep Cables Pvt Ltd is led by{" "}
            <span className="font-semibold text-gray-800">
              Mr. Mandeep Singh
            </span>{" "}
            (Chairman & Managing Director), who built the company through
            dedication and over 35 years of industry expertise. With deep
            knowledge of production processes and components, he remains the
            driving force behind the organization and is regarded as a stalwart
            in the cable industry.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Why We Stand Out
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mt-1 mr-2">•</span>
                Innovative products and client satisfaction
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mt-1 mr-2">•</span>
                Economical prices with timely delivery
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mt-1 mr-2">•</span>
                Client-oriented and quality-centric approaches
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mt-1 mr-2">•</span>
                Highly experienced technical & commercial team
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mt-1 mr-2">•</span>
                Dedicated lab with the latest equipment
              </li>
            </ul>
          </div>

          {/* Image / Visual Card */}
          <div className="flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 max-w-sm">
              <img
                src="/assets/img/about/1.jpg"
                alt="Industry"
                className="rounded-xl w-full object-cover"
              />
              <p className="text-gray-600 text-center mt-4 text-sm">
                Excellence in production & manufacturing for over 35 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const QualityAssurance = () => {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Quality Assurance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Commitment to Perfection
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            At Griptronics, quality is not just a process — it’s a culture.
            Every stage of production, from raw material inspection to final
            testing, follows stringent quality control procedures.
          </p>
        </div>

        {/* Standards Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testing Standards */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Our Testing Standards Include:
            </h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "ISI (Indian Standards)",
                "UL (Underwriters Laboratories)",
                "JIS / JASO (Japanese Industrial Standards)",
                "DIN (German Standards)",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mt-1 mr-2">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* In-House Testing Facilities */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              In-House Testing Facilities:
            </h3>
            <p className="text-gray-600 mb-4">
              Our advanced laboratory is equipped with the latest instruments to
              ensure all products conform to:
            </p>
            <ul className="space-y-3 text-gray-600">
              {[
                "IS-694:2010",
                "UL-758",
                "IS-1293:2005",
                "ISO-9001:2015",
                "ISO-14001:2004",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mt-1 mr-2">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Certifications & Approvals:
            </h3>
            <ul className="space-y-3 text-gray-600">
              {["BSNL", "MTNL", "DOT", "I.T.I. LTD."].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mt-1 mr-2">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Promise Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Promise</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every cable that leaves our facility is designed to perform —
            ensuring safety, durability, and efficiency for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};
