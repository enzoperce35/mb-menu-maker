import React from "react";
import { updateVariants, updateItemVariants } from "../../storage";

const ToggleSwitch = ({itemId, checked, motherItem=false}) => {
  
  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={itemId}
          id={itemId}
          checked={checked}
          onChange={function() {
            if (motherItem === null) return
            
            return motherItem ? updateItemVariants(itemId, checked) : updateVariants(itemId, checked)
          }}
        />

        <label className="label" htmlFor={itemId}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
