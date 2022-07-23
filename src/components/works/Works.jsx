import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./works.scss";
import { FaUserGraduate } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
export default function Works() {
  return (
    <div className="expreience">
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#f7f0d4", color: "#086899" }}
          className="vertical-timeline-element--work time-item"
          date="2022 - present"
          contentArrowStyle={{ borderRight: "7px solid  #FFF" }}
          iconStyle={{
            background: "#086899",
            color: "#fff",
            marginTop: "4px",
            boxShadow: "none",
            border: "3px solid #fff",
          }}
          icon={<FaLaptopHouse />}
        >
          <h3 className="vertical-timeline-element-title">Part time TSE</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Microverse inc.
          </h4>
          <p>
            Performed 100s of code reviews in HTML, Ruby & Javascript based
            projects for over 50+ junior developers and ensured best coding
            practices.
          </p>
          <p>
            Provide specialized technical advice and guidance to multiple junior
            developers over 1:1 video calls and chat.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ color: "#086899" }}
          className="vertical-timeline-element--work time-item"
          date="2010 - 2011"
          iconStyle={{
            background: "#086899",
            color: "#fff",
            marginTop: "4px",
            boxShadow: "none",
            border: "3px solid #fff",
          }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ain Shams University
          </h4>
          <p>
            Study Software Engineering field by taking courses like: • Design
            pattern • Data structure • Object-oriented analysis and design •
            Agile, and soon
          </p>
          <p>
            Take intensive training like Security and blockchain @Valora company
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
