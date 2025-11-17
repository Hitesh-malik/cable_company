import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filters = [
    { id: "all", label: "All" },
    { id: "power", label: "Power Cables" },
    { id: "networking", label: "Networking Cables" },
    { id: "av", label: "HDMI & AV Cables" },
    { id: "harness", label: "Wire Harness" },
    { id: "industrial", label: "Industrial Wires" },
    { id: "control", label: "Instrumentation" },
  ];

  const products = [
    {
      image: "/assets/img/products/power.jpg",
      title: "Power Cables",
      category: "High-efficiency electrical cables",
      tags: ["power"],
    },
    {
      image: "/assets/img/products/networking.jpg",
      title: "Networking Cables",
      category: "High‑speed LAN & data cables",
      tags: ["networking"],
    },
    {
      image: "/assets/img/products/hdmi.jpg",
      title: "HDMI & Audio-Video Cables",
      category: "Superior-grade digital transmission",
      tags: ["av"],
    },
    {
      image: "/assets/img/products/harness.jpg",
      title: "Wire Harness Assemblies",
      category: "Custom-built harnesses",
      tags: ["harness"],
    },
    {
      image: "/assets/img/products/industrial.jpg",
      title: "Industrial Wires",
      category: "Heavy‑duty industrial applications",
      tags: ["industrial"],
    },
    {
      image: "/assets/img/products/control.jpg",
      title: "Control & Instrumentation Cables",
      category: "Precise automation signal cables",
      tags: ["control"],
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Intro */}
      <div className="bg-[#1E2939] text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white">Products</h1>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setLightboxImage(product.image);
                      setIsLightboxOpen(true);
                    }}
                    className="text-white text-2xl opacity-0 group-hover:opacity-100 transition hover:text-primary"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  {/* <Link
                    to="/product-details"
                    className="text-white text-2xl opacity-0 group-hover:opacity-100 transition hover:text-primary"
                  >
                    <i className="fas fa-link"></i>
                  </Link> */}
                </div>
              </div>
              <div className="p-4 bg-white">
                <p >
                  <h4 className="text-xl font-semibold mb-2 font-heading">
                    {product.title}
                  </h4>
                </p>
                <p className="text-sm text-gray-600">{product.category}</p>
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
