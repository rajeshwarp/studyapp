import React, { Fragment } from "react";

import AvailabelMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailabelMeals />
    </Fragment>
  );
};

export default Meals;
