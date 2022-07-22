import React from "react";
import { useDispatch } from "react-redux";
import Foods from "../public/Data/Foods";
import { shopCartActions } from "../redux/shopping/shopping.reducer";
import { StyledFood } from "./Style/Food.style";
import { motion } from "framer-motion";
import { dropIn } from "./Backdrop/dropIn";

export default function Desserts() {
  const dispatch = useDispatch();

  return (
    <>
      <StyledFood>
        {Foods.map((food) =>
          food.type === "desserts" ? (
            <motion.div
              className="container"
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1>{food.type === "desserts" ? food.payload.name : null}</h1>
              <p>
                {food.type === "desserts" ? food.payload.discriptions : null}
              </p>
              <div>
                {food.type === "desserts" ? (
                  <motion.button
                    className="add-to-cart-btn"
                    key={"desserts"}
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
                ) : null}
                <p>
                  {food.type === "desserts" ? food.payload.cost + " $" : null}
                </p>
              </div>
            </motion.div>
          ) : null
        )}
      </StyledFood>
    </>
  );
}
