const PlayerProfile = ({ data }) => {
  return (
    <div
      style={{
        border: "2px solid purple",
        width: "235px",
        height: "100px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        padding: "5px",
      }}
    >
      <span>{data}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          height: "80%",
        }}
      >
        {/* To-do: Melhorar com flex expandível e máximo 50% */}
        <div style={{ outline: "1px solid black", width: "40%", borderRadius: "3px" }}>FOTO</div>
        <div style={{ outline: "1px solid black", width: "40%", borderRadius: "3px" }}>DADO</div>
      </div>
    </div>
  );
};

export default PlayerProfile;
