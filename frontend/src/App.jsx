import Board from "./components/features/Board";
import Game from "./components/pages/Game";
import "./App.css";

function App() {
  return (
    <div className="parent">
      <div className="header">A</div>
      <div className="board">
        <Board />
      </div>
      <div className="nw-player">Player 3</div>
      <div className="sw-player">Player 1</div>
      <div className="ne-player">Player 2</div>
      <div className="se-player">Player 4</div>
    </div>
  );
}

export default App;
