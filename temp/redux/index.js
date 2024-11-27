// type of the action
const CAKE_OREDERED = "CAKE_OREDERED";

// action
function orderCake() {
  return {
    type: CAKE_OREDERED,
    count: 1,
  };
}

const initialState = {
  numberOfCakes: 10,
};

const reducer = (perviousState = initialState, action) => {
  // returns new state
  switch (action.type) {
    case CAKE_OREDERED:
      return {
        ...perviousState,
        numberOfCakes: perviousState.numberOfCakes - action.count,
      };
    default:
      return perviousState;
  }
};
