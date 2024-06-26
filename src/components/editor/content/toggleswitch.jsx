import React from "react";

const ToggleSwitch = ({item, checked, updateLocalStorage, global=false}) => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={item} id={item} checked={checked} onChange={() => updateLocalStorage(item, checked, global)} />

        <label className="label" htmlFor={item}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
