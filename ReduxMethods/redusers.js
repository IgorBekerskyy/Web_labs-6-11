const addItem = (state, action) => {
    let reservations = state.reservations.slice();
    reservations.push(action.payload);
    return reservations;
  };
  
const updateItem = (state, action) => {
  let reservations = state.reservations.slice();
  let foundIndex = reservations.findIndex(
    (element) => element.id === action.payload.id
  );
  reservations[foundIndex] = action.payload;
  return reservations;
};

const deleteItem = (state, action) => {
  let reservations = state.reservations.slice();
  reservations = reservations.filter((element) => element.id !== action.payload.id);
  return reservations;
};

const calculateTotalPrice = (data) => {
  let sum = 0;
  for (let value of Object.values(data)) {
    sum += value.priceInUAH;
  }
  return sum;
};

const reducer = (state = {}, action) => {
  let reservations;
  switch (action.type) {
    case "ADD_RESERVED_ITEM":
      let foundIndex = state.reservations.findIndex(
        (element) => element.id === action.payload.id
      );
      if (foundIndex !== -1) {
        reservations = updateItem(state, action);
      } else {
        reservations = addItem(state, action);
      }
      return {
        reservations: reservations,
        totalPrice: calculateTotalPrice(reservations),
      };
    case "UPDATE_RESERVED_ITEM":
      reservations = updateItem(state, action);
      return {
        reservations: reservations,
        totalPrice: calculateTotalPrice(reservations),
      };
    case "DELETE_RESERVED_ITEM":
      reservations = deleteItem(state, action);
      return {
        reservations: reservations,
        totalPrice: calculateTotalPrice(reservations),
      };
    default:
      return state;
  }
};

export default reducer;