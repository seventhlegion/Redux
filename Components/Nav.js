import Link from "next/link";
import { useSelector } from "react-redux";
import { StyledNav } from "./Style/Nav.style";
import { motion, useSpring, useScroll } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import { SearchBar } from "./SearchBar";
import { useSearch } from "./Hooks/useSearch";

export default function Nav({ setQuery }) {
  const total = useSelector((state) => state.shopcart.total);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });
  const scrollRef = useRef();

  const changeHandeler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Fragment>
      <StyledNav>
        <motion.div
          className="bar-progress"
          viewport={{ root: scrollRef }}
          style={{ scaleX: scrollProgress }}
        />
        <div className="total-container">
          <div className="logo-container">
            <Link href={"/"}>
              <motion.img
                className="logo"
                drag
                dragConstraints={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ rotate: 360 }}
                src="/pics/carrot-fill.png"
              />
            </Link>
            <h1>Carrot Marrot</h1>
          </div>
          <SearchBar change={changeHandeler} />
          <div className="button-container">
            <motion.button
              className="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Log In
            </motion.button>
            <Link href={"/Posts/ShopCart"}>
              {total !== 0 ? (
                <motion.img
                  className="shop-button"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src="/svgs/shopping.svg"
                />
              ) : (
                <motion.img
                  className="shop-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  src="/svgs/shopping.svg"
                />
              )}
            </Link>
            {total !== 0 ? <p>{total}</p> : <p></p>}
          </div>
        </div>
      </StyledNav>
    </Fragment>
  );
}
