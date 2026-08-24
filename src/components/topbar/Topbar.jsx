import "./topbar.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

export default function Topbar({ menuOpen, setMenuOpen, currentSlide, goToSlide, chapters, isScrolled }) {
  return (
    <header className={`topbar ${isScrolled ? "scrolled" : "at-top"} ${menuOpen ? "active" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <button 
            className="logo-btn"
            onClick={() => goToSlide(0)}
            aria-label="Omar Salem Home"
          >
            <span className="logo-spark">✦</span>
            <span className="logo-name">O.Salem</span>
          </button>

          <div className="status-badge">
            <span className="status-spark">✦</span>
            <span className="status-text">Senior Frontend Dev &bull; Riyadh</span>
          </div>

          <div className="contact-items">
            <a href="tel:+966502397466" className="item-pill" title="Call Omar Salem">
              <BsFillPersonFill className="icon" />
              <span>+966 50 239 7466</span>
            </a>
            
            <div className="social-links">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=omarsalem0721@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                title="Send Email"
                aria-label="Send Email"
              >
                <GrMail />
              </a>
              <a
                href="https://www.linkedin.com/in/omarsalem7/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/omarsalem7"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Center Chapter Navigation */}
        <nav className="center-nav" aria-label="Chapter Navigation">
          {chapters && chapters.map((ch, idx) => (
            <button
              key={ch.id}
              className={`nav-link ${currentSlide === idx ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            >
              <span className="nav-num">{ch.chapter}</span>
              <span className="nav-text">{ch.label}</span>
              {currentSlide === idx && <span className="active-line" />}
            </button>
          ))}
        </nav>

        {/* Right: Pear Flood-Fill CTA Button */}
        <div className="right">
          <button 
            className="pear-cta-btn"
            onClick={() => goToSlide(4)}
          >
            <span className="btn-face">
              Inquire <FiArrowRight className="arw" />
            </span>
          </button>
          
          <button 
            className={`hamburger ${menuOpen ? "open" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
