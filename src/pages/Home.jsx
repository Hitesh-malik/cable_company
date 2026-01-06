import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";

// Import product images
import AVSSWireImg from "../assets/img/products/AutomobileWires/AVSS-Wire.jpg";
import FLRYWireImg from "../assets/img/products/AutomobileWires/FLRY-Wire-300x300.jpg";
import BISCablesImg from "../assets/img/products/BuildingWirePanelWire/BIS-Cables-300x300.jpg";
import HouseWireImg from "../assets/img/products/BuildingWirePanelWire/House-Wire-300x300.jpg";
import SolarCablesImg from "../assets/img/products/BuildingWirePanelWire/Solar-Cables-300x300.jpg";
import ULCULCablesImg from "../assets/img/products/BuildingWirePanelWire/UL-CUL-300x300.jpg";
import VDECablesImg from "../assets/img/products/BuildingWirePanelWire/VDE-Cables-300x300.jpg";
import CoAxialImg from "../assets/img/products/Co-AxialCables/Co-Axial-Cables-300x300.jpg";
import ControlCableImg from "../assets/img/products/ControlCable/Control-Cable-300x300.jpg";
import HDMICablesImg from "../assets/img/products/Duraconnect - DataCables/HDMI-Cables-300x300.jpg";
import USBCablesImg from "../assets/img/products/Duraconnect - DataCables/USB-Cables-300x300.jpg";
import Cat5eSFTPImg from "../assets/img/products/NetworkingCables/Cat-5e-SFTP-300x300.jpg";
import Cat5eUTPImg from "../assets/img/products/NetworkingCables/Cat-5e-UTP-300x300.jpg";
import Cat6SFTPImg from "../assets/img/products/NetworkingCables/Cat-6-SFTP-300x300.jpg";
import Cat6UTPImg from "../assets/img/products/NetworkingCables/Cat-6-UTP-300x300.jpg";
import ConnectorImg from "../assets/img/products/PowerCord/Connector-300x300.jpg";
import EuropePlugImg from "../assets/img/products/PowerCord/Europe-Plug-300x300.jpg";
import IndianPlugImg from "../assets/img/products/PowerCord/Indian-Plug-300x300.jpg";
import NorthAmericanPlugImg from "../assets/img/products/PowerCord/North-American-Plug-300x300.jpg";
import PanelWiresImg from "../assets/img/products/PanelWires/Panel-Wires-300x300.jpg";
import BatteryCableImg from "../assets/img/products/BatteryCable/Battery-Cable-300x300.jpg";
import SubmersibleImg from "../assets/img/products/SubmersibleFlatCable/Submersible-flat-cable-300x300.jpg";
import AirConditionerWireHarnessImg from "../assets/img/products/WireandHarnesses/Air-Conditioner-Wire-Harnesses-300x300.jpg";
import DishwasherWireHarnessImg from "../assets/img/products/WireandHarnesses/Dishwasher-Wire-Harnesses-300x300.jpg";
import MicrowaveWireHarnessImg from "../assets/img/products/WireandHarnesses/Microwave-Wire-Harnesses-300x300.jpg";
import RefrigeratorWireHarnessImg from "../assets/img/products/WireandHarnesses/Refrigerator-Wire-Harnesses-300x300.jpg";
import WashingMachineWireHarnessImg from "../assets/img/products/WireandHarnesses/Washing-Machine-Wire-Harness-300x300.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  const [activeTab, setActiveTab] = useState("tabs_1");
  const [activeFilter, setActiveFilter] = useState("*");
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

  const nextService = () => {
    setCurrentService((prev) => {
      const maxSlide = Math.max(0, services.length - servicesPerView);
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevService = () => {
    setCurrentService((prev) => {
      const maxSlide = Math.max(0, services.length - servicesPerView);
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Debug: Log image imports to verify they're working
  useEffect(() => {
    console.log("AVSSWireImg:", AVSSWireImg);
    console.log("FLRYWireImg:", FLRYWireImg);
  }, []);

  const products = [
    {
      image: AVSSWireImg,
      title: "AVSS Wire",
      category: "Product Range",
      description:
        "High-quality AVSS automotive wires designed for reliable vehicle electrical systems with flexible multi-colored striped pattern.",
      filters: ["automobile-wires"],
      type: "image",
    },
    {
      image: FLRYWireImg,
      title: "FLRY Wire",
      category: "Product Range",
      description:
        "Premium FLRY automotive wires with single-color insulation, designed for heavy-duty vehicle electrical applications.",
      filters: ["automobile-wires"],
      type: "image",
    },
    {
      image: BISCablesImg,
      title: "BIS Cables",
      category: "Product Range",
      description:
        "BIS certified building wires meeting Indian Standard specifications for residential and commercial electrical installations.",
      filters: ["building-wire-panel-wire"],
      type: "image",
    },
    {
      image: HouseWireImg,
      title: "House Wire",
      category: "Product Range",
      description:
        "Premium house wires designed for safe and reliable residential electrical wiring systems.",
      filters: ["building-wire-panel-wire"],
      type: "image",
    },
    {
      image: SolarCablesImg,
      title: "Solar Cables",
      category: "Product Range",
      description:
        "Specialized solar cables engineered for photovoltaic systems with excellent UV resistance and durability.",
      filters: ["building-wire-panel-wire"],
      type: "image",
    },
    {
      image: ULCULCablesImg,
      title: "UL CUL Cables",
      category: "Product Range",
      description:
        "UL and CUL certified cables meeting North American safety standards for building and panel wire applications.",
      filters: ["building-wire-panel-wire"],
      type: "image",
    },
    {
      image: VDECablesImg,
      title: "VDE Cables",
      category: "Product Range",
      description:
        "VDE approved cables conforming to German standards, ideal for European building and panel wiring requirements.",
      filters: ["building-wire-panel-wire"],
      type: "image",
    },
    {
      image: CoAxialImg,
      title: "Co-Axial Cables",
      category: "Product Range",
      description:
        "Premium coaxial cables for high-frequency signal transmission and communication systems.",
      filters: ["co-axial-cables"],
      type: "image",
    },
    {
      image: ControlCableImg,
      title: "Control Cable",
      category: "Product Range",
      description:
        "Precision control cables for automation, instrumentation, and industrial control systems.",
      filters: ["control-cable"],
      type: "image",
    },
    {
      image: HDMICablesImg,
      title: "HDMI Cables",
      category: "Product Range",
      description:
        "High-definition multimedia interface cables for superior audio and video transmission in home entertainment and professional AV systems.",
      filters: ["duraconnect-data-cables"],
      type: "image",
    },
    {
      image: USBCablesImg,
      title: "USB Cables",
      category: "Product Range",
      description:
        "Universal Serial Bus cables for data transfer, charging, and connectivity across various devices and applications.",
      filters: ["duraconnect-data-cables"],
      type: "image",
    },
    {
      image: Cat5eSFTPImg,
      title: "Cat-5e SFTP Cable",
      category: "Product Range",
      description:
        "Category 5e Shielded Foiled Twisted Pair cable for enhanced EMI protection and reliable data transmission.",
      filters: ["networking-cables"],
      type: "image",
    },
    {
      image: Cat5eUTPImg,
      title: "Cat-5e UTP Cable",
      category: "Product Range",
      description:
        "Category 5e Unshielded Twisted Pair cable for cost-effective networking solutions in standard environments.",
      filters: ["networking-cables"],
      type: "image",
    },
    {
      image: Cat6SFTPImg,
      title: "Cat-6 SFTP Cable",
      category: "Product Range",
      description:
        "Category 6 Shielded Foiled Twisted Pair cable offering superior performance and interference protection for high-speed networks.",
      filters: ["networking-cables"],
      type: "image",
    },
    {
      image: Cat6UTPImg,
      title: "Cat-6 UTP Cable",
      category: "Product Range",
      description:
        "Category 6 Unshielded Twisted Pair cable designed for Gigabit Ethernet and high-bandwidth networking applications.",
      filters: ["networking-cables"],
      type: "image",
    },
    {
      image: ConnectorImg,
      title: "Power Cord Connector",
      category: "Product Range",
      description:
        "High-quality power cord connectors for secure and reliable electrical connections in appliances and equipment.",
      filters: ["power-cord"],
      type: "image",
    },
    {
      image: EuropePlugImg,
      title: "Europe Plug",
      category: "Product Range",
      description:
        "European standard power plugs compliant with CEE 7/4 (Schuko) and CEE 7/7 specifications for European markets.",
      filters: ["power-cord"],
      type: "image",
    },
    {
      image: IndianPlugImg,
      title: "Indian Plug",
      category: "Product Range",
      description:
        "Indian standard power plugs (IS 1293) designed for safe and compliant electrical connections in Indian markets.",
      filters: ["power-cord"],
      type: "image",
    },
    {
      image: NorthAmericanPlugImg,
      title: "North American Plug",
      category: "Product Range",
      description:
        "North American standard power plugs (NEMA) meeting UL/CSA standards for US and Canadian electrical systems.",
      filters: ["power-cord"],
      type: "image",
    },
    {
      image: PanelWiresImg,
      title: "Panel Wires",
      category: "Product Range",
      description:
        "Specialized panel wires for control panels and electrical distribution systems.",
      filters: ["panel-wires"],
      type: "image",
    },
    {
      image: BatteryCableImg,
      title: "Battery Cables",
      category: "Product Range",
      description:
        "Heavy-duty battery cables for automotive and industrial power applications.",
      filters: ["battery-cables"],
      type: "image",
    },
    {
      image: SubmersibleImg,
      title: "Submersible Flat Cable",
      category: "Product Range",
      description:
        "Water-resistant submersible flat cables designed for underwater and harsh environment applications.",
      filters: ["submersible-flat-cable"],
      type: "image",
    },
    {
      image: AirConditionerWireHarnessImg,
      title: "Air Conditioner Wire Harness",
      category: "Product Range",
      description:
        "Specialized wire harnesses for air conditioning systems, ensuring reliable electrical connections and optimal performance.",
      filters: ["wire-harnesses"],
      type: "image",
    },
    {
      image: DishwasherWireHarnessImg,
      title: "Dishwasher Wire Harness",
      category: "Product Range",
      description:
        "Durable wire harnesses designed for dishwasher applications, with water-resistant properties for safe operation.",
      filters: ["wire-harnesses"],
      type: "image",
    },
    {
      image: MicrowaveWireHarnessImg,
      title: "Microwave Wire Harness",
      category: "Product Range",
      description:
        "High-quality wire harnesses for microwave ovens, engineered to handle high-frequency electrical loads safely.",
      filters: ["wire-harnesses"],
      type: "image",
    },
    {
      image: RefrigeratorWireHarnessImg,
      title: "Refrigerator Wire Harness",
      category: "Product Range",
      description:
        "Reliable wire harnesses for refrigerator systems, providing secure connections for cooling and control components.",
      filters: ["wire-harnesses"],
      type: "image",
    },
    {
      image: WashingMachineWireHarnessImg,
      title: "Washing Machine Wire Harness",
      category: "Product Range",
      description:
        "Robust wire harnesses for washing machines, designed to withstand moisture and mechanical stress in laundry appliances.",
      filters: ["wire-harnesses"],
      type: "image",
    },
  ];
  const filters = [
    { id: "*", label: "All" },
    { id: "automobile-wires", label: "Automobile Wires" },
    { id: "building-wire-panel-wire", label: "Building Wire Panel Wire" },
    { id: "co-axial-cables", label: "Co-Axial Cables" },
    { id: "control-cable", label: "Control Cable" },
    { id: "duraconnect-data-cables", label: "Duraconnect-Data Cables" },
    { id: "networking-cables", label: "Networking Cables" },
    { id: "power-cord", label: "Power Cord" },
    { id: "panel-wires", label: "Panel Wires" },
    { id: "battery-cables", label: "Battery Cables" },
    { id: "submersible-flat-cable", label: "Submersible Flat Cable" },
    { id: "wire-harnesses", label: "Wire & Harnesses" },
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
                        <div className="content relative z-10 text-white p-6 sm:p-10 md:p-16 lg:p-20">
                          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 md:mb-6 font-heading uppercase relative inline-block pb-3 sm:pb-4 md:pb-5 text-white">
                            {slide.title}
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white"></span>
                          </h3>
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-5 md:mb-6 font-heading uppercase leading-tight">
                            <span className="inline-block bg-primary text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                              BEST CHOICE
                            </span>
                            <br />
                            <span className="inline-block bg-primary text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                              FOR YOU
                            </span>
                          </h1>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-white leading-relaxed max-w-2xl">
                            {slide.description}
                          </p>
                          <a
                            href="#"
                            className="inline-block bg-primary text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded font-semibold hover:opacity-90 transition text-xs sm:text-sm uppercase"
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
        <div className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12">
              {/* LEFT SIDE — unchanged */}
              <div className="w-full lg:w-1/2 relative">
                <img
                  src="/assets/img/about/1.jpg"
                  alt="About"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=vQqZIFCab9o"
                    className="bg-primary w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center hover:opacity-90 transition"
                  >
                    <i className="fas fa-play text-gray-700 text-base sm:text-lg md:text-xl ml-0.5 sm:ml-1"></i>
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE — updated content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-base sm:text-lg md:text-xl text-gray-600 mb-3 sm:mb-4 font-heading">
                  Powering Connections. Building Reliability.
                </h3>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 font-heading">
                  Griptronics is a trusted Indian manufacturer of
                  high-performance electrical wires, networking cables, cords,
                  and wire harness solutions engineered for reliability, safety,
                  and innovation.
                </h2>

                <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-3 sm:space-y-4">
                  <p>
                    <strong>Premium Quality Standards —</strong> Certified and
                    tested under IS, UL, JIS, JASO & DIN specifications.
                  </p>

                  <p>
                    <strong>Custom Manufacturing —</strong> Tailor-made cable
                    and wire solutions built to your specifications.
                  </p>

                  <p>
                    <strong>Trusted Across Industries —</strong> Supplying to
                    leading telecom, electrical, and networking sectors
                    nationwide.
                  </p>

                  <p>
                    <strong>20+ Years of Expertise —</strong> Built on precision
                    engineering and customer-first values.
                  </p>
                </div>

                <div className="mt-6 sm:mt-8">
                  <Link
                    to="/contact"
                    className="inline-block bg-primary text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base font-semibold hover:opacity-90 transition"
                  >
                    👉 Explore Our Range | Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-bg-gray services-area">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading">
                  Our Services
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4 leading-relaxed">
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
                </p>
              </div>
            </div>

            {/* Services Carousel */}
            <div className="services-items services-carousel text-center">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentService * (100 / servicesPerView)
                    }%)`,
                  }}
                >
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-3"
                    >
                      <div
                        className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden services-item"
                        style={{ backgroundImage: `url(${service.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/90 via-gray-700/70 to-gray-600/50"></div>
                        <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-white">
                          <div className="info">
                            <i
                              className={`${service.icon} text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-6 text-primary`}
                            ></i>
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 font-heading text-white">
                              {service.title}
                            </h4>
                            <p className="text-sm sm:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2 text-white">
                              {service.description}
                            </p>
                            <Link
                              to="/products"
                              className="bg-white text-gray-700 border border-gray-700 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold hover:bg-primary hover:border-primary hover:text-white transition uppercase inline-block"
                            >
                              Read More
                            </Link>
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

        {/* Product Section */}
        <div className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading">
                Product
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                Explore our comprehensive range of high-quality cables and wire
                solutions. From power systems to networking infrastructure, we
                deliver reliable products engineered for excellence and
                performance.
              </p>
            </div>

            {/* Product Range / Filter Buttons */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 font-heading">
                Product Range
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-2 md:gap-3 mix-item-menu max-w-4xl mx-auto">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                      activeFilter === filter.id
                        ? "bg-primary text-gray-700"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name of Product */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800 font-heading">
                Name of Product
              </h3>
              <div className="magnific-mix-gallery text-center">
                <div className="portfolio-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={`${product.title}-${index}`}
                      className={`pf-item ${product.filters.join(
                        " "
                      )} bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden`}
                    >
                      <div className="thumb relative overflow-hidden bg-gray-50 group w-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 group-hover:from-black/5 group-hover:via-black/2 group-hover:to-black/0 transition-all duration-300 z-10 pointer-events-none"></div>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-80 sm:h-96 md:h-[420px] lg:h-[450px] object-cover object-center cursor-pointer transition-all duration-500 ease-out group-hover:scale-110"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          loading="lazy"
                          // onClick={() => {
                          //   setLightboxImage(product.image);
                          //   setIsLightboxOpen(true);
                          // }}
                          onError={() => {
                            console.error(
                              "Image failed to load:",
                              product.image,
                              product.title,
                              typeof product.image
                            );
                          }}
                          onLoad={() => {
                            console.log(
                              "Image loaded successfully:",
                              product.title,
                              product.image
                            );
                          }}
                        />
                      </div>
                      <div className="info p-6 sm:p-7 md:p-8 bg-white">
                        <h4 className="text-xl sm:text-2xl md:text-2xl font-bold mb-3 sm:mb-4 font-heading text-gray-900 leading-tight">
                          {product.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Griptronics Products */}
            <div className="mt-16 sm:mt-20 md:mt-24 bg-bg-gray py-12 sm:py-16 md:py-20 rounded-lg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-12">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-heading">
                    Why Choose Griptronics Products
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="mb-4">
                      <i className="fas fa-industry text-4xl text-primary"></i>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Manufactured under strict supervision
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="mb-4">
                      <i className="fas fa-certificate text-4xl text-primary"></i>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Tested to meet IS, UL, JIS, JASO & DIN standards
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="mb-4">
                      <i className="fas fa-sliders-h text-4xl text-primary"></i>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Custom-built as per client requirements
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="mb-4">
                      <i className="fas fa-shield-alt text-4xl text-primary"></i>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Zero-defect production policy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            {/* <div className="mt-10 sm:mt-12 md:mt-16 text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="inline-block bg-primary text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:opacity-90 transition uppercase"
              >
                View Technical Catalogue
              </a>
              <a
                href="#"
                className="inline-block bg-gray-800 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-700 transition uppercase"
              >
                Request Specifications
              </a>
            </div>
          </div> */}
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
