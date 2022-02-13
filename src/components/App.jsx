import React, { useState } from "react";

function App() {
  //set heading
  let [heading, setHeading] = useState("Hello!");

  function afterClick() {
    return setHeading("Submitted");
  }

  let [btnColor, setBtnColor] = useState("white");
  // func after mouse hover
  function afterMouseOver() {
    return setBtnColor("black");
  }
  // func after mouse out
  function afterMouseOut() {
    return setBtnColor("white");
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={afterClick}
        onMouseOver={afterMouseOver}
        onMouseOut={afterMouseOut}
        style={{ backgroundColor: btnColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
