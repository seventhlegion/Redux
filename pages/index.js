import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Filter from "./Components/Filter";
import Items from "./Components/items";
import Nav from "./Components/Nav";
import { StyledContainer } from "./Components/Style/Container.style";
import Global from './Components/Style/Global';

const theme = {
  bg: '#131d1b',
  fc: '#cc5050',
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href='/pics/carrot-fill.png' />
        <title>Carrot Marrot</title>
      </Head>
    <Global />
    <Nav />
    <StyledContainer>
    <Filter />
    <Items />
    </StyledContainer>
    </ThemeProvider>
  )
}
