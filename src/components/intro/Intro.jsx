import { FiArrowRight, FiArrowDown, FiCheckCircle, FiMapPin, FiBriefcase } from "react-icons/fi";
import SystemCanvas from "./SystemCanvas";
import "./intro.scss";

export default function Intro({ goToSlide }) {
  return (
    <div className="intro-section" id="intro">
      <div className="intro-container">
        {/* Left Column: Pure Editorial & Identity */}
        <div className="intro-text-col">
          <div className="chapter-tag anim-fade-up d-1">
            <span className="tag-spark">✦</span>
            <span className="tag-text">Ch. 1 // The System</span>
          </div>

          <div className="hero-identity-block anim-fade-up d-2">
            <h1 className="hero-name">Omar Salem</h1>
            <h2 className="hero-role">Frontend Engineer</h2>
            <div className="hero-stack-pill">
              <span>Angular</span>
              <span className="sep">&bull;</span>
              <span>React</span>
              <span className="sep">&bull;</span>
              <span>TypeScript</span>
            </div>
          </div>

          <p className="hero-manifesto anim-fade-up d-3">
            &ldquo;I build interfaces where complex systems feel simple.&rdquo;
          </p>

          {/* Micro-Metadata Information Grid */}
          <div className="hero-meta-grid anim-fade-up d-3">
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
                <span className="meta-sub">On-Site &amp; Remote Worldwide</span>
              </div>
            </div>

            <div className="meta-card highlight">
              <div className="meta-icon-wrap active">
                <FiCheckCircle className="icon" />
              </div>
              <div className="meta-text">
                <span className="meta-title">Available for Opportunities</span>
                <span className="meta-sub">Senior Frontend Roles</span>
              </div>
            </div>
          </div>

          {/* Editorial CTAs */}
          <div className="cta-row anim-fade-up d-4">
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

        {/* Right Column: "The System" 3D Canvas Scene */}
        <div className="intro-visual-col anim-fade-up d-2">
          <SystemCanvas />
        </div>
      </div>
    </div>
  );
}
