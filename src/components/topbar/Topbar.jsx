import "./topbar.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
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
            <GrMail className="icon" />
            <span>omarsalem0721@gmail.com</span>
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
