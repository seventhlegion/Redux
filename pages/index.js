import Head from "next/head";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { StyledContainer } from "../Components/Style/Container.style";
import { useSearch } from "../Components/Hooks/useSearch";
import { StyledFood } from "../Components/Style/Food.style";
import { motion } from "framer-motion";
import { dropIn } from "../Components/Backdrop/dropIn";
import { AddToCartBtn } from "../Components/AddToCartBtn";
import Global from "../Components/Style/Global";
import Filter from "../Components/Filter";
import Nav from "../Components/Nav";
import All from "../Components/Lists/All/All";
import Appetiziers from "../Components/Lists/Appetiziers/Appetiziers";
import Desserts from "../Components/Lists/Desserts/Desserts";
import Salads from "../Components/Lists/Salads/Salads";
import Soup from "../Components/Lists/Soups/Soup";
import Main from "../Components/Lists/Main/Main";

export default function Home() {
  const dispatch = useDispatch();

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
            {searchFood.map((food) => (
              <motion.div
                className="container"
                key={food.id}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit={{ y: "-100vh" }}
              >
                <h1>{food.payload.name}</h1>
                <p>{food.payload.discriptions}</p>
                <div>
                  {<AddToCartBtn dispatch={dispatch} foods={food} />}
                  <p>{food.payload.cost + " $"}</p>
                </div>
              </motion.div>
            ))}
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
