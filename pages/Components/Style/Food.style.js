import styled from "styled-components";

export const StyledFood = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    .container {
        color: #cc5050;
        background-color: #131D1B;
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
            }

            input {
                border: none;
                border-radius: 50px;
                width: 8rem;
                background-color: #326662;
                margin-right: 1rem;
                font-size: 1.15rem;
                color: white;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
                transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;

                &:hover {
                    cursor: pointer;
                    color: #131D1B;
                    background-color: #cc5050;
                }
            }
        }
    }
`