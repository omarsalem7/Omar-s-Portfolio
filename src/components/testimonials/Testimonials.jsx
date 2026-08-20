import { FaLinkedin, FaStar, FaQuoteLeft } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import "./testimonials.scss";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Mostafa Ahangarha",
      title: "Full-Stack Developer",
      company: "Microverse Mentee",
      img: "https://iili.io/S7S1Mx.jpg",
      linkedin: "https://www.linkedin.com/in/omarsalem7/",
      desc: "Omar was an exceptional mentor for me during our time at Microverse. He provided clear, actionable support, listened carefully to issues, and guided me with the right technical resources. He is a truly valuable asset to any engineering team.",
    },
    {
      id: 2,
      name: "Jos Kalenda",
      title: "Full-Stack Software Engineer",
      company: "Peer Collaborator",
      img: "https://iili.io/S7SQVf.jpg",
      linkedin: "https://www.linkedin.com/in/omarsalem7/",
      desc: "Omar is exactly the sort of software developer any tech company would love. His collaboration skills and detail-oriented approach make him a pleasure to work with. He definitely knows his way around JavaScript, React, and Rails, and is always willing to help.",
    },
    {
      id: 3,
      name: "Selma Belhadj",
      title: "Software Engineer",
      company: "Team Colleague",
      img: "https://media-exp2.licdn.com/dms/image/C5603AQG5UzwuR0-F2A/profile-displayphoto-shrink_100_100/0/1657899989102?e=1663804800&v=beta&t=0i-KVBgHu5QkHl73t3mXgY8Qvt2welRVX0nzVyLvUDo",
      linkedin: "https://www.linkedin.com/in/omarsalem7/",
      desc: "Omar is such a great team player who elevates everyone around him. He is highly technically skilled, possesses strong critical thinking, and is dedicated to engineering excellence. Any company would be lucky to have him.",
    },
  ];

  return (
    <div className="testimonials-section" id="testimonials">
      {/* Editorial Header */}
      <div className="testimonials-header anim-fade-up d-1">
        <div className="chapter-badge">
          <FiMessageSquare className="badge-icon" />
          <span>Ch. 4 // The Word</span>
        </div>
        <h2 className="section-title">Peer Recommendations &amp; Endorsements</h2>
        <p className="section-desc">
          Unfiltered feedback from fellow engineers, mentees, and technical collaborators 
          on code quality, velocity, and leadership.
        </p>
      </div>

      {/* Pear Style 3D Testimonials Grid */}
      <div className="testimonials-grid anim-fade-up d-2">
        {testimonials.map((d) => (
          <div className="testimonial-card" key={d.id}>
            <div className="card-top">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <FaQuoteLeft className="quote-watermark" />
            </div>

            <p className="quote-text">
              &ldquo;{d.desc}&rdquo;
            </p>

            <div className="author-row">
              <div className="avatar-wrap">
                <img
                  src={d.img}
                  alt={d.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "assets/man.png";
                  }}
                />
              </div>

              <div className="author-meta">
                <h4 className="author-name">{d.name}</h4>
                <span className="author-title">{d.title} &bull; {d.company}</span>
              </div>

              {d.linkedin && (
                <a
                  href={d.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin-badge"
                  title="Verified Recommendation on LinkedIn"
                  aria-label="Verified LinkedIn Profile"
                >
                  <FaLinkedin />
                  <span className="verified-spark">✦</span>
                </a>
              )}
            </div>

            {/* Corner Crosshair */}
            <span className="card-crosshair">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}


