import Board from "../features/Board";
import styles from "./Game.module.scss";
import PlayerProfile from "@components/features/PlayerProfile";

const Game = () => {
  return (
    <div className={styles["parent"]}>
      <div className={styles["header"]}>Header</div>
      <div className={styles["board"]}>
        <Board />
      </div>
      <div className={styles["sw-player"]}>
        <PlayerProfile data={"Player 1"} />
      </div>
      <div className={styles["ne-player"]}>
        <PlayerProfile data={"Player 2"} />
      </div>
      <div className={styles["nw-player"]}>
        <PlayerProfile data={"Player 3"} />
      </div>
      <div className={styles["se-player"]}>
        <PlayerProfile data={"Player 4"} />
      </div>
    </div>
  );
};

export default Game;
