import React from "react";

/**
 * Premium SVG full-screen loader.
 *
 * Props:
 * - color (string): main neon color (CSS color string)
 * - strokeWidth (number): stroke width of the path
 * - duration (number): animation duration in seconds
 * - easing (string): CSS easing for the stroke animation
 * - pathShape (string): "infinity" | "circle" | "hex"
 * - backgroundColor (string): overlay background
 * - isVisible (boolean): controls fade-out transition (keeps mounted while hiding)
 */
function FullScreenLoader({
  color = "#FF8C00",
  strokeWidth = 2.8,
  duration = 2.4,
  easing = "cubic-bezier(0.19, 1, 0.22, 1)",
  pathShape = "infinity",
  // Dark gradient background to keep strong brand contrast
  backgroundColor = "radial-gradient(circle at top, #4A4A4A 0, #5A5A5A 40%, #6A6A6A 100%)",
  isVisible = true,
}) {
  const PATHS = {
    infinity:
      "M 20 60 C 20 40 40 40 60 60 C 80 80 100 80 100 60 C 100 40 80 40 60 60 C 40 80 20 80 20 60 Z",
    circle: "M 60 20 A 40 40 0 1 1 59.9 20 Z",
    hex: "M 60 18 L 90 34 L 90 70 L 60 86 L 30 70 L 30 34 Z",
  };

  const pathD = PATHS[pathShape] || PATHS.infinity;

  const styleVars = {
    "--loader-color": color,
    "--loader-stroke-width": strokeWidth,
    "--loader-duration": `${duration}s`,
    "--loader-easing": easing,
  };

  return (
    <div
      className={"loader-overlay" + (isVisible ? "" : " hidden")}
      style={{ background: backgroundColor, ...styleVars }}
    >
      {/* Ambient service bubbles around the main loader */}
      <div className="loader-bubbles" aria-hidden="true">
        {/* Cable / internet */}
        <div className="loader-bubble bubble-1">
          <svg viewBox="0 0 32 32" className="bubble-svg">
            <circle cx="16" cy="16" r="14" className="bubble-ring" />
            <path
              d="M7 18 C9 14 13 14 15 18 C17 22 21 22 23 18"
              className="bubble-path"
            />
            <path
              d="M11 10 L21 10 M19 8 L21 10 L19 12"
              className="bubble-path"
            />
          </svg>
        </div>

        {/* Home / building */}
        <div className="loader-bubble bubble-2">
          <svg viewBox="0 0 32 32" className="bubble-svg">
            <circle cx="16" cy="16" r="14" className="bubble-ring" />
            <path
              d="M8 17 L16 9 L24 17"
              className="bubble-path"
            />
            <path
              d="M11 17 L11 23 L21 23 L21 17"
              className="bubble-path"
            />
          </svg>
        </div>

        {/* Electrical / energy */}
        <div className="loader-bubble bubble-3">
          <svg viewBox="0 0 32 32" className="bubble-svg">
            <circle cx="16" cy="16" r="14" className="bubble-ring" />
            <path
              d="M14 7 L10 18 L15 18 L13 25 L22 13 L17 13 L19 7 Z"
              className="bubble-path"
            />
          </svg>
        </div>

        {/* Tools / renovation */}
        <div className="loader-bubble bubble-4">
          <svg viewBox="0 0 32 32" className="bubble-svg">
            <circle cx="16" cy="16" r="14" className="bubble-ring" />
            <path
              d="M10 10 L14 14 L12 16 L16 20 L18 18 L22 22"
              className="bubble-path"
            />
            <path
              d="M18 9 L22 13"
              className="bubble-path"
            />
          </svg>
        </div>

        {/* Connectivity / smart home */}
        <div className="loader-bubble bubble-5">
          <svg viewBox="0 0 32 32" className="bubble-svg">
            <circle cx="16" cy="16" r="14" className="bubble-ring" />
            <circle cx="16" cy="16" r="2.4" className="bubble-path" />
            <path
              d="M11 14 A5 5 0 0 1 21 14"
              className="bubble-path"
            />
            <path
              d="M9 12 A7.5 7.5 0 0 1 23 12"
              className="bubble-path"
            />
          </svg>
        </div>
      </div>

      <div className="loader-inner premium">
        <svg
          className="loader-svg"
          viewBox="0 0 120 120"
          aria-label="Loading application"
          role="img"
        >
          <defs>
            <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.2" />
              <stop offset="45%" stopColor={color} stopOpacity="1" />
              <stop offset="100%" stopColor={color} stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <path
            d={pathD}
            className="loader-path-bg"
            vectorEffect="non-scaling-stroke"
          />

          <path
            d={pathD}
            className="loader-path-main"
            vectorEffect="non-scaling-stroke"
          />

          <circle
            cx="60"
            cy="60"
            r="3"
            className="loader-orbit-dot"
          ></circle>
        </svg>
        <div className="loader-text">
          Loading OTRALI Construction services & solutions
        </div>
      </div>
    </div>
  );
}

export default FullScreenLoader;

