import React, { useState } from "react";
import { motion } from "framer-motion";

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

const ProductSection = ({
  showTitle = true,
  showDescription = true,
  showWhyChoose = true,
  initialFilter = "*",
  showLoadMore = true,
}) => {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [visibleProductsCount, setVisibleProductsCount] = useState(
    showLoadMore ? 3 : 999
  );

  const products = [
    {
      image: AVSSWireImg,
      title: "AVSS Wire",
      category: "Read More",
      description:
        "High-quality AVSS automotive wires designed for reliable vehicle electrical systems with flexible multi-colored striped pattern.",
      filters: ["automobile-wires"],
      type: "image",
    },
    {
      image: FLRYWireImg,
      title: "FLRY Wire",
      category: "Read More",
      description:
        "Premium FLRY automotive wires with single-color insulation, designed for heavy-duty vehicle electrical applications.",
      filters: ["automobile-wires"],
      type: "image",
    },
    {
      image: BISCablesImg,
      title: "BIS Cables",
      category: "Read More",
      description:
        "BIS certified building wires meeting Indian Standard specifications for residential and commercial electrical installations.",
      filters: ["building-wire-panel-wire"],
      type: "image",
    },
    {
      image: HouseWireImg,
      title: "House Wire",
      category: "Read More",
      description:
        "Premium house wires designed for safe and reliable residential electrical wiring systems.",
      filters: ["building-wire-panel-wire"],
      type: "image",
    },
    {
      image: SolarCablesImg,
      title: "Solar Cables",
      category: "Read More",
      description:
        "Specialized solar cables engineered for photovoltaic systems with excellent UV resistance and durability.",
      filters: ["building-wire-panel-wire"],
      type: "image",
    },
    {
      image: ULCULCablesImg,
      title: "UL CUL Cables",
      category: "Read More",
      description:
        "UL and CUL certified cables meeting North American safety standards for building and panel wire applications.",
      filters: ["building-wire-panel-wire"],
      type: "image",
    },
    {
      image: VDECablesImg,
      title: "VDE Cables",
      category: "Read More",
      description:
        "VDE approved cables conforming to German standards, ideal for European building and panel wiring requirements.",
      filters: ["building-wire-panel-wire"],
      type: "image",
    },
    {
      image: CoAxialImg,
      title: "Co-Axial Cables",
      category: "Read More",
      description:
        "Premium coaxial cables for high-frequency signal transmission and communication systems.",
      filters: ["co-axial-cables"],
      type: "image",
    },
    {
      image: ControlCableImg,
      title: "Control Cable",
      category: "Read More",
      description:
        "Precision control cables for automation, instrumentation, and industrial control systems.",
      filters: ["control-cable"],
      type: "image",
    },
    {
      image: HDMICablesImg,
      title: "HDMI Cables",
      category: "Read More",
      description:
        "High-definition multimedia interface cables for superior audio and video transmission in home entertainment and professional AV systems.",
      filters: ["duraconnect-data-cables"],
      type: "image",
    },
    {
      image: USBCablesImg,
      title: "USB Cables",
      category: "Read More",
      description:
        "Universal Serial Bus cables for data transfer, charging, and connectivity across various devices and applications.",
      filters: ["duraconnect-data-cables"],
      type: "image",
    },
    {
      image: Cat5eSFTPImg,
      title: "Cat-5e SFTP Cable",
      category: "Read More",
      description:
        "Category 5e Shielded Foiled Twisted Pair cable for enhanced EMI protection and reliable data transmission.",
      filters: ["networking-cables"],
      type: "image",
    },
    {
      image: Cat5eUTPImg,
      title: "Cat-5e UTP Cable",
      category: "Read More",
      description:
        "Category 5e Unshielded Twisted Pair cable for cost-effective networking solutions in standard environments.",
      filters: ["networking-cables"],
      type: "image",
    },
    {
      image: Cat6SFTPImg,
      title: "Cat-6 SFTP Cable",
      category: "Read More",
      description:
        "Category 6 Shielded Foiled Twisted Pair cable offering superior performance and interference protection for high-speed networks.",
      filters: ["networking-cables"],
      type: "image",
    },
    {
      image: Cat6UTPImg,
      title: "Cat-6 UTP Cable",
      category: "Read More",
      description:
        "Category 6 Unshielded Twisted Pair cable designed for Gigabit Ethernet and high-bandwidth networking applications.",
      filters: ["networking-cables"],
      type: "image",
    },
    {
      image: ConnectorImg,
      title: "Power Cord Connector",
      category: "Read More",
      description:
        "High-quality power cord connectors for secure and reliable electrical connections in appliances and equipment.",
      filters: ["power-cord"],
      type: "image",
    },
    {
      image: EuropePlugImg,
      title: "Europe Plug",
      category: "Read More",
      description:
        "European standard power plugs compliant with CEE 7/4 (Schuko) and CEE 7/7 specifications for European markets.",
      filters: ["power-cord"],
      type: "image",
    },
    {
      image: IndianPlugImg,
      title: "Indian Plug",
      category: "Read More",
      description:
        "Indian standard power plugs (IS 1293) designed for safe and compliant electrical connections in Indian markets.",
      filters: ["power-cord"],
      type: "image",
    },
    {
      image: NorthAmericanPlugImg,
      title: "North American Plug",
      category: "Read More",
      description:
        "North American standard power plugs (NEMA) meeting UL/CSA standards for US and Canadian electrical systems.",
      filters: ["power-cord"],
      type: "image",
    },
    {
      image: PanelWiresImg,
      title: "Panel Wires",
      category: "Read More",
      description:
        "Specialized panel wires for control panels and electrical distribution systems.",
      filters: ["panel-wires"],
      type: "image",
    },
    {
      image: BatteryCableImg,
      title: "Battery Cables",
      category: "Read More",
      description:
        "Heavy-duty battery cables for automotive and industrial power applications.",
      filters: ["battery-cables"],
      type: "image",
    },
    {
      image: SubmersibleImg,
      title: "Submersible Flat Cable",
      category: "Read More",
      description:
        "Water-resistant submersible flat cables designed for underwater and harsh environment applications.",
      filters: ["submersible-flat-cable"],
      type: "image",
    },
    {
      image: AirConditionerWireHarnessImg,
      title: "Air Conditioner Wire Harness",
      category: "Read More",
      description:
        "Specialized wire harnesses for air conditioning systems, ensuring reliable electrical connections and optimal performance.",
      filters: ["wire-harnesses"],
      type: "image",
    },
    {
      image: DishwasherWireHarnessImg,
      title: "Dishwasher Wire Harness",
      category: "Read More",
      description:
        "Durable wire harnesses designed for dishwasher applications, with water-resistant properties for safe operation.",
      filters: ["wire-harnesses"],
      type: "image",
    },
    {
      image: MicrowaveWireHarnessImg,
      title: "Microwave Wire Harness",
      category: "Read More",
      description:
        "High-quality wire harnesses for microwave ovens, engineered to handle high-frequency electrical loads safely.",
      filters: ["wire-harnesses"],
      type: "image",
    },
    {
      image: RefrigeratorWireHarnessImg,
      title: "Refrigerator Wire Harness",
      category: "Read More",
      description:
        "Reliable wire harnesses for refrigerator systems, providing secure connections for cooling and control components.",
      filters: ["wire-harnesses"],
      type: "image",
    },
    {
      image: WashingMachineWireHarnessImg,
      title: "Washing Machine Wire Harness",
      category: "Read More",
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

  // Get visible products based on pagination
  const visibleProducts = filteredProducts.slice(0, visibleProductsCount);
  const hasMoreProducts = visibleProductsCount < filteredProducts.length;

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setVisibleProductsCount(showLoadMore ? 3 : 999);
  };

  const handleLoadMore = () => {
    setVisibleProductsCount((prev) =>
      Math.min(prev + 3, filteredProducts.length)
    );
  };

  return (
    <motion.div
      className="py-12 sm:py-16 md:py-20 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title and Description */}
        {showTitle && (
          <motion.div
            className="text-center mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            >
              Product
            </motion.h2>
            {showDescription && (
              <motion.p
                className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Explore our comprehensive range of high-quality cables and wire
                solutions. From power systems to networking infrastructure, we
                deliver reliable products engineered for excellence and
                performance.
              </motion.p>
            )}
          </motion.div>
        )}

        {/* Product Range / Filter Buttons */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 font-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Product Range
          </motion.h3>
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-2 md:gap-3 mix-item-menu max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                  activeFilter === filter.id
                    ? "bg-primary text-gray-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + index * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Name of Product */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800 font-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Name of Product
          </motion.h3>
          <div className="magnific-mix-gallery text-center">
            <motion.div
              className="portfolio-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              {visibleProducts.map((product, index) => (
                <motion.div
                  key={`${product.title}-${index}`}
                  className={`pf-item ${product.filters.join(
                    " "
                  )} bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="thumb relative overflow-hidden bg-gray-50 group w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/0 group-hover:from-black/5 group-hover:via-black/2 group-hover:to-black/0 transition-all duration-300 z-10 pointer-events-none"></div>
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-80 sm:h-96 md:h-[420px] lg:h-[450px] object-cover object-center cursor-pointer"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      loading="lazy"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
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
                    {/* Hover Overlay with Product Details */}
                    <div className="product-overlay absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/85 to-primary/75 flex flex-col items-center justify-center p-6 sm:p-8 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                      <div className="text-center text-white">
                        <h4 className="product-overlay-title text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-heading text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-8 transition-all duration-500 delay-150 ease-out">
                          {product.title}
                        </h4>
                        <p className="product-overlay-desc text-sm sm:text-base md:text-lg text-white/95 leading-relaxed max-w-md mx-auto opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-6 transition-all duration-500 delay-200 ease-out">
                          {product.description}
                        </p>
                        <div className="product-overlay-category mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 group-hover:scale-100 scale-95 transition-all duration-400 delay-250 ease-out">
                          <span className="inline-block bg-white text-primary px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wide hover:scale-105 transition-transform duration-200">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {showLoadMore && hasMoreProducts && (
              <motion.div
                className="mt-10 sm:mt-12 md:mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.button
                  onClick={handleLoadMore}
                  className="bg-primary text-gray-700 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:opacity-90 transition uppercase shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Load More Products
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Why Choose Griptronics Products */}
        {showWhyChoose && (
          <motion.div
            className="mt-16 sm:mt-20 md:mt-24 bg-bg-gray py-12 sm:py-16 md:py-20 rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center mb-10 sm:mb-12"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-heading"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                >
                  Why Choose Griptronics Products
                </motion.h3>
              </motion.div>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {[
                  {
                    icon: "fas fa-industry",
                    text: "Manufactured under strict supervision",
                  },
                  {
                    icon: "fas fa-certificate",
                    text: "Tested to meet IS, UL, JIS, JASO & DIN standards",
                  },
                  {
                    icon: "fas fa-sliders-h",
                    text: "Custom-built as per client requirements",
                  },
                  {
                    icon: "fas fa-shield-alt",
                    text: "Zero-defect production policy",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.15,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    }}
                  >
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <i className={`${item.icon} text-4xl text-primary`}></i>
                    </motion.div>
                    <motion.p
                      className="text-sm sm:text-base font-semibold text-gray-800"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6 + index * 0.15,
                      }}
                    >
                      {item.text}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductSection;
