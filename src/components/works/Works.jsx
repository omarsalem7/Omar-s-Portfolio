import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate, FaLaptopHouse, FaBriefcase } from "react-icons/fa";
import { FiCheckCircle, FiCompass } from "react-icons/fi";
import "./works.scss";

export default function Works() {
  return (
    <div className="journey-section" id="works">
      {/* Editorial Header */}
      <div className="journey-header anim-fade-up d-1">
        <div className="chapter-badge">
          <FiCompass className="badge-icon" />
          <span>Ch. 3 // The Journey</span>
        </div>
        <h2 className="section-title">Milestones &amp; Technical Trajectory</h2>
        <p className="section-desc">
          Professional experience, technical support leadership, 
          and rigorous software engineering background.
        </p>
      </div>

      <div className="timeline-container anim-fade-up d-2">
        <VerticalTimeline lineColor="rgba(235, 235, 235, 0.08)">
          {/* Microverse Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-card"
            contentStyle={{
              background: "rgba(18, 17, 15, 0.75)",
              color: "#ebebeb",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)",
              border: "1px solid rgba(235, 235, 235, 0.08)",
              borderRadius: "12px",
              padding: "24px 26px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(18, 17, 15, 0.75)",
            }}
            date="Nov 2021 – Present"
            dateClassName="timeline-date"
            iconStyle={{
              background: "#0b0a09",
              color: "#d4af37",
              border: "2px solid #d4af37",
              boxShadow: "0 0 16px rgba(212, 175, 55, 0.35)",
            }}
            icon={<FaLaptopHouse />}
          >
            <div className="timeline-card-header">
              <span className="role-chip">Technical Leadership</span>
              <h3 className="timeline-title">Part-Time Technical Support Engineer</h3>
              <h4 className="timeline-org">Microverse &bull; Remote</h4>
            </div>

            <ul className="timeline-points">
              <li>
                <FiCheckCircle className="point-icon" />
                <span>Mentored 50+ junior developers in full-stack web development and algorithm optimization.</span>
              </li>
              <li>
                <FiCheckCircle className="point-icon" />
                <span>Delivered 100s of rigorous code reviews across React, Redux, Ruby on Rails, and SQL databases.</span>
              </li>
              <li>
                <FiCheckCircle className="point-icon" />
                <span>Enforced industry best practices in clean architecture, test-driven development (TDD), and Git workflows.</span>
              </li>
            </ul>

            <div className="timeline-tech-stack">
              <span className="tech-pill">Code Review</span>
              <span className="tech-pill">Mentorship</span>
              <span className="tech-pill">React.js</span>
              <span className="tech-pill">Ruby on Rails</span>
              <span className="tech-pill">System Quality</span>
            </div>
          </VerticalTimelineElement>

          {/* Microverse Full Stack Engineering Program */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education timeline-card"
            contentStyle={{
              background: "rgba(18, 17, 15, 0.75)",
              color: "#ebebeb",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)",
              border: "1px solid rgba(235, 235, 235, 0.08)",
              borderRadius: "12px",
              padding: "24px 26px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(18, 17, 15, 0.75)",
            }}
            date="Aug 2021 – Jul 2022"
            dateClassName="timeline-date"
            iconStyle={{
              background: "#0b0a09",
              color: "#e5c158",
              border: "2px solid #e5c158",
              boxShadow: "0 0 16px rgba(229, 193, 88, 0.35)",
            }}
            icon={<FaBriefcase />}
          >
            <div className="timeline-card-header">
              <span className="role-chip">Professional Training</span>
              <h3 className="timeline-title">Full Stack Web Development</h3>
              <h4 className="timeline-org">Microverse</h4>
            </div>

            <ul className="timeline-points">
              <li>
                <FiCheckCircle className="point-icon" />
                <span>1300+ hours spent mastering full-stack engineering with international developer teams.</span>
              </li>
              <li>
                <FiCheckCircle className="point-icon" />
                <span>Pair programming in distributed teams under strict deadlines and agile sprints.</span>
              </li>
            </ul>

            <div className="timeline-tech-stack">
              <span className="tech-pill">Distributed Teams</span>
              <span className="tech-pill">Agile / Scrum</span>
              <span className="tech-pill">Pair Programming</span>
            </div>
          </VerticalTimelineElement>

          {/* Ain Shams University Degree */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education timeline-card"
            contentStyle={{
              background: "rgba(18, 17, 15, 0.75)",
              color: "#ebebeb",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)",
              border: "1px solid rgba(235, 235, 235, 0.08)",
              borderRadius: "12px",
              padding: "24px 26px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(18, 17, 15, 0.75)",
            }}
            date="2016 – 2021"
            dateClassName="timeline-date"
            iconStyle={{
              background: "#0b0a09",
              color: "#d4af37",
              border: "2px solid #d4af37",
              boxShadow: "0 0 16px rgba(212, 175, 55, 0.35)",
            }}
            icon={<FaUserGraduate />}
          >
            <div className="timeline-card-header">
              <span className="role-chip">Engineering Foundation</span>
              <h3 className="timeline-title">Bachelor of Science in Engineering</h3>
              <h4 className="timeline-org">Ain Shams University &bull; Cairo, Egypt</h4>
            </div>

            <p className="degree-desc">
              Strong mathematical foundation, systems engineering analysis, algorithm design,
              and structured problem-solving principles.
            </p>

            <div className="timeline-tech-stack">
              <span className="tech-pill">Computer Science</span>
              <span className="tech-pill">Mathematics</span>
              <span className="tech-pill">Systems Engineering</span>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}


