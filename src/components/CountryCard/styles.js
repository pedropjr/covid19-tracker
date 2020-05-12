import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #4d4d4d;
  border-radius: 4px;
  padding: 15px 20px;
  margin-right: 25px;

  span {
    color: #fff;
  }

  @media only screen and (max-width: 680px) {
    flex-direction: row;
    margin-right: 0;
    margin-bottom: 15px;
    height: 100%;
  }
`;

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 10px;
  }

  @media only screen and (max-width: 680px) {
    flex-direction: column;

    img {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 450px) {
    display: none;
  }
`;

export const GraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;

  @media only screen and (max-width: 680px) {
    width: 200px;
  }

  @media only screen and (max-width: 450px) {
    position: relative;
    left: -25px;
  }
`;

export const CasesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 450px) {
    position: relative;
    left: -20px;
  }
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin-left: 10px;
  }

  @media only screen and (max-width: 680px) {
    span {
      margin-right: 5px;
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #fff;
  padding: 20px 0;

  a {
    color: #fff;
    text-decoration: underline;
  }

  @media only screen and (max-width: 680px) {
    display: none;
  }
`;
