import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for the observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 */
export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
  triggerOnce = true,
} = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const handleIntersection = ([entry]) => {
      if (entry.isIntersecting && (!triggerOnce || !hasTriggeredRef.current)) {
        setIsVisible(true);
        hasTriggeredRef.current = true;
        if (triggerOnce && observerRef.current) {
          observerRef.current.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    };

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      {
        threshold,
        rootMargin,
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
};

