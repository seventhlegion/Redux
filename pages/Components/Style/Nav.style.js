import styled from "styled-components";

export const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
    background-color: #CC5050;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

    .logo-container {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        padding: 0 1rem;

        .logo {
            margin-right: 1rem;
            align-self: center;
            width: 2rem;
            height: 2rem;
            transition: transform 0.5s ease-in-out;
            

            &:hover {
                transform: scale(1.5);
            }
        }

        p {
            align-self: center;
            text-align: center;
            font-size: 1.15rem;
            color: #131D1B;

            &:hover {
                cursor: default;
            }
        }
    }

    .button-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        flex-grow: 1;
        padding: 0 1rem;

        .shop-button {
            width: 2rem;
        }

        .button {
            align-self: center;
            margin: 0 1rem 0 0;
            height: 3rem;
            width: 6rem;
            background-color: #131D1B;
            border-style: none;
            border-radius: 50px;
            font-size: 1.15rem;
            color: #326662;

            &:hover {
                cursor: pointer;
            }
        }
    }
`