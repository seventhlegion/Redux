import * as actionsTypes from "../Shopping/Shopping.type";

export const addToCart = (itemsID) => {
  return {
    type: actionsTypes.ADD_TO_CART,
    payload: {
      id: itemsID,
    },
  };
};

export const removeFromCart = (itemsID) => {
  return {
    type: actionsTypes.REMOVE_FROM_CART,
    payload: {
      id: itemsID,
    },
  };
};

export const adjustQty = (itemsID) => {
  return {
    type: actionsTypes.ADJUST_QTY,
    payload: {
      id: itemsID,
      qty: value,
    },
  };
};
