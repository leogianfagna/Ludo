import styles from "./Piece.module.scss";

const Piece = ({ color, position, setPos }) => {

  const handleMove = () => {
    setPos((prevPos) => {
      prevPos + 1
    }); 
  }

  return (
    <div
      className={styles["piece"]}
      style={{
        borderRadius: "30px",
        backgroundColor: color,
        top: `${position.x}%`,
        left: `${position.y}%`,
      }}
      onClick={handleMove}
    />
  );
};

export default Piece;
