import Cell from "../Cell/Cell";
import "./Grid.css";
import { useState, useEffect } from "react";

const columms = 200;
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

  return <div>Grid</div>;
};

export default Grid;
