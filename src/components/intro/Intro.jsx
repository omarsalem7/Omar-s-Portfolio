import "./intro.scss";
import { init } from "ityped";
import { useEffect } from "react";

export default function Intro() {
  useEffect(() => {
    const myElement = document.querySelector("#omarBio");
    init(myElement, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend", "Backend", "Fullstack"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="Omar personal" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Omar Salem</h1>
          <h3>
            <span id="omarBio"></span> Developer
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
