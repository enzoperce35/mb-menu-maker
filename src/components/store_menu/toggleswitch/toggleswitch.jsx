import React from "react";
import "./toggleswitch.css";

const ToggleSwitch = ({item, checked, updateStorage, global=false}) => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={item} id={item} checked={checked} onChange={() => updateStorage(item, checked, global)} />

        <label className="label" htmlFor={item}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
