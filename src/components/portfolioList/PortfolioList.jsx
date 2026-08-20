import "./portfolioList.scss";

export default function PortfolioList({ id, title, count, active, setSelected }) {
  return (
    <button
      className={`pear-filter-pill ${active ? "active" : ""}`}
      onClick={() => setSelected(id)}
      role="tab"
      aria-selected={active}
    >
      <span className="pill-title">{title}</span>
      {count !== undefined && <span className="pill-count">{count}</span>}
    </button>
  );
}
