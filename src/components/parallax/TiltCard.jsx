import { useState, useRef, useCallback } from "react";
import "./tiltCard.scss";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  perspective = 1000,
  scale = 1.015,
  glare = true,
  glareMaxOpacity = 0.2,
  style = {},
  ...rest
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  });
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    background: "",
  });

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const width = rect.width;
      const height = rect.height;

      // Compute percentages from center (-1 to 1)
      const xPercent = (clientX / width) * 2 - 1;
      const yPercent = (clientY / height) * 2 - 1;

      // Rotate X is driven by Y coordinate (inverted for natural tilt)
      const rotateX = -yPercent * maxTilt;
      const rotateY = xPercent * maxTilt;

      setTransformStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: "transform 0.1s ease-out",
      });

      if (glare) {
        const glareX = (clientX / width) * 100;
        const glareY = (clientY / height) * 100;

        setGlareStyle({
          opacity: glareMaxOpacity,
          background: `radial-gradient(circle 350px at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255, 255, 255, 0.4) 0%, rgba(192, 235, 106, 0.15) 40%, rgba(255, 255, 255, 0) 80%)`,
        });
      }
    },
    [maxTilt, perspective, scale, glare, glareMaxOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    setTransformStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    });

    if (glare) {
      setGlareStyle((prev) => ({
        ...prev,
        opacity: 0,
      }));
    }
  }, [perspective, glare]);

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        ...transformStyle,
      }}
      {...rest}
    >
      {glare && (
        <div
          className="tilt-card-glare"
          style={{
            opacity: glareStyle.opacity,
            background: glareStyle.background,
          }}
        />
      )}
      <div className="tilt-card-content">{children}</div>
    </div>
  );
}
