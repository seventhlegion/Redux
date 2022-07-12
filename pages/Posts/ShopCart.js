import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Components/Nav";
import Global from "../Components/Style/Global";
import { StyledShopCart } from "../Components/Style/ShopCart.stale";

export default function ShopCart() {
  return (
    <>
      <Head>
        <title>Shop Cart</title>
      </Head>
      <Global />
      <Nav />
      <StyledShopCart>
        <h1>Your Shoping Cart</h1>
        <div className="foods-container">
          <h3>Milk Soup</h3>
          <input type={"button"} value={"-"} onClick={""} />
          <p>{}</p>
          <input type={"button"} value={"+"} onClick={""} />
          <input
            className="remove"
            type={"image"}
            src={"/svgs/trash-can-solid.svg"}
            alt={"trash"}
          />
        </div>
        <div className="total-container">
          <h3>
            Totall:<span> 13.4 $</span>
          </h3>
        </div>
      </StyledShopCart>
    </>
  );
}
