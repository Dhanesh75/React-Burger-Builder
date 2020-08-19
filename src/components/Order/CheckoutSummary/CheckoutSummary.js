import React, { useState } from "react";
import classes from "./CheckoutSummary.module.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = (props) => {

  const [headerText, headerTextChanged] = useState(<h1>This Looks Yum!</h1>);

  const onCheckoutClicked = () => {
    headerTextChanged(<h1>Fill out the contact form below</h1>)
    props.onCheckoutContinued();
  }

  return (
    <div className={classes.CheckoutSummary}>
      {headerText}
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <Button btnType="Danger" clicked={props.onCheckoutCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={onCheckoutClicked}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
