import { useState, useEffect, useRef } from "react";
import "./customCursor.scss";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) {
        setIsVisible(true);
        ringPos.current = { x: e.clientX, y: e.clientY };
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element
      const target = e.target;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, input, textarea, select, .ledger-item, .tech-pill, .meta-card, .btn-launch-live, [role="button"], [role="tab"], .pear-primary-cta, .pear-secondary-cta'
      );

      const is3dCanvas = target.closest("#system-canvas, .intro-visual-col");
      const isLiveLink = target.closest(".btn-launch-live");
      const isStageVisual = target.closest(".stage-visual");

      if (isInteractive) {
        setIsHovered(true);
        if (isLiveLink) {
          setCursorText("OPEN");
        } else {
          setCursorText("");
        }
      } else if (is3dCanvas) {
        setIsHovered(true);
        setCursorText("DRAG");
      } else if (isStageVisual) {
        setIsHovered(true);
        setCursorText("SYSTEM");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    // Smooth fluid physics for the trailing ring
    const renderLoop = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    rafId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  return (
    <div
      className={`custom-cursor-layer ${isVisible ? "active" : ""} ${
        isHovered ? "hovered" : ""
      } ${isClicking ? "clicking" : ""}`}
      aria-hidden="true"
    >
      {/* Precision Instant Pointer Dot */}
      <div ref={dotRef} className="cursor-dot">
        <span className="dot-spark" />
      </div>

      {/* Fluid Trailing Halo Ring */}
      <div ref={ringRef} className="cursor-ring">
        {cursorText && <span className="cursor-label">{cursorText}</span>}
      </div>
    </div>
  );
}
