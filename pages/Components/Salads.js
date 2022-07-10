import React from "react";
import Foods from "../../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";

export default function Salads() {
  return (
    <>
        <StyledFood>
            {Foods.map((food) => (
              food.type === 'salad'?
                <div className="container">
                  <h1>{food.type === 'salad'?food.payload.name: null}</h1>
                  <p>{food.type === 'salad'? food.payload.discriptions: null}</p>
                  <div>
                    {food.type === 'salad'? <input type={"button"} value={"Add To Cart"} />: null}
                    <p>{food.type === 'salad'? food.payload.cost + ' $': null}</p>
                  </div>
                </div>: null
            ))}
        </StyledFood>
    </>
  );
}
