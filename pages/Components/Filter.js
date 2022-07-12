import React from "react";
import { StyledFilter } from "./Style/Filter.style";

export default function Filter({ setClick }) {
  return (
    <StyledFilter>
      <p>Filter</p>
      <div>
        <input type={"button"} value={"All"} onClick={() => setClick("all")} />
        <input
          type={"button"}
          value={"Appetiziers"}
          onClick={() => setClick("appetiziers")}
        />
        <input
          type={"button"}
          value={"Soups"}
          onClick={() => setClick("soups")}
        />
        <input
          type={"button"}
          value={"Salads"}
          onClick={() => setClick("salads")}
        />
        <input
          type={"button"}
          value={"Main Course"}
          onClick={() => setClick("main")}
        />
        <input
          type={"button"}
          value={"Desserts"}
          onClick={() => setClick("desserts")}
        />
      </div>
    </StyledFilter>
  );
}
