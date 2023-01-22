import React from "react";

import classes from './AvailableMeals.module.css'
import MealItem from "./MealItems/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
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
  {
    id: "m3",
    name: "Idli Dosa Batter",
    description: "Fresh Dasa Batter made of finest Rice",
    price: 89.0,
  },
  {
    id: "m4",
    name: "Froozen Samosa",
    description: "Made from finest Handpicked Potatoes",
    price: 16.0,
  },
  {
    id: "m5",
    name: "Froozen Samosa",
    description: "Made from finest Handpicked Potatoes",
    price: 16.0,
  },
  {
    id: "m6",
    name: "Froozen Samosa",
    description: "Made from finest Handpicked Potatoes",
    price: 16.0,
  },
  {
    id: "m7",
    name: "Froozen Samosa",
    description: "Made from finest Handpicked Potatoes",
    price: 16.0,
  },
  
];

const AvailabelMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal)=>
    <MealItem
      key={meal.id}
      id= {meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  );

  return (
    <Card className={classes.meals}>
      <ul>{mealsList}</ul>;
    </Card>
  );
};

export default AvailabelMeals;
