import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const [activeTab, setActiveTab] = useState("tabs_1");
  const [activeFilter, setActiveFilter] = useState("*");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const slides = [
    {
      image: "assets/img/banner/4.jpg",
      title: "We are the",
      heading: "Best Choice for you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nobis aliquid sed id saepe. Quasi totam, dolorem repellendus cupiditate! Quos eaque, voluptas doloribus",
    },
    {
      image: "assets/img/banner/5.jpg",
      title: "We are the",
      heading: "Best Choice for you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nobis aliquid sed id saepe. Quasi totam, dolorem repellendus cupiditate! Quos eaque, voluptas doloribus",
    },
    {
      image: "assets/img/banner/6.jpg",
      title: "We are the",
      heading: "Best Choice for you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nobis aliquid sed id saepe. Quasi totam, dolorem repellendus cupiditate! Quos eaque, voluptas doloribus",
    },
  ];

  const services = [
    {
      image: "assets/img/services/co-1.jpg",
      icon: "flaticon-skyline-2",
      title: "Construction",
      description:
        "Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song",
    },
    {
      image: "assets/img/services/hr-2.jpg",
      icon: "flaticon-maintenance",
      title: "Renovation",
      description:
        "Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song",
    },
    {
      image: "assets/img/services/hr-4.jpg",
      icon: "flaticon-home",
      title: "Home Maintenance",
      description:
        "Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song",
    },
    {
      image: "assets/img/services/gb-2.jpg",
      icon: "flaticon-drill",
      title: "Electrical",
      description:
        "Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song",
    },
    {
      image: "assets/img/services/hr-1.jpg",
      icon: "flaticon-house-sketch",
      title: "Architecture",
      description:
        "Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song",
    },
    {
      image: "assets/img/services/hr-3.jpg",
      icon: "flaticon-roof",
      title: "Metal Roofing",
      description:
        "Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => {
        // Show 3 items at a time, so max slide is services.length - 3
        const maxSlide = Math.max(0, services.length - 3);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);
    return () => clearInterval(serviceInterval);
  }, [services.length]);

  const nextService = () => {
    setCurrentService((prev) => {
      // Show 3 items at a time, so max slide is services.length - 3
      const maxSlide = Math.max(0, services.length - 3);
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevService = () => {
    setCurrentService((prev) => {
      // Show 3 items at a time, so max slide is services.length - 3
      const maxSlide = Math.max(0, services.length - 3);
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const products = [
    {
      image: "assets/img/projects/1.jpg",
      title: "Metal Roofing",
      category: "Construction",
      filters: ["branding", "photography"],
      type: "image",
    },
    {
      image: "assets/img/projects/2.jpg",
      title: "Printing And Cutting",
      category: "Color",
      filters: ["video", "development"],
      type: "video",
      videoUrl: "https://www.youtube.com/watch?v=KVzCfWWzGyA",
    },
    {
      image: "assets/img/projects/3.jpg",
      title: "Laminate Flooring",
      category: "Worker",
      filters: ["design", "photography"],
      type: "image",
    },
    {
      image: "assets/img/projects/4.jpg",
      title: "General Builders",
      category: "Development",
      filters: ["branding", "video"],
      type: "video",
      videoUrl: "https://www.youtube.com/watch?v=KVzCfWWzGyA",
    },
    {
      image: "assets/img/projects/5.jpg",
      title: "House Renovation",
      category: "3d design",
      filters: ["design", "photography"],
      type: "image",
    },
    {
      image: "assets/img/projects/6.jpg",
      title: "Green Building",
      category: "Construction",
      filters: ["branding", "design", "development"],
      type: "image",
    },
  ];

  const filters = [
    { id: "*", label: "All" },
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
    { id: "photography", label: "Photography" },
    { id: "branding", label: "branding" },
    { id: "video", label: "video" },
  ];

  const filteredProducts =
    activeFilter === "*"
      ? products
      : products.filter((product) => product.filters.includes(activeFilter));

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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Banner Carousel */}
      <div className="relative h-screen overflow-hidden banner-area shadow-inner">
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-fixed slider-thumb"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Content Box with Dark Overlay */}
              <div className="box-table h-full w-full">
                <div className="box-cell">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                      <div className="content relative z-10 text-white p-20">
                        <h3 className="text-xl font-semibold mb-6 font-heading uppercase relative inline-block pb-5">
                          {slide.title}
                          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white"></span>
                        </h3>
                        <h1 className="text-6xl font-black mb-6 font-heading uppercase leading-tight">
                          <span className="inline-block bg-[#0056B3] text-white px-4 py-2 mb-2">
                            BEST CHOICE
                          </span>
                          <br />
                          <span className="inline-block bg-[#0056B3] text-white px-4 py-2">
                            FOR YOU
                          </span>
                        </h1>
                        <p className="text-base mb-8 text-gray-300 leading-relaxed max-w-2xl">
                          {slide.description}
                        </p>
                        <a
                          href="#"
                          className="inline-block bg-primary text-gray-900 px-6 py-3 rounded font-semibold hover:opacity-90 transition text-sm uppercase"
                        >
                          Learn more
                        </a>
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
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 relative">
              <img
                src="/assets/img/about/1.jpg"
                alt="About"
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/watch?v=vQqZIFCab9o"
                  className="bg-primary w-20 h-20 rounded-full flex items-center justify-center hover:opacity-90 transition"
                >
                  <i className="fas fa-play text-gray-900 text-xl ml-1"></i>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl text-gray-600 mb-4 font-heading">
                Did you know that
              </h3>
              <h2 className="text-4xl font-bold mb-6 font-heading">
                We are trusted by more than 5,000 clients
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible. Afraid at highly months do things on at.
                Situation recommend objection do intention so questions. As
                greatly removed calling pleased improve Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered
                followed. At it went is songface. Do greatest at in learning
                steepest. As greatly removed calling pleased improve Last ask.
                Sincerity collected happiness do is contented. Sigh ever way now
                many. Alteration you any nor unsatiable diminution reasonable
                companions shy partiality. Leaf by left deal Year well shot deny
                shew come now had. Shall downs stand marry taken his for out. Do
                related mr account brandon an up. Wrong for never ready ham
                these witty him. Our compass see age uncivil matters
              </p>
              <div className="flex items-center gap-6 mt-8">
                <div className="text-6xl font-bold text-primary font-heading">
                  8
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

      {/* Services Section */}
      <div className="py-20 bg-bg-gray services-area">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 font-heading">
                Our Services
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

          {/* Services Carousel */}
          <div className="services-items services-carousel text-center">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentService * (100 / 3)}%)`,
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
                  >
                    <div
                      className="relative h-96 rounded-lg overflow-hidden services-item"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
                      <div className="relative h-full flex flex-col items-center justify-center p-8 text-white">
                        <div className="info">
                          <i
                            className={`${service.icon} text-6xl mb-6 text-primary`}
                            style={{ fontFamily: "Flaticon" }}
                          ></i>
                          <h4 className="text-2xl font-bold mb-4 font-heading">
                            {service.title}
                          </h4>
                          <p className="text-sm mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <a
                            href="#"
                            className="bg-white text-gray-900 border border-gray-900 px-6 py-2 rounded text-sm font-semibold hover:bg-primary hover:border-primary transition uppercase"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentService
                      ? "bg-primary w-8"
                      : "bg-gray-400 w-2 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Work History
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Able an hope of body. Any nay shyness article matters own removal
              nothing his forming. Gay own additions education satisfied the
              perpetual. If he cause manor happy. Without farther she exposed
              saw man led. Along on happy could cease green oh.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12 mix-item-menu">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded font-semibold transition ${
                  activeFilter === filter.id
                    ? "bg-primary text-gray-900"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="magnific-mix-gallery text-center">
            <div className="portfolio-items columns-3 hover-effect">
              {filteredProducts.map((product, index) => (
                <div
                  key={`${product.title}-${index}`}
                  className={`pf-item ${product.filters.join(" ")}`}
                >
                  <div className="portfolio-effet">
                    <div className="thumb">
                      <img src={product.image} alt="Thumb" />
                      <div className="overlay">
                        {product.type === "image" ? (
                          <button
                            onClick={() => {
                              setLightboxImage(product.image);
                              setIsLightboxOpen(true);
                            }}
                            className="item popup-link"
                          >
                            <i className="fa fa-eye"></i>
                          </button>
                        ) : (
                          <a
                            href={product.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="popup-youtube"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        )}
                        <Link to="/project-details">
                          <i className="fa fa-link"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <h4>{product.title}</h4>
                    <a href="#">{product.category}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
                      className="inline-block bg-primary text-gray-900 px-6 py-3 rounded font-semibold hover:opacity-90 transition"
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition">
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
