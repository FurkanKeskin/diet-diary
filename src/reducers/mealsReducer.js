import uuid from "uuid/v4";
const initalState = [{
    id: 1,
    name: "Breakfast",
    calories: "120 cal"
}];

const mealsReducer = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "CREATE_MEAL":
            return [...state, {
                id: uuid(),
                name: payload.name,
                calories: payload.calories
            }];
        case "DELETE_MEAL":
            const copyState = [...state];
            const i = copyState.findIndex(x => x.id === payload.id);
            copyState.splice(i, 1);
            return [...copyState];
        default:
            return state;
    }

    return state;
};

export default mealsReducer;