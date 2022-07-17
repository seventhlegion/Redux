import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopCartActions } from "../../redux/shopping/shopping.reducer";
import Nav from "../Components/Nav";
import Global from "../Components/Style/Global";
import { StyledShopCart } from "../Components/Style/ShopCart.stale";

export default function ShopCart() {
  let total = 0;

  const foods = useSelector((state) => state.shopcart.foodsList);
  const isTotal = useSelector((state) => state.shopcart.foodsList);
  const dispatch = useDispatch();

  isTotal.forEach((food) => {
    total = total + food.totalCost;
  });

  return (
    <>
      <Head>
        <title>Shop Cart</title>
        <link rel="icon" href="/pics/carrot-fill.png" />
      </Head>
      <Global />
      <Nav />
      <StyledShopCart>
        <h1>Your Shoping Cart</h1>
        {foods.map((food) => (
          <div className="container">
            <h3>{food.name}</h3>
            <p>{`Price: ${food.cost} $, Total: ${food.totalCost} $`}</p>
            <input
              type={"button"}
              value={"-"}
              onClick={() => dispatch(shopCartActions.removeCart(food.id))}
            />
            <p>{`${food.quantity} X`}</p>
            <input
              type={"button"}
              value={"+"}
              onClick={() =>
                dispatch(
                  shopCartActions.addTo({
                    name: food.name,
                    id: food.id,
                    cost: food.cost,
                  })
                )
              }
            />
            <input
              className={"remove"}
              type={"image"}
              src={"/svgs/trash-can-solid.svg"}
              alt={"trash"}
            />
          </div>
        ))}
        {total !== 0 ? (
          <div className={"total-container"}>
            <h3>
              Total :<span>{` ${total} $`}</span>
            </h3>
          </div>
        ) : null}
      </StyledShopCart>
    </>
  );
}
