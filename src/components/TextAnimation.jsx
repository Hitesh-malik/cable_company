import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Component for cascading text animations
 * Animates words or lines appearing one by one with fade-in and slide-down effects
 * 
 * @param {string} text - The text to animate
 * @param {string} type - 'word' or 'line' - how to split the text
 * @param {number} delay - Base delay between each word/line (in ms)
 * @param {string} className - Additional CSS classes
 * @param {string} as - HTML tag to render as (default: 'p')
 * @param {Object} animationOptions - Options for scroll animation
 */
const TextAnimation = React.memo(({
  text,
  type = "word",
  delay = 50,
  className = "",
  as: Component = "p",
  animationOptions = {},
}) => {
  const [elementRef, isVisible] = useScrollAnimation(animationOptions);
  const [animatedItems, setAnimatedItems] = useState([]);
  const hasAnimated = useRef(false);
  const timeoutsRef = useRef([]);

  // Memoize the split items to avoid recalculation
  const items = useMemo(() => {
    if (!text) return [];
    return type === "line"
      ? text.split("\n").filter((line) => line.trim())
      : text.split(/\s+/).filter((word) => word);
  }, [text, type]);

  // Initialize items only once
  useEffect(() => {
    if (items.length === 0) {
      setAnimatedItems([]);
      return;
    }

    setAnimatedItems(
      items.map((item, index) => ({
        text: item,
        index,
        animated: false,
      }))
    );
    hasAnimated.current = false;
  }, [items.length, text, type]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, []);

  // Animate items when visible
  useEffect(() => {
    if (!isVisible || animatedItems.length === 0 || hasAnimated.current) return;

    hasAnimated.current = true;
    const timeouts = [];

    // Animate items one by one
    animatedItems.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setAnimatedItems((prev) =>
          prev.map((prevItem) =>
            prevItem.index === item.index
              ? { ...prevItem, animated: true }
              : prevItem
          )
        );
      }, index * delay);
      timeouts.push(timeout);
    });

    timeoutsRef.current = timeouts;
  }, [isVisible, delay, animatedItems.length]);

  return (
    <Component
      ref={elementRef}
      className={`text-animation-wrapper ${className}`}
    >
      {animatedItems.map((item, index) => (
        <span
          key={`${item.index}-${item.text}`}
          className={`text-animation-item ${
            item.animated ? "text-animation-visible" : "text-animation-hidden"
          }`}
          style={{ display: type === "line" ? "block" : "inline" }}
        >
          {item.text}
          {type === "word" && index < animatedItems.length - 1 && "\u00A0"}
        </span>
      ))}
    </Component>
  );
});

TextAnimation.displayName = "TextAnimation";

export default TextAnimation;

