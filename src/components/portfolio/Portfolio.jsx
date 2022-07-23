import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  htmlPortfolio,
  jsPortfolio,
  reactPortfolio,
  railsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "React/Redux",
      title: "React/Redux",
    },
    {
      id: "Ruby on rails",
      title: "Ruby on rails",
    },
    {
      id: "JavaScript",
      title: "JavaScript",
    },
    {
      id: "HTML/CSS",
      title: "HTML/CSS",
    },
  
 
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "React/Redux":
        setData(reactPortfolio);
        break;
      case "Ruby in rails":
        setData(jsPortfolio);
        break;
      case "JavaScript":
        setData(jsPortfolio);
        break;
      case "HTML/CSS":
        setData(htmlPortfolio);
        break;
      case "Ruby on rails":
        setData(railsPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div
            className="item"
            key={Math.random() * 100}
            onClick={() =>
              window.open(d.link, "_blank")
            }
          >
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
