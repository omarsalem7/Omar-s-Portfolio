import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hook to track normalized mouse coordinates with smooth linear interpolation (lerp).
 * Returns { x, y } in range [-1, 1] relative to viewport center.
 */
export function useMouseParallax(options = {}) {
  const { damping = 0.08, disabled = false } = options;
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const reqIdRef = useRef(null);

  useEffect(() => {
    if (disabled) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalize to -1 to +1 from screen center
      const nx = (e.clientX / innerWidth) * 2 - 1;
      const ny = (e.clientY / innerHeight) * 2 - 1;
      targetRef.current = { x: nx, y: ny };
    };

    const animate = () => {
      // Lerp smoothing: current += (target - current) * damping
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * damping;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * damping;

      setCoords({
        x: Number(currentRef.current.x.toFixed(4)),
        y: Number(currentRef.current.y.toFixed(4)),
      });

      reqIdRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    reqIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
    };
  }, [damping, disabled]);

  return coords;
}

/**
 * Hook to track scroll progress and parallax offset relative to an element or the window.
 */
export function useScrollParallax(speed = 0.2) {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!elementRef.current) {
      setOffsetY(window.scrollY * speed);
      return;
    }
    const rect = elementRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    // Calculate how far through the viewport the element is
    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    // Centered offset in pixels
    const offset = (progress - 0.5) * viewportHeight * speed;
    setOffsetY(offset);
  }, [speed]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return [elementRef, offsetY];
}
