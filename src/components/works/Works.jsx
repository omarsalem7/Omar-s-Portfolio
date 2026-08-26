import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaUserGraduate,
  FaBriefcase,
  FaLaptopCode,
  FaAward,
  FaCode,
  FaLayerGroup,
  FaBolt,
  FaGlobeAmericas,
  FaServer,
  FaTools,
} from "react-icons/fa";
import {
  FiCheckCircle,
  FiCompass,
  FiExternalLink,
  FiCpu,
  FiShield,
} from "react-icons/fi";
import { skillsCategories, certificationsData } from "../../data";
import TiltCard from "../parallax/TiltCard";
import "./works.scss";

export default function Works() {
  const [activeTab, setActiveTab] = useState("timeline"); // 'timeline' | 'skills' | 'certifications'

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case "code":
        return <FaCode />;
      case "design":
        return <FaLayerGroup />;
      case "speed":
        return <FaBolt />;
      case "geo":
        return <FaGlobeAmericas />;
      case "server":
        return <FaServer />;
      case "tools":
        return <FaTools />;
      default:
        return <FiCpu />;
    }
  };

  return (
    <div className="journey-section" id="works">
      {/* Editorial Header */}
      <div className="journey-header anim-fade-up d-1">
        <div className="chapter-badge">
          <FiCompass className="badge-icon" />
          <span>Ch. 3 // The Journey</span>
        </div>
        <h2 className="section-title">Experience, Skills &amp; Credentials</h2>
        <p className="section-desc">
          4+ years delivering enterprise government and commercial software
          systems, leading frontend architecture, geospatial solutions, and
          mentoring engineers.
        </p>

        {/* View Switcher Tabs */}
        <div className="journey-tabs-deck">
          <button
            className={`journey-tab-btn ${activeTab === "timeline" ? "active" : ""}`}
            onClick={() => setActiveTab("timeline")}
          >
            <FaBriefcase className="tab-icon" />
            <span>Career Timeline</span>
          </button>
          <button
            className={`journey-tab-btn ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            <FiCpu className="tab-icon" />
            <span>Skills Matrix</span>
          </button>
          <button
            className={`journey-tab-btn ${activeTab === "certifications" ? "active" : ""}`}
            onClick={() => setActiveTab("certifications")}
          >
            <FaAward className="tab-icon" />
            <span>Certifications ({certificationsData.length})</span>
          </button>
        </div>
      </div>

      {/* ── VIEW 1: CAREER TIMELINE ── */}
      {activeTab === "timeline" && (
        <div className="timeline-container anim-fade-up d-2">
          <VerticalTimeline lineColor="rgba(72, 85, 80, 0.15)">
            {/* 1. Tec Solution Group */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work timeline-card"
              contentStyle={{
                background: "#FFFFFF",
                color: "#485550",
                boxShadow: "0 4px 20px rgba(72, 85, 80, 0.08)",
                border: "1px solid rgba(72, 85, 80, 0.12)",
                borderRadius: "12px",
                padding: "24px 26px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #FFFFFF",
              }}
              date="12/2022 – Present"
              dateClassName="timeline-date"
              iconStyle={{
                background: "#C0EB6A",
                color: "#485550",
                border: "2px solid #485550",
                boxShadow: "0 0 16px rgba(192, 235, 106, 0.6)",
              }}
              icon={<FaBriefcase />}
            >
              <div className="timeline-card-header">
                <div className="header-meta-row">
                  <span className="role-chip active-role">
                    Current Position
                  </span>
                  <span className="location-chip">Riyadh, Saudi Arabia</span>
                </div>
                <h3 className="timeline-title">Senior Frontend Developer</h3>
                <h4 className="timeline-org">Tec Solution Group</h4>
              </div>

              <ul className="timeline-points">
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Developed scalable Angular applications using the Angular
                    ABP Framework for high-profile clients including the{" "}
                    <strong>Ministry of Energy</strong>, <strong>GEOSA</strong>,
                    and <strong>NCVC</strong>.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Integrated <strong>Esri JavaScript SDK</strong> to implement
                    advanced geospatial tracking and mapping solutions,
                    improving data visualization and strategic decision-making.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Optimized application performance,{" "}
                    <strong>reducing load time by 30%</strong> through lazy
                    loading, modular architecture, and code splitting.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Worked closely with cross-functional teams to design and
                    implement inclusive, responsive interfaces, improving
                    accessibility compliance and user engagement metrics.
                  </span>
                </li>
              </ul>

              <div className="timeline-tech-stack">
                <span className="tech-pill">Angular</span>
                <span className="tech-pill">ABP Framework</span>
                <span className="tech-pill">Esri JS SDK</span>
                <span className="tech-pill">TypeScript</span>
                <span className="tech-pill">PrimeNG</span>
                <span className="tech-pill">SCSS</span>
                <span className="tech-pill">REST APIs</span>
                <span className="tech-pill">Azure DevOps</span>
              </div>
            </VerticalTimelineElement>

            {/* 2. Neutral */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work timeline-card"
              contentStyle={{
                background: "#FFFFFF",
                color: "#485550",
                boxShadow: "0 4px 20px rgba(72, 85, 80, 0.08)",
                border: "1px solid rgba(72, 85, 80, 0.12)",
                borderRadius: "12px",
                padding: "24px 26px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #FFFFFF",
              }}
              date="06/2022 – 12/2022"
              dateClassName="timeline-date"
              iconStyle={{
                background: "#FFFFFF",
                color: "#485550",
                border: "2px solid rgba(72, 85, 80, 0.3)",
                boxShadow: "0 2px 10px rgba(72, 85, 80, 0.1)",
              }}
              icon={<FaLaptopCode />}
            >
              <div className="timeline-card-header">
                <div className="header-meta-row">
                  <span className="role-chip">Frontend Engineering</span>
                  <span className="location-chip">Remotely &bull; Nairobi</span>
                </div>
                <h3 className="timeline-title">Frontend Developer</h3>
                <h4 className="timeline-org">Neutral</h4>
              </div>

              <ul className="timeline-points">
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Developed scalable React applications using Redux, Tailwind
                    CSS, and Material UI, boosting maintainability and user
                    experience.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Optimized application performance,{" "}
                    <strong>reducing load times by 20%</strong> through code
                    optimization, lazy loading, and rigorous Jest testing
                    suites.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Implemented CI/CD pipelines with GitHub Actions and enforced
                    code quality via automated testing and linting.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Collaborated with designers and backend engineers to deliver
                    responsive, accessible, and high-quality front-end features.
                  </span>
                </li>
              </ul>

              <div className="timeline-tech-stack">
                <span className="tech-pill">React</span>
                <span className="tech-pill">Redux</span>
                <span className="tech-pill">Tailwind CSS</span>
                <span className="tech-pill">Material UI</span>
                <span className="tech-pill">Jest</span>
                <span className="tech-pill">GitHub Actions</span>
                <span className="tech-pill">CI/CD</span>
              </div>
            </VerticalTimelineElement>

            {/* 3. Microverse */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work timeline-card"
              contentStyle={{
                background: "#FFFFFF",
                color: "#485550",
                boxShadow: "0 4px 20px rgba(72, 85, 80, 0.08)",
                border: "1px solid rgba(72, 85, 80, 0.12)",
                borderRadius: "12px",
                padding: "24px 26px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #FFFFFF",
              }}
              date="03/2022 – 01/2023"
              dateClassName="timeline-date"
              iconStyle={{
                background: "#FFFFFF",
                color: "#485550",
                border: "2px solid rgba(72, 85, 80, 0.3)",
                boxShadow: "0 2px 10px rgba(72, 85, 80, 0.1)",
              }}
              icon={<FiShield />}
            >
              <div className="timeline-card-header">
                <div className="header-meta-row">
                  <span className="role-chip">Mentorship &amp; QA</span>
                  <span className="location-chip">Remotely &bull; US</span>
                </div>
                <h3 className="timeline-title">
                  Frontend Developer &amp; Mentor
                </h3>
                <h4 className="timeline-org">Microverse</h4>
              </div>

              <ul className="timeline-points">
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Reviewed <strong>200+ student projects</strong> in React,
                    HTML, Ruby, and Rails, providing actionable feedback to
                    improve code quality and maintainability.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Mentored developers on debugging, optimization, and clean
                    code principles, accelerating skill development.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Prototyped in Figma, ran quick user checks, and tightened
                    copy/states to reduce friction in user journeys.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Enforced industry standards and robustness, helping
                    developers deliver scalable and production-ready
                    applications.
                  </span>
                </li>
              </ul>

              <div className="timeline-tech-stack">
                <span className="tech-pill">Code Reviews</span>
                <span className="tech-pill">Mentorship</span>
                <span className="tech-pill">React</span>
                <span className="tech-pill">Figma</span>
                <span className="tech-pill">Architecture</span>
              </div>
            </VerticalTimelineElement>

            {/* 4. Co.Lab */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work timeline-card"
              contentStyle={{
                background: "#FFFFFF",
                color: "#485550",
                boxShadow: "0 4px 20px rgba(72, 85, 80, 0.08)",
                border: "1px solid rgba(72, 85, 80, 0.12)",
                borderRadius: "12px",
                padding: "24px 26px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #FFFFFF",
              }}
              date="01/2022 – 05/2022"
              dateClassName="timeline-date"
              iconStyle={{
                background: "#FFFFFF",
                color: "#485550",
                border: "2px solid rgba(72, 85, 80, 0.3)",
                boxShadow: "0 2px 10px rgba(72, 85, 80, 0.1)",
              }}
              icon={<FaBriefcase />}
            >
              <div className="timeline-card-header">
                <div className="header-meta-row">
                  <span className="role-chip">Product Team</span>
                  <span className="location-chip">Remotely &bull; US</span>
                </div>
                <h3 className="timeline-title">Frontend Intern</h3>
                <h4 className="timeline-org">Co.Lab</h4>
              </div>

              <ul className="timeline-points">
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Collaborated in a cross-functional Agile team to design,
                    develop, and ship a production MVP product.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Participated in code reviews, testing, and iterative
                    improvements in production-level workflows.
                  </span>
                </li>
                <li>
                  <FiCheckCircle className="point-icon" />
                  <span>
                    Implemented user-facing features using modern frontend
                    frameworks, ensuring clean, reusable, and efficient code.
                  </span>
                </li>
              </ul>

              <div className="timeline-tech-stack">
                <span className="tech-pill">Agile / Scrum</span>
                <span className="tech-pill">MVP Shipping</span>
                <span className="tech-pill">React</span>
                <span className="tech-pill">UI Implementation</span>
              </div>
            </VerticalTimelineElement>

            {/* 5. Microverse Full Stack Program */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education timeline-card"
              contentStyle={{
                background: "#FFFFFF",
                color: "#485550",
                boxShadow: "0 4px 20px rgba(72, 85, 80, 0.08)",
                border: "1px solid rgba(72, 85, 80, 0.12)",
                borderRadius: "12px",
                padding: "24px 26px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #FFFFFF",
              }}
              date="11/2021 – 06/2022"
              dateClassName="timeline-date"
              iconStyle={{
                background: "#FFFFFF",
                color: "#485550",
                border: "2px solid rgba(72, 85, 80, 0.3)",
                boxShadow: "0 2px 10px rgba(72, 85, 80, 0.1)",
              }}
              icon={<FaUserGraduate />}
            >
              <div className="timeline-card-header">
                <div className="header-meta-row">
                  <span className="role-chip">Professional Program</span>
                  <span className="location-chip">Remotely &bull; US</span>
                </div>
                <h3 className="timeline-title">
                  Full Stack Web Development Program
                </h3>
                <h4 className="timeline-org">Microverse</h4>
              </div>

              <p className="degree-desc">
                Completed <strong>1300+ hours</strong> of full-stack engineering
                mastering React, Redux, Rails, and JavaScript. Gained deep
                hands-on expertise in remote pair programming, Git flow, and
                cross-cultural Agile teamwork.
              </p>

              <div className="timeline-tech-stack">
                <span className="tech-pill">1300+ Hours</span>
                <span className="tech-pill">React &bull; Redux</span>
                <span className="tech-pill">Ruby on Rails</span>
                <span className="tech-pill">Git Flow</span>
                <span className="tech-pill">Pair Programming</span>
              </div>
            </VerticalTimelineElement>

            {/* 6. Ain Shams University */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education timeline-card"
              contentStyle={{
                background: "#FFFFFF",
                color: "#485550",
                boxShadow: "0 4px 20px rgba(72, 85, 80, 0.08)",
                border: "1px solid rgba(72, 85, 80, 0.12)",
                borderRadius: "12px",
                padding: "24px 26px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #FFFFFF",
              }}
              date="08/2017 – 06/2022"
              dateClassName="timeline-date"
              iconStyle={{
                background: "#FFFFFF",
                color: "#485550",
                border: "2px solid rgba(72, 85, 80, 0.3)",
                boxShadow: "0 2px 10px rgba(72, 85, 80, 0.1)",
              }}
              icon={<FaUserGraduate />}
            >
              <div className="timeline-card-header">
                <div className="header-meta-row">
                  <span className="role-chip">Engineering Foundation</span>
                  <span className="location-chip">
                    Cairo, Egypt &bull; GPA 3/4
                  </span>
                </div>
                <h3 className="timeline-title">
                  Bachelor of Engineering, Computer &amp; Systems
                </h3>
                <h4 className="timeline-org">Ain Shams University</h4>
              </div>

              <p className="degree-desc">
                Graduated from a top-ranked engineering program with a strong
                focus on software engineering principles, systems architecture,
                and algorithmic design.
              </p>

              <div className="coursework-box">
                <span className="cw-label">Key Coursework:</span>
                <p className="cw-list">
                  Data Structures, Algorithms, Object-Oriented Programming
                  (OOP), Agile Software Development, Software Project
                  Management, Database Systems, Computer Networks, Security, and
                  Systems Design.
                </p>
              </div>

              <div className="timeline-tech-stack">
                <span className="tech-pill">Computer Systems</span>
                <span className="tech-pill">Algorithms</span>
                <span className="tech-pill">Data Structures</span>
                <span className="tech-pill">Database Systems</span>
                <span className="tech-pill">Networking &amp; Security</span>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      )}

      {/* ── VIEW 2: SKILLS MATRIX ── */}
      {activeTab === "skills" && (
        <div className="skills-matrix-deck anim-fade-up d-2">
          {skillsCategories.map((cat, idx) => (
            <TiltCard
              maxTilt={7}
              scale={1.02}
              glare={true}
              className="skill-cat-tilt-wrap"
              key={idx}
            >
              <div className="skill-category-card">
                <div className="cat-card-header">
                  <div className="cat-icon-wrap">{getSkillIcon(cat.icon)}</div>
                  <h3 className="cat-title">{cat.category}</h3>
                  <span className="cat-crosshair">✦</span>
                </div>

                <div className="cat-skills-pills">
                  {cat.skills.map((skill, sIdx) => (
                    <div className="skill-item" key={sIdx}>
                      <span className="dot">&bull;</span>
                      <span className="name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}

          {/* Language Proficiency Banner */}
          <div className="language-proficiency-card">
            <div className="lang-header">
              <span className="spark">✦</span>
              <h4>Languages &bull; Professional Proficiency</h4>
            </div>
            <div className="lang-items">
              <div className="lang-box">
                <span className="lang-name">English</span>
                <span className="lang-level">
                  Full Professional Proficiency
                </span>
              </div>
              <div className="lang-box">
                <span className="lang-name">Arabic</span>
                <span className="lang-level">
                  Native / Bilingual Proficiency
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── VIEW 3: CERTIFICATIONS ── */}
      {activeTab === "certifications" && (
        <div className="certifications-deck anim-fade-up d-2">
          {certificationsData.map((cert) => (
            <TiltCard
              maxTilt={6}
              scale={1.02}
              glare={true}
              className="cert-card-tilt-wrap"
              key={cert.id}
            >
              <div className="cert-card">
                <div className="cert-top">
                  <span className="cert-badge">{cert.badge}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-issuer">
                  {cert.issuer} &bull; {cert.hours}
                </h4>

                <p className="cert-desc">{cert.desc}</p>

                <div className="cert-footer">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-verify-link"
                    >
                      <span>Verify Credential</span>
                      <FiExternalLink />
                    </a>
                  ) : (
                    <span className="cert-verified-tag">
                      <FiCheckCircle className="icon" /> Verified Completion
                    </span>
                  )}
                </div>

                <span className="cert-crosshair">✦</span>
              </div>
            </TiltCard>
          ))}
        </div>
      )}
    </div>
  );
}
