import React from "react";
import { motion } from "framer-motion";
import { StyledFood } from "../../Style/Food.style";
import { AddToCartBtn } from "../../AddToCartBtn";

export default function CallAll({ food, dropIn, dispatch }) {
  return (
    <StyledFood>
      {food.map((food) => (
        <motion.div
          className="container"
          key={food.id}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h1>{food.payload.name}</h1>
          <p>{food.payload.discriptions}</p>
          <div>
            {<AddToCartBtn dispatch={dispatch} foods={food} />}
            <p>{food.payload.cost + " $"}</p>
          </div>
        </motion.div>
      ))}
    </StyledFood>
  );
}
