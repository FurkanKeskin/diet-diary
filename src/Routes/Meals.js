import React, { useState } from "react";
import Meal from "../Components/Meal";
import { useSelector } from "react-redux";
import AddMeal from "../Components/AddMeal";
import { useFirestoreConnect } from "react-redux-firebase";
import Button from "react-uikit-button";

const Meals = () => {
  const allMeals = useSelector((state) => state.meals);
  const [add, setAdd] = useState(false);
  const { displayName, uid } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect({
    collection: `users/${uid}/meals`,
    storeAs: "meals",
  });
  const meals = useSelector((state) => state.firestore.data.meals);
  console.log(meals);
  return (
    <div className={"meals-wrapper"}>
      <div className="row">
        <div className="column left">
          <div className="add-meal">
            <h3> Hello {displayName} </h3> <h2> Today's meals</h2>
            <Button onClick={() => setAdd(!add)}> Add Meal </Button>{" "}
            {add && <AddMeal />}
          </div>
        </div>
        <div className="column right">
          <div className="meals">
            {" "}
            {allMeals.map((meal) => {
              return (
                <Meal
                  key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  calories={meal.calories}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
