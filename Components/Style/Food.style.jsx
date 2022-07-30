import styled from "styled-components";
import { motion } from "framer-motion";

const StyledFood = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;

  .container {
    color: #cc5050;
    background-color: #131d1b;
    width: 95%;
    margin: 1rem auto;
    padding: 1rem;
    font-size: 1.15rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

    h1 {
      color: #326662;
    }

    p {
      line-height: 1.7rem;
      color: #cc5050;
    }

    div {
      display: flex;
      flex-direction: row;
      margin: 1rem;

      p {
        text-decoration: underline;
        text-decoration-style: dashed;
        font-size: 1.4rem;
      }

      .add-to-cart-btn {
        align-self: center;
        border: none;
        border-radius: 50px;
        width: 10rem;
        height: 3rem;
        background-color: #326662;
        margin-right: 1rem;
        font-size: 1.15rem;
        color: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

        &:hover {
          cursor: pointer;
          color: #131d1b;
          background-color: #cc5050;
        }
      }
    }
  }
`;

export default StyledFood;
