import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { FiExternalLink, FiGithub, FiLayers } from "react-icons/fi";
import "./portfolio.scss";
import {
  featuredPortfolio,
  htmlPortfolio,
  jsPortfolio,
  reactPortfolio,
  railsPortfolio,
} from "../../data";

const CATEGORIES = [
  { id: "featured", title: "All Works", count: featuredPortfolio.length },
  { id: "react", title: "React & Redux", count: reactPortfolio.length },
  { id: "rails", title: "Ruby on Rails", count: railsPortfolio.length },
  { id: "js", title: "JavaScript ES6+", count: jsPortfolio.length },
  { id: "html", title: "HTML & CSS", count: htmlPortfolio.length },
];

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState(featuredPortfolio);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "rails":
        setData(railsPortfolio);
        break;
      case "js":
        setData(jsPortfolio);
        break;
      case "html":
        setData(htmlPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  const getTechTags = (item, cat) => {
    if (cat === "react" || item.title.includes("React") || item.title.includes("Stock") || item.title.includes("Book") || item.title.includes("Space")) {
      return ["React", "Redux", "REST API"];
    }
    if (cat === "rails" || item.title.includes("Budget") || item.title.includes("Recipe") || item.title.includes("Blog") || item.title.includes("Catalog")) {
      return ["Ruby on Rails", "PostgreSQL", "MVC"];
    }
    if (cat === "js" || item.title.includes("Pig") || item.title.includes("Todo") || item.title.includes("Leaderboard") || item.title.includes("Food")) {
      return ["JavaScript", "Webpack", "ES6+"];
    }
    return ["HTML5", "Sass", "Responsive"];
  };

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
          A curation of production systems, full-stack web applications, 
          and developer tools engineered with precision.
        </p>

        {/* Pear Pill Filter Tabs */}
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
          const tags = getTechTags(item, selected);
          const liveUrl = item.demo || item.link;

          return (
            <article className="project-card" key={`${selected}-${item.id}-${idx}`}>
              <div className="card-thumb-container">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="card-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "assets/portfolio0.png";
                  }} 
                />
                <span className="card-idx">0{idx + 1}</span>
                <span className="card-crosshair">✦</span>
              </div>

              <div className="card-body">
                <div className="tech-tags">
                  {tags.map((tag, tIdx) => (
                    <span className="tag-pill" key={tIdx}>{tag}</span>
                  ))}
                </div>

                <h3 className="card-title">{item.title}</h3>

                <div className="card-footer-links">
                  {liveUrl ? (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-live"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="icon" />
                    </a>
                  ) : (
                    <span className="link-disabled">Demo in Repo</span>
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
                      <span>Code</span>
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


