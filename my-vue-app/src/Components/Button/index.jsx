import React from "react";
import "./styles.css";

function Button({children ,type}) {
  return <button  type = {type} className="button-container">{children}</button>;
}

export default Button;
