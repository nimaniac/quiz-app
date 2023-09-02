import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <label> نام خود را وارد کنید </label>
      <input
        type="text"
        placeholder=" مثال : کوبی برایانت "
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        شروع کوییز
      </button>
    </div>
  );
}

export default Menu;
