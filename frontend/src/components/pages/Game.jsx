import Board from "../features/Board";
import styles from "./Game.module.scss";

const Game = () => {
  return (
    <div className={styles["parent"]}>
      <div className={styles["header"]}>A</div>
      <div className={styles["board"]}>
        <Board />
      </div>
      <div className={styles["nw-player"]}>Player 3</div>
      <div className={styles["sw-player"]}>Player 1</div>
      <div className={styles["ne-player"]}>Player 2</div>
      <div className={styles["se-player"]}>Player 4</div>
    </div>
  );
};

export default Game;
