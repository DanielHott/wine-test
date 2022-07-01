import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    h1 {
        font-size: 18px;
        margin-top: 30px;
        margin-left: 20px;
        color: #262626;
    }
`;

export const ButtonCard = styled.div`
    display: flex;
    flex-direction: column;
    button {
        margin-left: 20px;
        width: 256px;
        background: #7EBC43;
        box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
        border-radius: 3.89354px;
        height: 39.36px;
        color: white;
        border: none;
        font-size: 14px;
    }

    button:hover {
        background: #7FCC43;
    }
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
    height: 333px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    p {
        font-family: 'Lato', sans-serif;
        width: 232.64px;
        text-align: center;
        height: 42.83px;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
    }
`;

export const OldPrice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
    h5 {
        display: flex;
        margin-left: 5px;
        background: #F79552;
        border-radius: 1.94677px;
        font-weight: 600;
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

export const MemberPrice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -38px;
    h5 {
        display: flex;
        margin-right: 5px;
        font-size: 11px;
        color: black;
    }

    h6 {
        display: flex;
        border-radius: 1.94677px;
        font-weight: 600;
        font-size: 14px;
        color: #B6116E;
    }
    
    h4 {
        display: flex;
        color: #B6116E;
        font-weight: 700;
        font-size: 20px;
    }
`;

export const NormalPrice = styled.div`
    margin-top: -38px;
    h5 {
        color: #888888;
        font-size: 12px;
    }
`;