import React from "react";
import Foods from "../../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";
import { useDispatch } from "react-redux";
import { shopCartActions } from "../../redux/shopping/shopping.reducer";

export default function All() {
  const dispatch = useDispatch();

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
                    dispatch(
                      shopCartActions.addTo({
                        name: food.payload.name,
                        id: food.id,
                        cost: food.payload.cost,
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
