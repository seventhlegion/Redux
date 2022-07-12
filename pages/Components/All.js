import React from "react";
import Foods from "../../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";
import store from "./Redux/store";
import * as actionType from "./Shopping/Shopping.type";

export default function All({ addToCart }) {
  return (
    <>
      <StyledFood>
        {Foods.map((food) => (
          <div className="container">
            <h1>{food.payload.name}</h1>
            <p>{food.payload.discriptions}</p>
            <div>
              {
                <input
                  key={"all"}
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
              }
              <p>{food.payload.cost + " $"}</p>
            </div>
          </div>
        ))}
      </StyledFood>
    </>
  );
}
