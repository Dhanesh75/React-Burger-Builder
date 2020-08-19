import React from "react";
import classes from "./CheckoutSummary.module.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>This looks Yum!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <Button btnType="Danger" clicked={props.onCheckoutCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={props.onCheckoutContinued}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
