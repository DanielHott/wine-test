import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
`;

export const CardItem = styled.div`
    width: 256px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    p {
        width: 232.64px;
        text-align: center;
        height: 42.83px;
    }
`;

export const OldPrice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h5 {
        display: flex;
        background: #F79552;
        border-radius: 1.94677px;
        font-weight: 700;
        font-size: 10px;
        color: white;
        padding: 2px;
    }

    h4 {
        display: flex;
        color: #888888;
        text-decoration: line-through;
        font-weight: 700;
        font-size: 11px;
    }
`;