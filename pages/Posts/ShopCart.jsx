import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { shopCartActions } from "../../redux/shopping/shopping.reducer";
import StyledShopCart from "../../Components/Style/ShopCart.style";
import Nav from "../../Components/Nav";
import Global from "../../Components/Style/Global";

export default function ShopCart() {
  let total = 0;

  const foods = useSelector((state) => state.shopcart.foodsList);
  const dispatch = useDispatch();

  foods.forEach((food) => {
    total += food.totalCost;
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
            duration: 0.01,
            type: "spring",
            damping: 25,
            stiffness: 500,
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
                duration: 0.01,
                type: "spring",
                damping: 25,
                stiffness: 500,
              },
            }}
            exit={{ y: "100vh", opacity: 0 }}
            key={food.name}
          >
            <h3>{food.name}</h3>
            <p>{`Price: ${food.cost}`}</p>
            <motion.input
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              key="-"
              value="-"
              onClick={() => dispatch(shopCartActions.removeCart(food.id))}
            />
            <p>{`${food.quantity} X`}</p>
            <motion.input
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              key="+"
              value="+"
              onClick={() =>
                dispatch(
                  shopCartActions.addTo({
                    name: food.name,
                    id: food.id,
                    cost: food.cost,
                  }),
                )
              }
            />{" "}
            <motion.input
              className="remove"
              type="image"
              key="/svgs/trash-can-solid.svg"
              src="/svgs/trash-can-solid.svg"
              alt="trash"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(shopCartActions.fullRemove(food.id))}
            />
          </motion.div>
        ))}
        {total !== 0 ? (
          <div className="total-container">
            <h3>
              Total :<span>{` ${total.toFixed(1)} $`}</span>
            </h3>
          </div>
        ) : null}
      </StyledShopCart>
    </>
  );
}
