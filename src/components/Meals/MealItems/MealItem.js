import React, { Fragment } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../store/cart-context";

import CartProvider from "../../store/CartProvider";

const MealItem = (props) => {
  const price = `INR ${props.price.toFixed(2)}`;
  return (
    <CartProvider>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>

        <div>
          <MealItemForm id={props.id} />
        </div>
      </li>
    </CartProvider>
  );
};

export default MealItem;
