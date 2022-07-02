import styled from 'styled-components';

export const Headers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #CCCCCC;
    width: 100%;
    height: 88px;
    box-shadow: 2px 2px 2px 2px #CCCCCC;

    input {
        margin-left: -61px;
        border-radius: 5px;
    }

    button {
        margin-left: -60px;
        color: white;
        border-radius: 5px;
        border: 2px solid #D14B8F;
        background: #D14B8F;
    }
`;

export const Titles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 20px;
        margin-left: 10px;
        color: #555555;
    }
    h2 {
        font-size: 20px;
        margin-left: 10px;
        color: #D14B8F;
    }
`;

export const Profile = styled.div`
    margin-top: 5.1px;
    a {
        margin-left: -46.8px;
    }
`;

export const Line = styled.div`
position: absolute;
height: 2px;
left: calc(51% - 3px/2 - 275.35px);
top: 80px;
background: #D14B8F;
`;

export const WineBox = styled.div`
    margin-left: 8px;
    img  {
        border-radius: 16px;
    }
    p {
        position: absolute;
        margin-top: -23px;
        margin-left: 25px;
        background: white;
        color: #4FBFA5;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 20px;
        box-shadow: 0px 2px #888888;
    }
`;

export const CircleWine = styled.div`
    width: 56px;
    height: 56px;
    background: #F6B554;
    border-radius: 50px;

`;