import React from "react";
import Foods from "../../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";
import store from "./Redux/store";
import * as actionType from "./Shopping/Shopping.type";

export default function Desserts({ addToCart }) {
  return (
    <>
      <StyledFood>
        {Foods.map((food) =>
          food.type === "desserts" ? (
            <div className="container">
              <h1>{food.type === "desserts" ? food.payload.name : null}</h1>
              <p>
                {food.type === "desserts" ? food.payload.discriptions : null}
              </p>
              <div>
                {food.type === "desserts" ? (
                  <input
                    key={"desserts"}
                    type={"button"}
                    value={"Add To Cart"}
                    onClick={() =>
                      addToCart(
                        store.dispatch({
                          id: food.id,
                          type: actionType.ADD_TO_CART,
                          payload: {
                            name: food.payload.name,
                            cost: food.payload.cost,
                          },
                        })
                      )
                    }
                  />
                ) : null}
                <p>
                  {food.type === "desserts" ? food.payload.cost + " $" : null}
                </p>
              </div>
            </div>
          ) : null
        )}
      </StyledFood>
    </>
  );
}
