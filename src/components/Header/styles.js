import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  background: #101010;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;

  div {
    flex: 1;
  }

  @media only screen and (max-width: 550px) {
    align-items: flex-start;
  }
`;

export const Left = styled.div``;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #fff;
    font-size: 40px;
  }

  img {
    height: 48px;
    width: 48px;
  }
`;

export const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: flex-end;

  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(1, auto);
  }

  span {
    color: #fff;
    font-size: 18px;

    & + span {
      padding-left: 25px;
    }

    @media only screen and (max-width: 550px) {
    }
  }
`;
