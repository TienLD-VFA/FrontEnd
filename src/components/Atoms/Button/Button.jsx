import React from "react";
import "./Button.scss";

const Button = ({ text, classess, onclick }) => {
  return (
    <div className="button-diary">
      <button className={classess}>
        <div className="button-diary__text" onClick={() => onclick}>
          {text}
        </div>
      </button>
    </div>
  );
};
export default Button;
