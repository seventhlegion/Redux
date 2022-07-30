import styled from "styled-components";
import { motion } from "framer-motion";

const StyledShopCart = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: #cc5050;
  margin: 1rem auto;
  width: 90%;
  padding: 0 1rem;
  border-radius: 10px;
  background-color: #131d1b;
  text-shadow: 0 0 5px rgba(0, 0, 0, 1);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 1rem auto;
    padding: 0 1rem;
    border-radius: 10px;
    background-color: #326662;
    color: #cc5050;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

    h3 {
      flex-grow: 1;
      text-align: center;
    }

    p {
      align-self: center;
      margin: 0 1rem;
      font-size: 1.15rem;
    }

    input {
      align-self: center;
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 50%;
      font-size: 1.15rem;
      background-color: #131d1b;
      color: #cc5050;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

      &:hover {
        cursor: pointer;
      }
    }

    .remove {
      background-color: #326662;
      box-shadow: none;
      margin-left: 1rem;
      border-radius: 10px;
    }
  }
  .total-container {
    text-align: right;
  }
`;

export default StyledShopCart;
