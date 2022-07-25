import "./topbar.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            O.Salem
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>+201099348209</span>
          </div>
          <div className="itemContainer">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=omarsalem0721@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <GrMail className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/omarsalem7/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/omarsalem7"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
