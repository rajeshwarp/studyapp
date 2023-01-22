import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "../Layout/HeaderCartButton";

const Header = (props) => {




  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foododering</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img
          alt="mealsImage"
          src={mealsImage}
          className={classes["main-image"]}
        />
      </div>
    </Fragment>
  );
};

export default Header;
