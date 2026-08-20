import { useEffect, useRef } from "react";
import { init } from "ityped";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails, SiJavascript } from "react-icons/si";
import "./intro.scss";

export default function Intro({ goToSlide }) {
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerHTML = "";
      init(textRef.current, {
        showCursor: true,
        backDelay: 1600,
        backSpeed: 45,
        strings: [
          "Full Stack Software Engineer",
          "Technical Support Engineer",
          "React.js & Rails Specialist",
          "Systems Architect & Mentor",
        ],
      });
    }
  }, []);

  return (
    <div className="intro-section" id="intro">
      <div className="intro-container">
        {/* Left Column: Editorial Headline & Manifesto */}
        <div className="intro-text-col">
          <div className="chapter-tag anim-fade-up d-1">
            <span className="tag-spark">✦</span>
            <span className="tag-text">Ch. 1 // The Discipline</span>
          </div>

          <h1 className="editorial-title anim-fade-up d-2">
            <span className="title-line">Software built to perform.</span>
            <span className="title-line italic-gold">Experiences designed to endure.</span>
          </h1>

          <div className="typing-subhead anim-fade-up d-3">
            <span className="subhead-prefix">Specialization:</span>
            <span className="typing-text" ref={textRef}></span>
          </div>

          <p className="manifesto-paragraph anim-fade-up d-3">
            Engineering robust web architectures, high-performance web applications, 
            and scalable systems. Pairing meticulous code quality with an obsession 
            for velocity, user delight, and tangible product outcomes.
          </p>

          {/* Architectural Metric Cards */}
          <div className="metrics-grid anim-fade-up d-4">
            <div className="metric-box">
              <span className="metric-crosshair">✦</span>
              <span className="metric-value">50+</span>
              <span className="metric-label">Engineers Mentored</span>
            </div>
            <div className="metric-box">
              <span className="metric-crosshair">✦</span>
              <span className="metric-value">100s</span>
              <span className="metric-label">Code Reviews</span>
            </div>
            <div className="metric-box">
              <span className="metric-crosshair">✦</span>
              <span className="metric-value">15+</span>
              <span className="metric-label">Production Apps</span>
            </div>
          </div>

          {/* Editorial CTAs */}
          <div className="cta-row anim-fade-up d-4">
            <button 
              className="pear-primary-cta"
              onClick={() => goToSlide && goToSlide(1)}
            >
              <span>Selected Works</span>
              <FiArrowRight className="arw" />
            </button>
            <button 
              className="pear-secondary-cta"
              onClick={() => goToSlide && goToSlide(4)}
            >
              <span>Inquire Collaboration</span>
              <FiArrowDown className="arw" />
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Stage & Portrait */}
        <div className="intro-visual-col anim-fade-up d-2">
          <div className="portrait-architectural-stage">
            <div className="stage-rim stage-rim-outer"></div>
            <div className="stage-rim stage-rim-inner"></div>

            {/* Corner Crosshair Nodes */}
            <span className="corner-node c-tl">✦</span>
            <span className="corner-node c-tr">✦</span>
            <span className="corner-node c-bl">✦</span>
            <span className="corner-node c-br">✦</span>

            <div className="img-frame">
              <img src="assets/man.png" alt="Omar Salem - Full Stack Software Engineer" />
            </div>

            {/* Floating Architectural Tech Badges */}
            <div className="tech-badge badge-top">
              <FaReact className="badge-icon react" />
              <span>React &bull; Redux</span>
            </div>
            <div className="tech-badge badge-bottom">
              <SiRubyonrails className="badge-icon rails" />
              <span>Ruby on Rails</span>
            </div>
            <div className="tech-badge badge-left">
              <SiJavascript className="badge-icon js" />
              <span>Modern JS (ES6+)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


