import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  z-index: 1;
  position: sticky;
  background-color: #cc5050;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

  .bar-progress {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background-color: #131d1b;
    transform-origin: 0%;
  }
  .total-container {
    display: flex;
    flex-direction: row;
    padding: 1rem;

    .logo-container {
      display: flex;
      flex-direction: row;
      flex-grow: 1;

      padding: 0 1rem;

      .logo {
        margin-right: 1rem;
        align-self: center;
        width: 3rem;
        height: 3rem;

        &:hover {
          cursor: pointer;
        }
      }

      h1 {
        align-self: center;
        text-align: center;
        color: #131d1b;

        &:hover {
          cursor: default;
        }
      }
    }

    .button-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding: 0 1rem;

      .shop-button {
        width: 2rem;

        &:hover {
          cursor: pointer;
        }
      }

      p {
        color: #131d1b;
        margin-left: 0.1rem;
        width: 1rem;
        height: 1rem;
      }

      .button {
        align-self: center;
        margin: 0 1rem 0 0;
        height: 3rem;
        width: 6rem;
        background-color: #131d1b;
        border-style: none;
        border-radius: 50px;
        font-size: 1.15rem;
        color: #326662;
        transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;

        &:hover {
          cursor: pointer;
          color: #131d1b;
          background-color: #326662;
        }
      }
    }
  }
`;
