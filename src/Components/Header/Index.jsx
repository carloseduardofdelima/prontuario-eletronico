import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #3e92c0;
    color: white;
    padding: 5px 10px;
    position: fixed;
    z-index: 2;
    
    h1 {
        font-size: 1.2rem;
        margin: 10px;
    }

    div {
        display: flex;
        align-items: center;
    }
`