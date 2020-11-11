import React, { useContext, useState } from "react";
import Context from "./context";

function App() {
  const [isClick, setIsClick] = useState(false);
  return <A isClick={isClick} setIsClick={setIsClick} />;
}

export default App;

const A = ({ isClick, setIsClick }) => {
  return <B isClick={isClick} setIsClick={setIsClick} />;
};

const B = ({ isClick, setIsClick }) => {
  const context = useContext(Context);
  return (
    <div>
      <div>{context.state.text}</div>
      <button
        onClick={() => {
          setIsClick(true); // try to toggle this line to test the issue
          context.action.change("welcome");
        }}
      >
        click me to change word
      </button>
    </div>
  );
};
