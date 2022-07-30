import React from "react";
import { motion } from "framer-motion";
import { shopCartActions } from "../redux/shopping/shopping.reducer";

export function AddToCartBtn({ dispatch, foods }) {
  return (
    <motion.button
      className="add-to-cart-btn"
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={() =>
        dispatch(
          shopCartActions.addTo({
            name: foods.payload.name,
            id: foods.id,
            cost: foods.payload.cost,
          })
        )
      }
    >
      Add To Cart
    </motion.button>
  );
}
