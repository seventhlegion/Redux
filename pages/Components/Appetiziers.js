import React from "react";
import Foods from "../../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";
import store from "./Redux/store";
import * as actionType from "./Shopping/Shopping.type";

export default function Appetiziers({ addToCart }) {
  return (
    <>
      <StyledFood>
        {Foods.map((food) =>
          food.type === "appetizers" ? (
            <div className="container">
              <h1>{food.type === "appetizers" ? food.payload.name : null}</h1>
              <p>
                {food.type === "appetizers" ? food.payload.discriptions : null}
              </p>
              <div>
                {food.type === "appetizers" ? (
                  <input
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
                  {food.type === "appetizers" ? food.payload.cost + " $" : null}
                </p>
              </div>
            </div>
          ) : null
        )}
      </StyledFood>
    </>
  );
}
