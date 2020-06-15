import React from "react";
import { useDispatch } from "react-redux";

const Meal = (props) => {
    const dispatch = useDispatch();
    const deleteMeal = () => {
        dispatch({
            type: "DELETE_MEAL",
            payload: {
                id: props.id
            }
        })
    }
    return ( <div className = { "meal-wrapper" } >
        <p> Meal: { props.name }, Calories: { props.calories } </p> 
        <button onClick = { deleteMeal } > Delete </button> 
        </div>
    )
};

export default Meal;