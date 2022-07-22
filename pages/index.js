import Head from "next/head";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StyledContainer } from "../Components/Style/Container.style";
import All from "../Components/All";
import Appetiziers from "../Components/Appetiziers";
import Filter from "../Components/Filter";
import Desserts from "../Components/Desserts";
import Salads from "../Components/Salads";
import Nav from "../Components/Nav";
import Soup from "../Components/Soup";
import Global from "../Components/Style/Global";
import Main from "../Components/main";
import { useSelector } from "react-redux";

const theme = {
  bg: "#131d1b",
  fc: "#cc5050",
};

export default function Home() {
  const cartItems = useSelector((state) => state.shopcart.foodsList);
  console.log(cartItems);
  const [click, setClick] = useState("all");

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/pics/carrot-fill.png" />
        <title>Carrot Marrot</title>
      </Head>
      <Global />
      <Nav />
      <StyledContainer>
        <Filter setClick={setClick} />
        {click === "all" ? <All /> : ""}
        {click === "soups" ? <Soup /> : ""}
        {click === "desserts" ? <Desserts /> : ""}
        {click === "appetiziers" ? <Appetiziers /> : ""}
        {click === "salads" ? <Salads /> : ""}
        {click === "main" ? <Main /> : ""}
      </StyledContainer>
    </ThemeProvider>
  );
}
