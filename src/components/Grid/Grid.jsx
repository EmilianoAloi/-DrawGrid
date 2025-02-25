import Cell from "../Cell/Cell";
import "./Grid.css";
import { useState, useEffect } from "react";

const columms = 100;
const cellSize = 20;

const Grid = () => {
  const [cells, setCells] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  //Cuadricula

  useEffect(() => {
    const rows = window.innerHeight / cellSize;
    const totalCells = rows * columms;
    setCells(new Array(totalCells).fill(false));
  }, []);

  // Toggle para ctivar o desactivar una celda

  const toggleCell = (cell) => {
    setCells((prev) => {
      const newCell = [...prev];
      newCell[cell] = !newCell[cell];
      return newCell;
    });
  };

  // Funcion para dibujar con mouse

  const handleMouseMove = (cell) => {
    if (isDrawing) {
      toggleCell(cell);
    }
  };

  return (
    <div
      className="grid"
      onMouseDown={() => setIsDrawing(true)}
      onMouseUp={() => setIsDrawing(false)}
    >
      {cells.map((active, index) => (
        <Cell
          key={index}
          active={active}
          onClick={() => toggleCell(index)}
          onMouseMove={() => handleMouseMove(index)}
        />
      ))}
    </div>
  );
};

export default Grid;
