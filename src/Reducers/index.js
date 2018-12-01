const counterReducer = (
  state = {
    counterOne: 0,
    counterTwo: 0,
    adjectives: ["Happy", "Sad", "Flatulant"],
    animals: ["Penguin", "Bobcat", "Trout"]
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        [action.id]: (state[action.id] + 1) % state.adjectives.length
      };
    case "DECREMENT":
      return {
        ...state,
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
