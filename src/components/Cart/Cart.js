import React from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "m1",
          name: "Froozen Sabudana Wada",
          description: "Made from Finest Sago and Fast Friendly Ingrediants",
          price: 97,
        },
        {
          id: "m2",
          name: "Froozen Batata wada",
          description:
            "A Maharashtra specialty! Made from finest Handpicked Potatoes",
          price: 15.5,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
        
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>34.56</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
