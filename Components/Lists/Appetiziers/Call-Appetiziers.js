import React from "react";
import { motion } from "framer-motion";
import { StyledFood } from "../../Style/Food.style";
import { AddToCartBtn } from "../../AddToCartBtn";

export default function CallAppetiziers({ food, dropIn, dispatch }) {
  return (
    <StyledFood>
      {food.map((food) =>
        food.type === "appetizers" ? (
          <motion.div
            className="container"
            variants={dropIn}
            key={food.id}
            initial="hidden"
            animate="visible"
            exit={""}
          >
            <h1>{food.type === "appetizers" ? food.payload.name : null}</h1>
            <p>
              {food.type === "appetizers" ? food.payload.discriptions : null}
            </p>
            <div>
              {food.type === "appetizers" ? (
                <AddToCartBtn dispatch={dispatch} foods={food} />
              ) : null}
              <p>
                {food.type === "appetizers" ? food.payload.cost + " $" : null}
              </p>
            </div>
          </motion.div>
        ) : null
      )}
    </StyledFood>
  );
}
