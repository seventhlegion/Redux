import React, { useEffect, useRef } from "react";
import { StyledFilter } from "./Style/Filter.style";
import { motion } from "framer-motion";

export default function Filter({ setClick }) {
  const allRef = useRef(null);

  useEffect(() => {
    allRef.current.focus();
  }, []);
  return (
    <StyledFilter>
      <p>Filter</p>
      <div>
        <motion.input
          ref={allRef}
          whileFocus={{ scale: 1.1, opacity: 1 }}
          type={"button"}
          value={"All"}
          onClick={() => setClick("all")}
        />
        <motion.input
          whileFocus={{ scale: 1.1, opacity: 1 }}
          type={"button"}
          value={"Appetiziers"}
          onClick={() => setClick("appetiziers")}
        />
        <motion.input
          whileFocus={{ scale: 1.1, opacity: 1 }}
          type={"button"}
          value={"Soups"}
          onClick={() => setClick("soups")}
        />
        <motion.input
          whileFocus={{ scale: 1.1, opacity: 1 }}
          type={"button"}
          value={"Salads"}
          onClick={() => setClick("salads")}
        />
        <motion.input
          whileFocus={{ scale: 1.1, opacity: 1 }}
          type={"button"}
          value={"Main Course"}
          onClick={() => setClick("main")}
        />
        <motion.input
          whileFocus={{ scale: 1.1, opacity: 1 }}
          type={"button"}
          value={"Desserts"}
          onClick={() => setClick("desserts")}
        />
      </div>
    </StyledFilter>
  );
}
