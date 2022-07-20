import styled from "styled-components";

export const StyledFilter = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #131d1b;
  width: 25%;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);

  p {
    padding-left: 1rem;
    font-size: 2rem;
    color: #326662;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

    &:hover {
      cursor: default;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;

    input {
      text-align: left;
      padding-left: 2rem;
      border-bottom: 0.5px solid #326662;
      border-right: none;
      border-top: 0.5px solid #326662;
      border-left: none;
      height: 5rem;
      font-size: 1.15rem;
      background-color: #131d1b;
      color: #cc5050;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
      outline: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
