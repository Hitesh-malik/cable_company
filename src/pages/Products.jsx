import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Lightbox from "../components/Lightbox";
import ProductSection from "../components/ProductSection";

const Products = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Intro with Animation */}
      <motion.div
        className="bg-[#1E2939] text-white py-12 sm:py-16 md:py-20 mt-16 sm:mt-20 lg:mt-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          >
            Products
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-2 max-w-xl text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive Cable & Wiring Solutions engineered for durability and
            performance.
          </motion.p>
        </div>
      </motion.div>

      {/* Info Section with Animation */}
      <motion.div
        className="py-12 sm:py-14 md:py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Griptronics Product Range
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Griptronics manufactures a wide range of electrical & electronic
            cables built under strict supervision, tested to meet IS, UL, JIS,
            JASO & DIN standards, and customized as per client needs.
          </motion.p>

          <motion.ul
            className="mt-6 text-gray-700 space-y-2 text-left mx-auto w-fit"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              "✔ Manufactured under strict supervision",
              "✔ Zero‑defect production policy",
              "✔ Custom‑built as per requirements",
              "✔ High‑quality testing & compliance",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                className="bg-primary text-gray-900 px-6 py-3 rounded font-bold hover:opacity-90"
              >
                View Technical Catalogue
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                className="border border-primary text-primary px-6 py-3 rounded font-bold hover:bg-primary hover:text-gray-900 transition"
              >
                Request Specifications
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Product Section with Animations */}
      <ProductSection 
        showTitle={false}
        showDescription={false}
        showWhyChoose={true}
        initialFilter="*"
        showLoadMore={false}
      />

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
