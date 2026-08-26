import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiCheckCircle,
  FiCopy,
  FiCheck,
  FiUser,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import TiltCard from "../parallax/TiltCard";
import "./contact.scss";

export default function Contact() {
  const [state, handleSubmit] = useForm("myyogbyl");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("omarsalem0721@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="inquiry-section" id="contact">
      {/* Editorial Section Header */}
      <div className="inquiry-header anim-fade-up d-1">
        <div className="chapter-badge">
          <FiSend className="badge-icon" />
          <span>Ch. 5 // The Inquiry</span>
        </div>
        <h2 className="section-title">Let's Build Something Enduring</h2>
        <p className="section-desc">
          Reach out for high-impact frontend engineering roles, Angular/React
          architecture, or geospatial platform consultation.
        </p>
      </div>

      <div className="inquiry-container anim-fade-up d-2">
        {/* Left Column: Direct Info & Channels */}
        <div className="direct-channels-panel">
          <TiltCard
            maxTilt={7}
            scale={1.02}
            glare={true}
            className="channel-tilt-wrap"
          >
            <div className="channel-card">
              <div className="card-icon-wrap">
                <FiMail />
              </div>
              <div className="channel-text">
                <span className="channel-label">Direct Email</span>
                <a
                  href="mailto:omarsalem0721@gmail.com"
                  className="channel-value"
                >
                  omarsalem0721@gmail.com
                </a>
              </div>
              <button
                className={`copy-pill ${copied ? "copied" : ""}`}
                onClick={handleCopyEmail}
                title="Copy Email Address"
                aria-label="Copy Email"
              >
                {copied ? <FiCheck /> : <FiCopy />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </TiltCard>

          <TiltCard
            maxTilt={7}
            scale={1.02}
            glare={true}
            className="channel-tilt-wrap"
          >
            <div className="channel-card">
              <div className="card-icon-wrap">
                <FiPhone />
              </div>
              <div className="channel-text">
                <span className="channel-label">
                  Direct Phone &bull; WhatsApp
                </span>
                <div className="phone-links">
                  <a href="tel:+966502397466" className="channel-value">
                    +966 50 239 7466
                  </a>
                  <a
                    href="https://wa.me/966502397466"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-badge"
                    title="Chat on WhatsApp"
                  >
                    <FaWhatsapp /> <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>

          <TiltCard
            maxTilt={7}
            scale={1.02}
            glare={true}
            className="channel-tilt-wrap"
          >
            <div className="channel-card">
              <div className="card-icon-wrap">
                <FiMapPin />
              </div>
              <div className="channel-text">
                <span className="channel-label">
                  Location &amp; Availability
                </span>
                <span className="channel-value static">
                  Riyadh, Saudi Arabia &bull; Remote &amp; On-Site
                </span>
              </div>
            </div>
          </TiltCard>

          <div className="social-channel-bar">
            <span className="bar-label">Profiles:</span>
            <div className="social-pills">
              <a
                href="https://www.linkedin.com/in/omarsalem7/"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/omarsalem7"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Pill Form */}
        <div className="form-panel-wrapper">
          <TiltCard
            maxTilt={2.1}
            scale={1.01}
            glare={true}
            className="form-tilt-wrap"
          >
            <div className="form-panel">
              {state.succeeded ? (
                <div className="success-state">
                  <div className="success-icon-wrap">
                    <FiCheckCircle className="success-icon" />
                  </div>
                  <h3>Inquiry Received</h3>
                  <p>
                    Thank you for reaching out. Omar will review your message
                    and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="pear-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <div className="pill-input-wrap">
                      <FiUser className="input-icon" />
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="e.g. Faisal Al-Mansoor"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Work Email</label>
                    <div className="pill-input-wrap">
                      <FiMail className="input-icon" />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="faisal@company.com"
                        required
                      />
                    </div>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="error-msg"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      What would you like to discuss?
                    </label>
                    <div className="pill-input-wrap textarea-wrap">
                      <FiMessageSquare className="input-icon textarea-icon" />
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Tell me about your product, frontend architecture needs, or open role..."
                        required
                      ></textarea>
                    </div>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="error-msg"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="pear-submit-btn"
                  >
                    <span>
                      {state.submitting ? "Transmitting..." : "Send Inquiry"}
                    </span>
                    <FiArrowRight className="send-icon" />
                  </button>
                </form>
              )}

              {/* Corner Crosshair */}
              <span className="panel-crosshair">✦</span>
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
}
