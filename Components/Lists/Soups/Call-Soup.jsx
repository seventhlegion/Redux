import { motion } from "framer-motion";
import StyledFood from "../../Style/Food.style";
import AddToCartBtn from "../../AddToCartBtn";

export default function CallSoup({ food, dropIn, dispatch }) {
  return (
    <StyledFood>
      {food.map((food) =>
        food.type === "soup" ? (
          <motion.div
            className="container"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1>{food.type === "soup" ? food.payload.name : null}</h1>
            <p>{food.type === "soup" ? food.payload.discriptions : null}</p>
            <div>
              {food.type === "soup" ? (
                <AddToCartBtn dispatch={dispatch} foods={food} />
              ) : null}

              <p>{food.type === "soup" ? `${food.payload.cost} $` : null}</p>
            </div>
          </motion.div>
        ) : null,
      )}
    </StyledFood>
  );
}
