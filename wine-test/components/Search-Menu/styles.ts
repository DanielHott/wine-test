import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 8vw;
    width: 448px;
    height: 100vh;
    font-weight: 700;
    font-size: 18px;
    margin-top: 10px;

// A ideia era utilizar o react device detect  mas pelo SSR não foi possível, então utilizei pelo css

    @media only screen and (min-width: 300px) and (max-width: 500px) {;
        visibility: hidden;
        width: 0;
        margin-left: -40px
    } 
    h5 {
        margin-top: 10px;
        color: #333333;
        margin-bottom: 10px;
    }

    label {
        margin-top: 17px;
        font-size: 14px;
        font-weight: 400;
        display: flex;
        align-items: center; 
`;