import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopCartActions } from "../../redux/shopping/shopping.reducer";
import { StyledShopCart } from "../Components/Style/ShopCart.stale";
import Nav from "../Components/Nav";
import Global from "../Components/Style/Global";
import { motion, AnimatePresence } from "framer-motion";

export default function ShopCart() {
  let total = 0;

  const foods = useSelector((state) => state.shopcart.foodsList);
  const dispatch = useDispatch();

  foods.forEach((food) => {
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
      <StyledShopCart
        initial={{ x: "-100vh" }}
        animate={{
          x: "0",
          opacity: 1,
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 100,
          },
        }}
        exit={{ x: "100vh", opacity: 0 }}
      >
        <h1>Your Shoping Cart</h1>
        {foods.map((food) => (
          <motion.div
            className="container"
            initial={{ y: "200vh" }}
            animate={{
              y: "0",
              opacity: 1,
              transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 100,
              },
            }}
            exit={{ y: "100vh", opacity: 0 }}
          >
            <h3>{food.name}</h3>
            <p>{`Price: ${food.cost} $, Total: ${food.totalCost.toFixed(
              1
            )} $`}</p>
            <motion.input
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type={"button"}
              value={"-"}
              onClick={() => dispatch(shopCartActions.removeCart(food.id))}
            />
            <p>{`${food.quantity} X`}</p>
            <motion.input
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
            <motion.input
              className={"remove"}
              type={"image"}
              src={"/svgs/trash-can-solid.svg"}
              alt={"trash"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(shopCartActions.fullRemove(food.id))}
            />
          </motion.div>
        ))}
        {total !== 0 ? (
          <div className={"total-container"}>
            <h3>
              Total :<span>{` ${total.toFixed(1)} $`}</span>
            </h3>
          </div>
        ) : null}
      </StyledShopCart>
    </>
  );
}
