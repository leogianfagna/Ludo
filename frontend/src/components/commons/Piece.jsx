import styles from "./Piece.module.scss";
import pawn from "/src/assets/Pawn.svg";

const Piece = ({ color, position, setPos }) => {
  const handleMove = () => {
    setPos((prevCount) => prevCount + 1);
  };

  return (
    <img
      src={pawn}
      alt="pawn"
      onClick={handleMove}
      className={styles["piece"]}
      style={{
        top: `${position.x}%`,
        left: `${position.y}%`,
      }}
    />
  );
};

export default Piece;
