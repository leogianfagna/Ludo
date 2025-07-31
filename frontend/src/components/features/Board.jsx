import board2 from "/src/assets/Board.svg";
import styles from "./Board.module.scss";
import Piece from "../commons/Piece";
import { paths } from "@constants/positions";
import { useState } from "react";
import PlayerProfile from "./PlayerProfile";

// Test variables
const players = ["Player1", "Player2", "Player3", "Player4"];

const Board = () => {
  const [pos, setPos] = useState(0);

  return (
    <div className={styles["board-div"]}>
      <img src={board2} alt="board" />
      <Piece color={"#47ac50ff"} position={paths[pos]} setPos={setPos} />
    </div>
  );
};

export default Board;
