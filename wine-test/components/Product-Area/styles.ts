import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    
`;

export const NoProducts = styled.div`
    color: #888888;
    display: flex;
    align-items: center;
    height: 400px;
    justify-content:center;
`;

export const Description = styled.div`
    margin-left: 100px;
    h5 {
      background: #7EBC43;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
      border-radius: 4px;
      color: white;
      width: 328px;
      height: 56px;
      font-weight: 700;
      font-size: 17px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    button {
        background: #7EBC43;
        color: white;
        font-size: 20px;
        border: none;
    }

    h2 {
        font-size: 26px;
        margin-bottom: -4px;
    }

    button:nth-child(3) {
        background: #7EBC43;
        color: white;
        font-size: 18px;
        border: 1px solid white;
        border-radius: 50px;
    }

    p {
        font-size: 25px;
    }
`;

export const SommelierComment = styled.div`
    width: 448px;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #666666;
    margin-top: -10px;
    margin-bottom: 10px;
`;


export const PriceMember = styled.div`
    margin-top: -65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #C81A78;
    h6 {
        font-size: 35px;
    }
`;

export const PriceNonMember = styled.div`
    color: #888888;
    font-weight: 700;
    font-size: 16px;
    margin-top: -102px;
    margin-bottom: 50px;
`;

export const WineFeatures = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    h4 {
        margin-left: 5px;
        font-weight: 400;
        font-size: 14px;
        color: #555555;
    }
`;


export const Region = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: -30px;
    h4 {
        color: #C81A78;
        font-size: 14px;
    }
    h3 {
        color: #888888;
        font-size: 14px;
    }
`;