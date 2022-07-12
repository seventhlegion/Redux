import * as actionsTypes from "../Shopping/Shopping.type";

export const INITIAL_STATE = ({ add }) => {
  const products = {
    id: add.id,
    type: add.type,
    payload: {
      ...add.payload,
    },
  };
  return products;
};

export let lastId = 0;

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TO_CART:
      return [
        {
          reducerId: ++lastId,
          id: state.id,
          type: state.type,
          payload: {
            ...state.payload,
          },
        },
      ];
    case actionsTypes.REMOVE_FROM_CART:
      return {};
    case actionsTypes.ADJUST_QTY:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
