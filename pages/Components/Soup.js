import React from "react";
import { useDispatch } from "react-redux";
import Foods from "../../public/Data/Foods";
import { shopCartActions } from "../../redux/shopping/shopping.reducer";
import { StyledFood } from "./Style/Food.style";

export default function Soup() {
  const dispatch = useDispatch();
  return (
    <>
      <StyledFood>
        {Foods.map((food) =>
          food.type === "soup" ? (
            <div className="container">
              <h1>{food.type === "soup" ? food.payload.name : null}</h1>
              <p>{food.type === "soup" ? food.payload.discriptions : null}</p>
              <div>
                {food.type === "soup" ? (
                  <input
                    type={"button"}
                    value={"Add To Cart"}
                    onClick={() =>
                      dispatch(
                        shopCartActions.addTo({
                          name: food.payload.name,
                          id: food.id,
                          cost: food.payload.cost,
                        })
                      )
                    }
                  />
                ) : null}

                <p>{food.type === "soup" ? food.payload.cost + " $" : null}</p>
              </div>
            </div>
          ) : null
        )}
      </StyledFood>
    </>
  );
}
