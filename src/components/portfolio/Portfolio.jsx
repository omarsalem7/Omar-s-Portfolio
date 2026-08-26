import { useState } from "react";
import {
  FiGithub,
  FiLayers,
  FiLock,
  FiChevronRight,
  FiChevronLeft,
  FiArrowUpRight,
} from "react-icons/fi";
import TiltCard from "../parallax/TiltCard";
import "./portfolio.scss";
import { featuredPortfolio } from "../../data";

const ALL_PROJECTS = featuredPortfolio;

export default function Portfolio() {
  const [activeIdx, setActiveIdx] = useState(0);

  const safeIdx = activeIdx < ALL_PROJECTS.length ? activeIdx : 0;
  const activeProject = ALL_PROJECTS[safeIdx] || ALL_PROJECTS[0];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % ALL_PROJECTS.length);
  };

  const handlePrev = () => {
    setActiveIdx(
      (prev) => (prev - 1 + ALL_PROJECTS.length) % ALL_PROJECTS.length,
    );
  };

  const liveUrl = activeProject.demo || activeProject.link;

  return (
    <div className="portfolio-section" id="portfolio">
      {/* Section Header */}
      <div className="portfolio-header anim-fade-up d-1">
        <div className="chapter-badge">
          <FiLayers className="badge-icon" />
          <span>Ch. 2 // Selected Works</span>
        </div>
        <h2 className="section-title">Architected for Speed &amp; Scale</h2>
        <p className="section-desc">
          Interactive showcase of high-impact government platforms,
          international conference portals, and enterprise geospatial
          applications.
        </p>
      </div>

      {/* Split-Screen Interactive Showcase */}
      <div className="split-showcase-container anim-fade-up d-2">
        {/* Left Column: Project Ledger */}
        <aside className="showcase-ledger">
          <div className="ledger-header">
            <span className="ledger-title">
              <span className="spark">✦</span> PROJECT LEDGER
            </span>
            <span className="ledger-counter">
              {ALL_PROJECTS.length} Platforms
            </span>
          </div>

          <div className="ledger-list" role="tablist">
            {ALL_PROJECTS.map((item, idx) => {
              const isActive = safeIdx === idx;
              return (
                <button
                  key={`project-${item.id}-${idx}`}
                  className={`ledger-item ${isActive ? "active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className="item-meta-top">
                    <span className="item-num">0{idx + 1}</span>
                    <span className="item-client">
                      <span className="dot">✦</span> {item.clientBadge}
                    </span>
                    {item.isInternal && (
                      <span className="item-lock" title="Enterprise Internal">
                        <FiLock />
                      </span>
                    )}
                  </div>

                  <h3 className="item-name">{item.title}</h3>

                  <div className="item-tags">
                    {item.tags?.slice(0, 3).map((tag, tIdx) => (
                      <span className="mini-tag" key={tIdx}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="item-active-bar" />
                  <FiChevronRight className="arrow-indicator" />
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Column: Dynamic Stage Canvas with 3D Tilt */}
        <main className="showcase-stage">
          <TiltCard
            maxTilt={1.3}
            scale={1.01}
            glare={true}
            className="stage-card-tilt-wrap"
          >
            <article className="stage-card">
              {/* Mockup Browser Window Chrome */}
              <div className="stage-chrome">
                <div className="traffic-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>

                <div className="omnibar">
                  <FiLock className="lock-icon" />
                  <span className="domain-text">
                    {activeProject.domain || "internal.gov.sa"}
                  </span>
                </div>

                <div className="stage-progress">
                  <span>
                    0{safeIdx + 1} / 0{ALL_PROJECTS.length}
                  </span>
                </div>
              </div>

              {/* Visual Preview Frame */}
              <div
                className={`stage-visual ${
                  activeProject.isLogo ? "blueprint-mode" : "screenshot-mode"
                }`}
              >
                {activeProject.isLogo ? (
                  <div className="blueprint-canvas">
                    <div className="blueprint-grid-lines" />
                    <div className="corner-tag tl">✦ SYSTEM ARCHITECTURE</div>
                    <div className="corner-tag br">SECURE GOV PORTAL</div>

                    <div
                      className={`logo-halo-wrap ${
                        activeProject.logoBg === "light"
                          ? "light-halo"
                          : "dark-halo"
                      }`}
                    >
                      <img
                        src={activeProject.img}
                        alt={activeProject.title}
                        className="blueprint-logo"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "assets/portfolio0.png";
                        }}
                      />
                    </div>

                    <div className="blueprint-watermark">
                      <span>ENTERPRISE TELEMETRY &bull; RIYADH</span>
                    </div>
                  </div>
                ) : (
                  <div className="screenshot-canvas">
                    <img
                      src={activeProject.img}
                      alt={activeProject.title}
                      className="screenshot-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "assets/portfolio0.png";
                      }}
                    />
                    <div className="screenshot-overlay-glow" />
                  </div>
                )}

                {/* Floating Badges over Media */}
                <div className="media-badges">
                  <span className="role-pill">
                    <span className="spark">✦</span> {activeProject.role}
                  </span>
                  <span className="status-pill">
                    {activeProject.isInternal
                      ? "Internal Platform"
                      : "Live in Production"}
                  </span>
                </div>
              </div>

              {/* Stage Body Content */}
              <div className="stage-body">
                <div className="stage-meta">
                  <span className="client-subtitle">
                    {activeProject.subtitle}
                  </span>
                  <h3 className="stage-title">{activeProject.title}</h3>
                  <p className="stage-desc">{activeProject.desc}</p>
                </div>

                {/* Key Architectural Highlights */}
                {activeProject.highlights && (
                  <div className="stage-highlights">
                    <div className="hl-header">
                      <span>KEY ARCHITECTURAL DELIVERABLES</span>
                    </div>
                    <ul className="hl-list">
                      {activeProject.highlights.map((hl, hIdx) => (
                        <li className="hl-item" key={hIdx}>
                          <span className="hl-spark">✦</span>
                          <span className="hl-text">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="stage-tech-tags">
                  {activeProject.tags?.map((tag, tIdx) => (
                    <span className="tech-pill" key={tIdx}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Actions & Stage Navigator */}
                <div className="stage-footer">
                  <div className="action-links">
                    {liveUrl ? (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-launch-live"
                      >
                        <span>Open Live Platform</span>
                        <FiArrowUpRight className="icon" />
                      </a>
                    ) : activeProject.isInternal ? (
                      <div className="badge-internal-gov">
                        <FiLock className="icon" />
                        <span>Government Internal System</span>
                      </div>
                    ) : null}

                    {activeProject.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-repo"
                        title="View GitHub Repository"
                      >
                        <FiGithub className="icon" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>

                  <div className="stage-nav-controls">
                    <button
                      className="stage-btn prev"
                      onClick={handlePrev}
                      aria-label="Previous Project"
                      title="Previous Project"
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      className="stage-btn next"
                      onClick={handleNext}
                      aria-label="Next Project"
                      title="Next Project"
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </TiltCard>
        </main>
      </div>
    </div>
  );
}
