import styled from "styled-components";

export const Main = styled.div`
    display: flex;
`;

export const Paginate = styled.div`
    display: flex;
    margin-left: 670px;
    margin-top: 40px;
    align-items: center;
    margin-bottom: 50px;
    color: #B6116E;
    font-weight: 700;
    button:nth-child(1) {
        color: #B6116E;
        border: 1px solid black;
        background: white;
        border: none;
        border-radius: 3px;
        font-weight: 700;
    }
    button:nth-child(2) {
        color: white;
        margin-left: 4px;
        border: 1px solid black;
        background: #B6116E;
        border: 1px solid #B6116E;
        border-radius: 3px;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: 700;
        height: 38px;
        font-size: 16px;
    }
    button:nth-child(3) {
        color: #B6116E;
        border: 1px solid black;
        background: white;
        border: 1px solid #B6116E;
        border-radius: 3px;
        padding-left: 20px;
        padding-right: 20px;
        height: 38px;
        margin-right: 8px;
        margin-left: 8px;
        font-weight: 700;
        font-size: 16px;
    }
    button:nth-child(4) {
        color: #B6116E;
        border: 1px solid black;
        background: white;
        border: 1px solid #B6116E;
        border-radius: 3px;
        margin-right: 4px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 16px;
        font-weight: 700;
        height: 38px;
    }

    button:nth-child(5) {
        color: #B6116E;
        border: 1px solid black;
        background: white;
        border: none;
        font-weight: 700;
    }
`;