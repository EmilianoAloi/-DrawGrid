import "./Cell.css";

const Cell = ({ active, onClick, onMouseMove }) => {
  return (
    <div
      className={`cell ${active ? "active" : ""}`}
      onClick={onClick}
      onMouseMove={onMouseMove}
    ></div>
  );
};

export default Cell;
