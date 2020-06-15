import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from 'react-uikit-button';

const AddMeal = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    calories: ""
  })

  const handleChange = (e) => {
    e.persist();
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const addMeal = () => {
    dispatch({
      type: "CREATE_MEAL",
      payload: {
        name: data.name,
        calories: data.calories
      }
    })
  }

  return (
    <div className={"add"}>
      <div className="input-section">
        <p>Meal:</p>
        <input onChange={(e) => handleChange(e)} name={"name"} placeholder={"Meal Name..."} />
      </div>

      <div className="input-section">
        <p>Calories:</p>
        <input onChange={(e) => handleChange(e)} name={"calories"} placeholder={"Calories..."} />
      </div>

      <Button onClick={addMeal}>Add Meal</Button>
    </div>
  )
};

export default AddMeal;