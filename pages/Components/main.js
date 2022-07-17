import React from "react";
import { useDispatch } from "react-redux";
import Foods from "../../public/Data/Foods";
import { shopCartActions } from "../../redux/shopping/shopping.reducer";
import { StyledFood } from "./Style/Food.style";

export default function Main() {
  const dispatch = useDispatch();
  return (
    <>
      <StyledFood>
        {Foods.map((food) =>
          food.type === "main" ? (
            <div className="container">
              <h1>{food.type === "main" ? food.payload.name : null}</h1>
              <p>{food.type === "main" ? food.payload.discriptions : null}</p>
              <div>
                {food.type === "main" ? (
                  <input
                    key={"main"}
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
                <p>{food.type === "main" ? food.payload.cost + " $" : null}</p>
              </div>
            </div>
          ) : null
        )}
      </StyledFood>
    </>
  );
}
