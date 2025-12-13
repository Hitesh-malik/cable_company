import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";
import {
  FaFolder,
  FaHeart,
  FaCalendarAlt,
  FaStar,
  FaStarHalfAlt,
  FaEye,
  FaLink,
  FaPlay,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";

const ProductDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const productImages = [
    "/assets/img/projects/b1.jpg",
    "/assets/img/projects/b2.jpg",
    "/assets/img/projects/b3.jpg",
  ];

  const relatedProducts = [
    {
      image: "/assets/img/projects/1.jpg",
      title: "Business",
      type: "image",
      link: "/assets/img/projects/1.jpg",
    },
    {
      image: "/assets/img/projects/2.jpg",
      title: "Business",
      type: "video",
      link: "https://www.youtube.com/watch?v=KVzCfWWzGyA",
    },
    {
      image: "/assets/img/projects/3.jpg",
      title: "Business",
      type: "image",
      link: "/assets/img/projects/3.jpg",
    },
    {
      image: "/assets/img/projects/4.jpg",
      title: "Business",
      type: "video",
      link: "https://www.youtube.com/watch?v=KVzCfWWzGyA",
    },
    {
      image: "/assets/img/projects/5.jpg",
      title: "Business",
      type: "image",
      link: "/assets/img/projects/5.jpg",
    },
    {
      image: "/assets/img/projects/6.jpg",
      title: "Business",
      type: "image",
      link: "/assets/img/projects/6.jpg",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  const handleImageClick = (image) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div
        className="relative text-white py-12 sm:py-16 md:py-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/img/banner/3.jpg)" }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 sm:mb-4">
              Product Details
            </h1>
            <ul className="flex justify-center gap-4 text-gray-300">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/products" className="hover:text-primary">
                  Pages
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary">Products</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Portfolio Details */}
      <div className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Image Carousel */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src={productImages[currentImageIndex]}
                alt="Product"
                className="w-full h-full object-cover"
              />
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-900 p-3 rounded-full transition"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-900 p-3 rounded-full transition"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition ${
                          index === currentImageIndex
                            ? "bg-primary w-8"
                            : "bg-white bg-opacity-50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 order-2 lg:order-1 w-full">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 font-heading">
                Behaviour are contented
              </h3>
              <ul className="flex gap-6 mb-6">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition"
                  >
                    <FaFolder />
                    <span>Home Design</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition"
                  >
                    <FaHeart />
                    <span>123</span>
                  </a>
                </li>
              </ul>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Its sometimes her behaviour are contented. Do listening am
                eagerness oh objection collected. Together gay feelings continue
                juvenile had off one. Unknown may service subject her letters
                one bed. Child years noise ye in forty. Loud in this in both
                hold. My entrance me is disposal bachelor remember relation.
                <br />
                <br />
                Answer misery adieus add wooded how nay men before though.
                Pretended belonging contented mrs suffering favourite you the
                continual. Mrs civil nay least means tried drift. Natural end
                law whether but and towards certain. Furnished unfeeling his
                sometimes see day promotion. Quitting informed concerns can men
                now. Projection to or up conviction uncommonly delightful
                continuing. In appetite ecstatic opinions hastened by handsome
                admitted.
              </p>

              {/* Tags and Share */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-gray-200">
                <div className="tags">
                  <ul className="flex flex-wrap items-center gap-2">
                    <li className="text-gray-700 font-semibold">Tags:</li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-primary transition"
                      >
                        Construction
                      </a>
                    </li>
                    <li>
                      <span className="text-gray-400">/</span>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-primary transition"
                      >
                        Interior
                      </a>
                    </li>
                    <li>
                      <span className="text-gray-400">/</span>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-primary transition"
                      >
                        3D
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="share">
                  <ul className="flex flex-wrap items-center gap-4">
                    <li className="text-gray-700 font-semibold">Share:</li>
                    <li>
                      <a
                        href="https://www.facebook.com/griptronicsindia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition text-xl"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/griptronicsindia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition text-xl"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/griptronics-india-wires-cables-pvt-ltd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition text-xl"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-primary transition text-xl"
                      >
                        <FaGooglePlusG />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2 w-full">
              <div className="bg-bg-gray p-6 sm:p-8 rounded-lg lg:sticky lg:top-4">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 font-heading">
                  Product Details
                </h4>
                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <FaCalendarAlt />
                  <span>25 Dec, 2024</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-4 border-b border-gray-300">
                    <span className="text-gray-600">client name</span>
                    <span className="font-semibold text-gray-900">
                      Jonathom Doe
                    </span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-gray-300">
                    <span className="text-gray-600">Architect</span>
                    <span className="font-semibold text-gray-900">
                      Machol Doe
                    </span>
                  </li>
                  <li className="flex justify-between items-center pb-4 border-b border-gray-300">
                    <span className="text-gray-600">Budget</span>
                    <span className="font-semibold text-gray-900">
                      $1212345.00
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">rating</span>
                    <div className="flex gap-1 text-primary">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-heading">
              Related Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedProducts.map((product, index) => (
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
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4">
                      <h4 className="text-white text-xl font-bold mb-2 absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition">
                        {product.title}
                      </h4>
                      {product.type === "image" ? (
                        <button
                          onClick={() => handleImageClick(product.link)}
                          className="text-white text-2xl opacity-0 group-hover:opacity-100 transition hover:text-primary"
                        >
                          <FaEye />
                        </button>
                      ) : (
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-2xl opacity-0 group-hover:opacity-100 transition hover:text-primary"
                        >
                          <FaPlay />
                        </a>
                      )}
                      <a
                        href="#"
                        className="text-white text-2xl opacity-0 group-hover:opacity-100 transition hover:text-primary"
                      >
                        <FaLink />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

export default ProductDetails;

