import React from "react";
import { StyledFood } from "../Style/Food.style";
import { useDispatch } from "react-redux";
import { shopCartActions } from "../../redux/shopping/shopping.reducer";
import { motion } from "framer-motion";
import { dropIn } from "../Backdrop/dropIn";
import Foods from "../../public/Data/Foods";

export default function All() {
  const dispatch = useDispatch();

  return (
    <StyledFood>
      {Foods.map((food) => (
        <motion.div
          className="container"
          key={food.id}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit={{ y: "-100vh" }}
        >
          <h1>{food.payload.name}</h1>
          <p>{food.payload.discriptions}</p>
          <div>
            {
              <motion.button
                className="add-to-cart-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  dispatch(
                    shopCartActions.addTo({
                      name: food.payload.name,
                      id: food.id,
                      cost: food.payload.cost,
                    })
                  )
                }
              >
                Add To Cart
              </motion.button>
            }
            <p>{food.payload.cost + " $"}</p>
          </div>
        </motion.div>
      ))}
    </StyledFood>
  );
}
