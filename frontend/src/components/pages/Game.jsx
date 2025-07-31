import Board from "../features/Board";
import styles from "./Game.module.scss";

const Game = () => {
  return (
    <>
      <div className={`${styles["game-page"]}`}>
        <div className={`${styles["header"]}`}>HEADER</div>
        <div className={`${styles["main"]}`}>
          <Board />
        </div>
      </div>
    </>
  );
};

export default Game;
