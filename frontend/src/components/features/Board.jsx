import board2 from "/src/assets/Board.svg";
import styles from "./Board.module.scss";
import Piece from "../commons/Piece";
import { paths } from "@constants/positions";
import { useState } from "react";

const Board = () => {
  const [pos, setPos] = useState(0);

  return (
    <div className={styles["board-div"]}>
      <img src={board2} alt="board" />
      <Piece color={"#47ac50ff"} position={paths[pos]} setPos={setPos}/>
    </div>
  );
};

export default Board;
