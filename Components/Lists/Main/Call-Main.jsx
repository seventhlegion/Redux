import { motion } from "framer-motion";
import StyledFood from "../../Style/Food.style";
import AddToCartBtn from "../../AddToCartBtn";

export default function CallMain({ food, dropIn, dispatch }) {
  return (
    <StyledFood>
      {food.map((food) =>
        food.type === "main" ? (
          <motion.div
            className="container"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1>{food.type === "main" ? food.payload.name : null}</h1>
            <p>{food.type === "main" ? food.payload.discriptions : null}</p>
            <div>
              {food.type === "main" ? (
                <AddToCartBtn dispatch={dispatch} foods={food} />
              ) : null}
              <p>{food.type === "main" ? `${food.payload.cost} $` : null}</p>
            </div>
          </motion.div>
        ) : null,
      )}
    </StyledFood>
  );
}
