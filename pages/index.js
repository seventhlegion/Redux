import Head from "next/head";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StyledContainer } from "./Components/Style/Container.style";
import All from "./Components/All";
import Appetiziers from "./Components/Appetiziers";
import Filter from "./Components/Filter";
import Desserts from "./Components/Desserts";
import Salads from "./Components/Salads";
import Nav from "./Components/Nav";
import Soup from "./Components/Soup";
import Global from "./Components/Style/Global";
import Main from "./Components/main";
import { INITIAL_STATE } from "./Components/Shopping/Shopping.reducer";
import store from "./Components/Redux/store";

const theme = {
  bg: "#131d1b",
  fc: "#cc5050",
};

store.subscribe(() => {
  console.log("Store Changed !" && store.getState());
});

console.log(store.getState());

export default function Home() {
  const [click, setClick] = useState("all");
  const [add, setAdd] = useState([{}]);

  INITIAL_STATE({ add });

  console.log(add);

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
        {click === "all" ? <All addToCart={setAdd} /> : ""}
        {click === "soups" ? <Soup addToCart={setAdd} /> : ""}
        {click === "desserts" ? <Desserts addToCart={setAdd} /> : ""}
        {click === "appetiziers" ? <Appetiziers addToCart={setAdd} /> : ""}
        {click === "salads" ? <Salads addToCart={setAdd} /> : ""}
        {click === "main" ? <Main addToCart={setAdd} /> : ""}
      </StyledContainer>
    </ThemeProvider>
  );
}
