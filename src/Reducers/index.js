const counterReducer = (
  state = {
    counterOne: 0,
    counterTwo: 0,
    adjectives: ["Happy", "Sad", "Flatulant", "Bored", "Sexy", "Confused"],
    animals: ["Penguin", "Bobcat", "Trout", "Iguana", "Panda", "Dinosaur"]
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        //Ensures the counter continues iterating in the positive no longer than the length of the array
        [action.id]: (state[action.id] + 1) % state.adjectives.length
      };
    case "DECREMENT":
      return {
        ...state,
        //Does the same for the negative
        [action.id]:
          state[action.id] - 1 < 0
            ? state.adjectives.length - 1
            : state[action.id] - 1
      };
    default:
      return state;
  }
};

export default counterReducer;
