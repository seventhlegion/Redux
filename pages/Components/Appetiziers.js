import React from "react";
import Foods from "../../public/Data/Foods";
import { StyledFood } from "./Style/Food.style";

export default function Appetiziers() {
  return (
    <>
        <StyledFood>
            {Foods.map((food) => (
              food.type === 'appetizers'?
                <div className="container">
                  <h1>{food.type === 'appetizers'?food.payload.name: null}</h1>
                  <p>{food.type === 'appetizers'? food.payload.discriptions: null}</p>
                  <div>
                    {food.type === 'appetizers'? <input type={"button"} value={"Add To Cart"} />: null}
                    <p>{food.type === 'appetizers'? food.payload.cost + ' $': null}</p>
                  </div>
                </div>: null
            ))}
        </StyledFood>
    </>
  );
}
