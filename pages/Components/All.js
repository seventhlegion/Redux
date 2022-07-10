import React from "react";
import Foods from "../../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";

export default function All() {
  return (
    <>
        <StyledFood>
            {Foods.map((food) => (
                <div className="container">
                  <h1>{food.payload.name}</h1>
                  <p>{food.payload.discriptions}</p>
                  <div>
                    {<input type={"button"} value={"Add To Cart"} />}
                    <p>{food.payload.cost + ' $'}</p>
                  </div>
                </div>
            ))}
        </StyledFood>
    </>
  );
}
