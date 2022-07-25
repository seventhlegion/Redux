import Head from "next/head";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { StyledContainer } from "../Components/Style/Container.style";
import { useSearch } from "../Components/Hooks/useSearch";
import { StyledFood } from "../Components/Style/Food.style";
import { AnimatePresence, motion } from "framer-motion";
import { dropIn } from "../Components/Backdrop/dropIn";
import Global from "../Components/Style/Global";
import Filter from "../Components/Filter";
import Nav from "../Components/Nav";
import All from "../Components/Lists/All";
import Appetiziers from "../Components/Lists/Appetiziers";
import Desserts from "../Components/Lists/Desserts";
import Salads from "../Components/Lists/Salads";
import Soup from "../Components/Lists/Soup";
import Main from "../Components/Lists/main";

export default function Home() {
  const cartItems = useSelector((state) => state.shopcart.foodsList);
  // console.log(cartItems);
  const [click, setClick] = useState("all");

  const [query, setQuery] = useState("");

  const { searchFood, error, loading } = useSearch(query);

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/pics/carrot-fill.png" />
        <title>Carrot Marrot</title>
      </Head>
      <Global />
      <Nav setQuery={setQuery} />
      <StyledContainer>
        <Filter setClick={setClick} />

        {searchFood.length !== 0 ? (
          <StyledFood>
            <AnimatePresence exitBeforeEnter={true}>
              {searchFood.map((food) => (
                <motion.div
                  className="container"
                  key={food.name}
                  variants={dropIn}
                  initial="hidden"
                  animate="visible"
                  exit={{ y: "-100vh" }}
                >
                  <h1>{food.name}</h1>
                  <p>{food.discriptions}</p>
                  <div>
                    {
                      <motion.button
                        className="add-to-cart-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          dispatch(
                            shopCartActions.addTo({
                              name: food.name,
                              id: food.id,
                              cost: food.cost,
                            })
                          )
                        }
                      >
                        Add To Cart
                      </motion.button>
                    }
                    <p>{food.cost + " $"}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </StyledFood>
        ) : click === "all" ? (
          <All />
        ) : click === "soups" ? (
          <Soup />
        ) : click === "desserts" ? (
          <Desserts />
        ) : click === "appetiziers" ? (
          <Appetiziers />
        ) : click === "salads" ? (
          <Salads />
        ) : click === "main" ? (
          <Main />
        ) : (
          ""
        )}
      </StyledContainer>
    </Fragment>
  );
}
