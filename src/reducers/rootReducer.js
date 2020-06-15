import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    meals: mealsReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;