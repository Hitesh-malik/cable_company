import React, { useState } from "react";
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

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filters = [
    { id: "all", label: "All" },
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

  const products = [
    {
      image: AVSSWireImg,
      title: "AVSS Wire",
      category:
        "High-quality AVSS automotive wires designed for reliable vehicle electrical systems with flexible multi-colored striped pattern",
      tags: ["automobile-wires"],
    },
    {
      image: FLRYWireImg,
      title: "FLRY Wire",
      category:
        "Premium FLRY automotive wires with single-color insulation, designed for heavy-duty vehicle electrical applications",
      tags: ["automobile-wires"],
    },
    {
      image: BISCablesImg,
      title: "BIS Cables",
      category:
        "BIS certified building wires meeting Indian Standard specifications for residential and commercial electrical installations",
      tags: ["building-wire-panel-wire"],
    },
    {
      image: HouseWireImg,
      title: "House Wire",
      category:
        "Premium house wires designed for safe and reliable residential electrical wiring systems",
      tags: ["building-wire-panel-wire"],
    },
    {
      image: SolarCablesImg,
      title: "Solar Cables",
      category:
        "Specialized solar cables engineered for photovoltaic systems with excellent UV resistance and durability",
      tags: ["building-wire-panel-wire"],
    },
    {
      image: ULCULCablesImg,
      title: "UL CUL Cables",
      category:
        "UL and CUL certified cables meeting North American safety standards for building and panel wire applications",
      tags: ["building-wire-panel-wire"],
    },
    {
      image: VDECablesImg,
      title: "VDE Cables",
      category:
        "VDE approved cables conforming to German standards, ideal for European building and panel wiring requirements",
      tags: ["building-wire-panel-wire"],
    },
    {
      image: CoAxialImg,
      title: "Co-Axial Cables",
      category:
        "Premium coaxial cables for high-frequency signal transmission and communication systems",
      tags: ["co-axial-cables"],
    },
    {
      image: ControlCableImg,
      title: "Control Cable",
      category:
        "Precision control cables for automation, instrumentation, and industrial control systems",
      tags: ["control-cable"],
    },
    {
      image: HDMICablesImg,
      title: "HDMI Cables",
      category:
        "High-definition multimedia interface cables for superior audio and video transmission in home entertainment and professional AV systems",
      tags: ["duraconnect-data-cables"],
    },
    {
      image: USBCablesImg,
      title: "USB Cables",
      category:
        "Universal Serial Bus cables for data transfer, charging, and connectivity across various devices and applications",
      tags: ["duraconnect-data-cables"],
    },
    {
      image: Cat5eSFTPImg,
      title: "Cat-5e SFTP Cable",
      category:
        "Category 5e Shielded Foiled Twisted Pair cable for enhanced EMI protection and reliable data transmission",
      tags: ["networking-cables"],
    },
    {
      image: Cat5eUTPImg,
      title: "Cat-5e UTP Cable",
      category:
        "Category 5e Unshielded Twisted Pair cable for cost-effective networking solutions in standard environments",
      tags: ["networking-cables"],
    },
    {
      image: Cat6SFTPImg,
      title: "Cat-6 SFTP Cable",
      category:
        "Category 6 Shielded Foiled Twisted Pair cable offering superior performance and interference protection for high-speed networks",
      tags: ["networking-cables"],
    },
    {
      image: Cat6UTPImg,
      title: "Cat-6 UTP Cable",
      category:
        "Category 6 Unshielded Twisted Pair cable designed for Gigabit Ethernet and high-bandwidth networking applications",
      tags: ["networking-cables"],
    },
    {
      image: ConnectorImg,
      title: "Power Cord Connector",
      category:
        "High-quality power cord connectors for secure and reliable electrical connections in appliances and equipment",
      tags: ["power-cord"],
    },
    {
      image: EuropePlugImg,
      title: "Europe Plug",
      category:
        "European standard power plugs compliant with CEE 7/4 (Schuko) and CEE 7/7 specifications for European markets",
      tags: ["power-cord"],
    },
    {
      image: IndianPlugImg,
      title: "Indian Plug",
      category:
        "Indian standard power plugs (IS 1293) designed for safe and compliant electrical connections in Indian markets",
      tags: ["power-cord"],
    },
    {
      image: NorthAmericanPlugImg,
      title: "North American Plug",
      category:
        "North American standard power plugs (NEMA) meeting UL/CSA standards for US and Canadian electrical systems",
      tags: ["power-cord"],
    },
    {
      image: PanelWiresImg,
      title: "Panel Wires",
      category:
        "Specialized panel wires for control panels and electrical distribution systems",
      tags: ["panel-wires"],
    },
    {
      image: BatteryCableImg,
      title: "Battery Cables",
      category:
        "Heavy-duty battery cables for automotive and industrial power applications",
      tags: ["battery-cables"],
    },
    {
      image: SubmersibleImg,
      title: "Submersible Flat Cable",
      category:
        "Water-resistant submersible flat cables designed for underwater and harsh environment applications",
      tags: ["submersible-flat-cable"],
    },
    {
      image: AirConditionerWireHarnessImg,
      title: "Air Conditioner Wire Harness",
      category:
        "Specialized wire harnesses for air conditioning systems, ensuring reliable electrical connections and optimal performance",
      tags: ["wire-harnesses"],
    },
    {
      image: DishwasherWireHarnessImg,
      title: "Dishwasher Wire Harness",
      category:
        "Durable wire harnesses designed for dishwasher applications, with water-resistant properties for safe operation",
      tags: ["wire-harnesses"],
    },
    {
      image: MicrowaveWireHarnessImg,
      title: "Microwave Wire Harness",
      category:
        "High-quality wire harnesses for microwave ovens, engineered to handle high-frequency electrical loads safely",
      tags: ["wire-harnesses"],
    },
    {
      image: RefrigeratorWireHarnessImg,
      title: "Refrigerator Wire Harness",
      category:
        "Reliable wire harnesses for refrigerator systems, providing secure connections for cooling and control components",
      tags: ["wire-harnesses"],
    },
    {
      image: WashingMachineWireHarnessImg,
      title: "Washing Machine Wire Harness",
      category:
        "Robust wire harnesses for washing machines, designed to withstand moisture and mechanical stress in laundry appliances",
      tags: ["wire-harnesses"],
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-white">

      {/* Page Intro */}
      <div className="bg-[#1E2939] text-white py-12 sm:py-16 md:py-20 pt-28 sm:pt-32 md:pt-36">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white">
            Products
          </h1>
          <p className="text-gray-300 mt-2 max-w-xl text-sm sm:text-base">
            Comprehensive Cable & Wiring Solutions engineered for durability and
            performance.
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading">
            Griptronics Product Range
          </h2>
          <p className="text-gray-600">
            Griptronics manufactures a wide range of electrical & electronic
            cables built under strict supervision, tested to meet IS, UL, JIS,
            JASO & DIN standards, and customized as per client needs.
          </p>

          <ul className="mt-6 text-gray-700 space-y-2 text-left mx-auto w-fit">
            <li>✔ Manufactured under strict supervision</li>
            <li>✔ Zero‑defect production policy</li>
            <li>✔ Custom‑built as per requirements</li>
            <li>✔ High‑quality testing & compliance</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              // to="/catalogue"
              className="bg-primary text-gray-900 px-6 py-3 rounded font-bold hover:opacity-90"
            >
              View Technical Catalogue
            </Link>
            <Link
              // to="/request-specs"
              className="border border-primary text-primary px-6 py-3 rounded font-bold hover:bg-primary hover:text-gray-900 transition"
            >
              Request Specifications
            </Link>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded text-xs sm:text-sm md:text-base font-semibold transition ${
                activeFilter === filter.id
                  ? "bg-primary text-gray-900"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 bg-white"
            >
              <div className="relative overflow-hidden bg-gray-50 group w-full">
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
                  onError={(e) => {
                    console.error(
                      "Image failed to load:",
                      product.image,
                      product.title
                    );
                    e.target.style.display = "none";
                  }}
                  onLoad={(e) => {
                    console.log("Image loaded successfully:", product.title);
                  }}
                />
              </div>
              <div className="p-6 sm:p-7 md:p-8 bg-white">
                <h4 className="text-xl sm:text-2xl md:text-2xl font-bold mb-3 sm:mb-4 font-heading text-gray-900 leading-tight">
                  {product.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
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

export default Products;
