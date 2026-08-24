import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { FiExternalLink, FiGithub, FiLayers, FiLock } from "react-icons/fi";
import "./portfolio.scss";
import {
  featuredPortfolio,
  enterprisePortfolio,
  angularPortfolio,
  reactPortfolio,
} from "../../data";

const CATEGORIES = [
  { id: "featured", title: "Featured Works", count: featuredPortfolio.length },
  { id: "enterprise", title: "Gov & Enterprise", count: enterprisePortfolio.length },
  { id: "angular", title: "Angular & Esri GIS", count: angularPortfolio.length },
  { id: "react", title: "React & Next.js", count: reactPortfolio.length },
];

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState(featuredPortfolio);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "enterprise":
        setData(enterprisePortfolio);
        break;
      case "angular":
        setData(angularPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio-section" id="portfolio">
      {/* Editorial Section Header */}
      <div className="portfolio-header anim-fade-up d-1">
        <div className="chapter-badge">
          <FiLayers className="badge-icon" />
          <span>Ch. 2 // Selected Works</span>
        </div>
        <h2 className="section-title">Architected for Speed &amp; Scale</h2>
        <p className="section-desc">
          High-impact government platforms, international conference management systems, 
          geospatial applications, and performance-tuned web software.
        </p>

        {/* Pill Filter Tabs */}
        <div className="filter-deck" role="tablist">
          {CATEGORIES.map((cat) => (
            <PortfolioList
              key={cat.id}
              id={cat.id}
              title={cat.title}
              count={cat.count}
              active={selected === cat.id}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>

      {/* Projects Grid Container */}
      <div className="projects-grid anim-fade-up d-2">
        {data.map((item, idx) => {
          const liveUrl = item.demo || item.link;

          return (
            <article className="project-card" key={`${selected}-${item.id}-${idx}`}>
              <div className="card-thumb-container">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`card-img ${item.isLogo ? "contain-logo" : ""}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "assets/portfolio0.png";
                  }} 
                />
                <span className="card-idx">0{idx + 1}</span>
                {item.clientBadge && (
                  <span className="card-client-tag">
                    <span className="spark">✦</span> {item.clientBadge}
                  </span>
                )}
                <span className="card-crosshair">✦</span>
              </div>

              <div className="card-body">
                <div className="card-meta-top">
                  <h3 className="card-title">{item.title}</h3>
                  {item.subtitle && <span className="card-subtitle">{item.subtitle}</span>}
                </div>

                {item.desc && (
                  <p className="card-description">{item.desc}</p>
                )}

                <div className="tech-tags">
                  {item.tags?.map((tag, tIdx) => (
                    <span className="tag-pill" key={tIdx}>{tag}</span>
                  ))}
                </div>

                <div className="card-footer-links">
                  {liveUrl ? (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-live"
                    >
                      <span>Live Platform</span>
                      <FiExternalLink className="icon" />
                    </a>
                  ) : item.isInternal ? (
                    <span className="link-internal" title="Government / Enterprise Internal Platform">
                      <FiLock className="icon" />
                      <span>Enterprise Internal</span>
                    </span>
                  ) : (
                    <span className="link-disabled">Repository Only</span>
                  )}

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="link-repo"
                      title="View GitHub Repository"
                    >
                      <FiGithub className="icon" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
