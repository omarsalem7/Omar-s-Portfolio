import { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiArrowDown,
  FiCheckCircle,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";
import SystemCanvas from "./SystemCanvas";
import { useMouseParallax } from "../../hooks/useParallax";
import "./intro.scss";

export default function Intro({ goToSlide }) {
  const mouse = useMouseParallax({ damping: 0.07 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute smooth multi-layer scroll parallax offsets
  const earthScrollY = scrollY * 0.22;
  const earthScale = Math.max(0.82, 1 - scrollY * 0.00025);

  return (
    <div className="intro-section" id="intro">
      <div className="intro-container">
        {/* Left Column: Pure Editorial & Identity */}
        <div className="intro-text-col">
          <div className="chapter-tag">
            <span className="tag-spark">✦</span>
            <span className="tag-text">Ch. 1 // The System</span>
          </div>

          <div className="hero-identity-block">
            <h1 className="hero-name">Omar Salem</h1>
            <h2 className="hero-role">Senior Frontend Developer</h2>
            <div className="hero-stack-pill">
              <span>Angular</span>
              <span className="sep">&bull;</span>
              <span>React &amp; Next.js</span>
              <span className="sep">&bull;</span>
              <span>Esri GIS</span>
              <span className="sep">&bull;</span>
              <span>TypeScript</span>
            </div>
          </div>

          <p className="hero-manifesto">
            &ldquo;I build interfaces where complex systems feel simple.&rdquo;
          </p>

          {/* Micro-Metadata Information Grid */}
          <div className="hero-meta-grid">
            <div className="meta-card">
              <div className="meta-icon-wrap">
                <FiBriefcase className="icon" />
              </div>
              <div className="meta-text">
                <span className="meta-title">4+ Years Experience</span>
                <span className="meta-sub">Enterprise &amp; Gov Systems</span>
              </div>
            </div>

            <div className="meta-card">
              <div className="meta-icon-wrap">
                <FiMapPin className="icon" />
              </div>
              <div className="meta-text">
                <span className="meta-title">Riyadh &bull; Saudi Arabia</span>
                <span className="meta-sub">
                  On-Site &amp; Remote Worldwide
                </span>
              </div>
            </div>

            <div className="meta-card highlight">
              <div className="meta-icon-wrap active">
                <FiCheckCircle className="icon" />
              </div>
              <div className="meta-text">
                <span className="meta-title">
                  Available for Opportunities
                </span>
                <span className="meta-sub">Senior Frontend Roles</span>
              </div>
            </div>
          </div>

          {/* Editorial CTAs */}
          <div className="cta-row">
            <button
              className="pear-primary-cta"
              onClick={() => goToSlide && goToSlide(1)}
            >
              <span>Selected Works</span>
              <FiArrowDown className="arw" />
            </button>
            <button
              className="pear-secondary-cta"
              onClick={() => goToSlide && goToSlide(4)}
            >
              <span>Inquire Collaboration</span>
              <FiArrowRight className="arw" />
            </button>
          </div>
        </div>

        {/* Right Column: "The System" 3D Canvas Scene with Deep Scroll Parallax */}
        <div
          className="intro-visual-col anim-fade-up d-2"
          style={{
            transform: `translate3d(${(-mouse.x * 8).toFixed(1)}px, ${(earthScrollY - mouse.y * 6).toFixed(1)}px, 0) scale(${earthScale.toFixed(3)})`,
          }}
        >
          <SystemCanvas />
        </div>
      </div>
    </div>
  );
}
