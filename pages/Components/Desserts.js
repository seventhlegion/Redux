import React from "react";
import Foods from "../../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";

export default function Desserts() {
  return (
    <>
        <StyledFood>
            {Foods.map((food) => (
              food.type === 'desserts'?
                <div className="container">
                  <h1>{food.type === 'desserts'?food.payload.name: null}</h1>
                  <p>{food.type === 'desserts'? food.payload.discriptions: null}</p>
                  <div>
                    {food.type === 'desserts'? <input type={"button"} value={"Add To Cart"} />: null}
                    <p>{food.type === 'desserts'? food.payload.cost + ' $': null}</p>
                  </div>
                </div>: null
            ))}
        </StyledFood>
    </>
  );
}
