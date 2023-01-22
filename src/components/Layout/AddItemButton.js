import React from "react";

import classes from "./AddItemButton.module.css";

const AddItemButton = (props) => {
  return (
    <button className={classes.button1}>
     <span>+ Add</span> 
    </button>
  );
};

export default AddItemButton;
