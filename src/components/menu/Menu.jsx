import "./menu.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Menu({ menuOpen, setMenuOpen, currentSlide, goToSlide, chapters }) {
  return (
    <>
      <div 
        className={"menu-backdrop " + (menuOpen ? "active" : "")}
        onClick={() => setMenuOpen(false)}
      />
      <aside className={"menu-drawer " + (menuOpen ? "active" : "")}>
        <div className="menu-header">
          <span className="menu-title">Chapters</span>
          <span className="slide-counter-small">{currentSlide + 1} / {chapters?.length || 5}</span>
        </div>

        <ul className="menu-list">
          {chapters && chapters.map((ch, idx) => (
            <li 
              key={ch.id}
              className={currentSlide === idx ? "active" : ""}
              onClick={() => {
                goToSlide(idx);
                setMenuOpen(false);
              }}
            >
              <span className="num">{ch.chapter}</span>
              <span className="label">{ch.label}</span>
              {currentSlide === idx && <span className="active-spark">✦</span>}
            </li>
          ))}
        </ul>

        <div className="menu-footer">
          <p className="footer-label">PEAR ARCHITECTURE &bull; O.SALEM</p>
          <div className="menu-socials">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=omarsalem0721@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <GrMail />
            </a>
            <a
              href="https://www.linkedin.com/in/omarsalem7/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/omarsalem7"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}



