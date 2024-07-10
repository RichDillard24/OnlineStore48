import { useState } from "react";
import "./styles/about.css";

function About() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  function showInfo() {
    setIsInfoVisible(true);
  }

  function getInfo() {
    if (isInfoVisible) {
      return (
        <div className="info">
          <h2>Email: Richiegd@hotmail.com</h2>
          <p>Phone: 555-555-5555</p>
        </div>
      );
    } else {
      return (
        <p className="alert alert-warning">Click the button to veiw my info</p>
      );
    }
  }
  return (
    <div className="about page">
      <h2></h2>Richard Dillard
      {getInfo()}
      {isInfoVisible ? (
        ""
      ) : (
        <button onClick={showInfo} className="btn btn-sm btn-outline-dark">
          Viw my info
        </button>
      )}
    </div>
  );
}

export default About;
