import React from "react";
import { StyledFood } from "../../Style/Food.style";
import { motion } from "framer-motion";
import { AddToCartBtn } from "../../AddToCartBtn";

export function CallDesserts({ food, dropIn, dispatch }) {
  return (
    <StyledFood>
      {food.map((food) =>
        food.type === "desserts" ? (
          <motion.div
            className="container"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1>{food.type === "desserts" ? food.payload.name : null}</h1>
            <p>{food.type === "desserts" ? food.payload.discriptions : null}</p>
            <div>
              {food.type === "desserts" ? (
                <AddToCartBtn dispatch={dispatch} foods={food} />
              ) : null}
              <p>
                {food.type === "desserts" ? food.payload.cost + " $" : null}
              </p>
            </div>
          </motion.div>
        ) : null
      )}
    </StyledFood>
  );
}
