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
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
    { id: "photography", label: "Photography" },
    { id: "branding", label: "Branding" },
    { id: "video", label: "Video" },
  ];

  const products = [
    {
      image: "/assets/img/projects/1.jpg",
      title: "Metal Roofing",
      category: "Construction",
      tags: ["branding", "photography"],
    },
    {
      image: "/assets/img/projects/2.jpg",
      title: "Printing And Cutting",
      category: "Color",
      tags: ["video", "development"],
    },
    {
      image: "/assets/img/projects/3.jpg",
      title: "Laminate Flooring",
      category: "Worker",
      tags: ["design", "photography"],
    },
    {
      image: "/assets/img/projects/4.jpg",
      title: "General Builders",
      category: "Development",
      tags: ["branding", "video"],
    },
    {
      image: "/assets/img/projects/5.jpg",
      title: "House Renovation",
      category: "3d design",
      tags: ["design", "photography"],
    },
    {
      image: "/assets/img/projects/6.jpg",
      title: "Green Building",
      category: "Construction",
      tags: ["branding", "design", "development"],
    },
    {
      image: "/assets/img/projects/7.jpg",
      title: "Modern Architecture",
      category: "Design",
      tags: ["design", "development"],
    },
    {
      image: "/assets/img/projects/8.jpg",
      title: "Commercial Building",
      category: "Construction",
      tags: ["branding", "photography"],
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-dark text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-heading">Our Products</h1>
          <p className="text-gray-400 mt-2">Home / Products</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Work History
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Able an hope of body. Any nay shyness article matters own removal
              nothing his forming. Gay own additions education satisfied the
              perpetual.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
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
                    <Link
                      to="/product-details"
                      className="text-white text-2xl opacity-0 group-hover:opacity-100 transition hover:text-primary"
                    >
                      <i className="fas fa-link"></i>
                    </Link>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <Link to="/product-details">
                    <h4 className="text-xl font-semibold mb-2 font-heading hover:text-primary transition">
                      {product.title}
                    </h4>
                  </Link>
                  <a
                    href="#"
                    className="inline-block bg-primary text-gray-900 px-3 py-1 rounded text-xs font-semibold uppercase hover:opacity-90 transition"
                  >
                    {product.category}
                  </a>
                </div>
              </div>
            ))}
          </div>
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

