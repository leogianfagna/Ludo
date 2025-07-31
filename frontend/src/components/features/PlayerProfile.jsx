import styles from "./PlayerProfile.module.scss";

const PlayerProfile = ({ data, number }) => {
  const { x, y } = getBoardPosition(number);

  function getBoardPosition(number) {
    switch (number) {
      case 0:
        return { x: 72, y: 82 };
      case 1:
        return { x: 30, y: 10 };
      case 2:
        return { x: 40, y: 50 };
      case 3:
        return { x: 50, y: 60 };
    }
  }

  return (
    <div
      style={{
        border: "2px solid purple",
        position: "absolute",
        width: "235px",
        height: "100px",
        right: `${x}%`,
        top: `${y}%`
      }}
    >
      <span>{data}</span>
    </div>
  );
};

export default PlayerProfile;
