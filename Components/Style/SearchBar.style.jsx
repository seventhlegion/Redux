import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin: 0 auto 1rem;
  padding: 0.5rem;
  border-radius: 15px;
  background-color: #fafafa;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);

  .search-icon {
    margin: 0 0.5rem;
    width: 2rem;
  }

  .input {
    flex-grow: 1;
    font-size: 1.15rem;
    background-color: #fafafa;
    color: #131d1b;
    border: none;
    outline: none;
  }

  @media screen and (max-width: 720px) {
    flex-grow: 1;
    width: 8rem;
    height: 3rem;

    .search-icon {
      width: 1rem;
    }

    .input {
      width: 3rem;
      font-size: 1rem;
    }
  }
`;

export default StyledSearchBar;
