import React from "react";
import Foods from "../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";
import { useDispatch } from "react-redux";
import { shopCartActions } from "../redux/shopping/shopping.reducer";
import { motion } from "framer-motion";
import { dropIn } from "./Backdrop/dropIn";

export default function All() {
  const dispatch = useDispatch();

  return (
    <>
      <StyledFood>
        {Foods.map((food) => (
          <motion.div
            className="container"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1>{food.payload.name}</h1>
            <p>{food.payload.discriptions}</p>
            <div>
              {
                <motion.button
                  className="add-to-cart-btn"
                  key={"all"}
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
    </>
  );
}
