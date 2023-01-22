import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Good Food, Good Vibes</h2>
      <p>
        Choose your favorite Item from our broad selection of available Items
        and enjoy!.
      </p>
      <p>
        All our meals are made with high-quality ingredients and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;