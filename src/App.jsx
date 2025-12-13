import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FullScreenLoader from "./components/FullScreenLoader";
import "./App.css";

function App() {
  const [isAppReady, setIsAppReady] = useState(false); // data/UI ready
  const [showLoader, setShowLoader] = useState(true); // mounted for exit animation

  useEffect(() => {
    const MIN_DURATION = 700; // ms – prevents quick flicker
    const start = performance.now();

    const handleLoad = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DURATION - elapsed);

      window.setTimeout(() => {
        setIsAppReady(true);
      }, remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!isAppReady) return;

    const EXIT_DURATION = 650; // match CSS fade/scale duration
    const timeout = window.setTimeout(() => {
      setShowLoader(false);
    }, EXIT_DURATION);

    return () => window.clearTimeout(timeout);
  }, [isAppReady]);

  return (
    <div className="app-shell">
      {showLoader && (
        <FullScreenLoader
          color="#FF8C00"
          strokeWidth={3}
          duration={2.4}
          easing="cubic-bezier(0.22, 1, 0.36, 1)"
          pathShape="infinity"
          isVisible={!isAppReady}
        />
      )}

      <div className={"app-shell-inner" + (isAppReady ? " visible" : "")}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
