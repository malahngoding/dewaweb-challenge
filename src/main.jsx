import React from "react";
import ReactDOM from "react-dom";
import { JyankenponComponent } from "./jyankenponcomponent.jsx";
// import { Jankenpon } from "./jankenpon.jsx";
import "./index.css";

const App = () => {
  return (
    <div className="center-wrapper">
      <Title titleName="Dewatalks Jyankenpon!" color="salmon" />
      <JyankenponComponent />
      <DewaWebLogo />
    </div>
  );
};

const Title = (props) => {
  return (
    <h1
      style={{
        color: props.color,
        fontSize: "4ch",
      }}
    >
      {props.titleName}
    </h1>
  );
};

const DewaWebLogo = () => {
  const imageSource =
    "data:image/webp;base64,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";
  return (
    <img src={imageSource} alt="Logo DewaWeb" style={{ margin: "10px" }} />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
