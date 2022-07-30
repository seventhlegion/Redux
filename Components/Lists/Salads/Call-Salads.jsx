import { motion } from "framer-motion";
import StyledFood from "../../Style/Food.style";
import AddToCartBtn from "../../AddToCartBtn";

export default function CallSalads({ food, dropIn, dispatch }) {
  return (
    <StyledFood>
      {food.map((food) =>
        food.type === "salad" ? (
          <motion.div
            className="container"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1>{food.type === "salad" ? food.payload.name : null}</h1>
            <p>{food.type === "salad" ? food.payload.discriptions : null}</p>
            <div>
              {food.type === "salad" ? (
                <AddToCartBtn dispatch={dispatch} foods={food} />
              ) : null}
              <p>{food.type === "salad" ? `${food.payload.cost} $` : null}</p>
            </div>
          </motion.div>
        ) : null,
      )}
    </StyledFood>
  );
}
