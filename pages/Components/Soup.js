import React from "react";
import Foods from "../../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";

export default function Soup() {
  return (
    <>
        <StyledFood>
            {Foods.map((food) => (
              food.type === 'soup'?
                <div className="container">
                  <h1>{food.type === 'soup'?food.payload.name: null}</h1>
                  <p>{food.type === 'soup'? food.payload.discriptions: null}</p>
                  <div>
                    {food.type === 'soup'? <input type={"button"} value={"Add To Cart"} />: null}
                    <p>{food.type === 'soup'? food.payload.cost + ' $': null}</p>
                  </div>
                </div>: null
            ))}
        </StyledFood>
    </>
  );
}
