import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  span {
    font-size: 18px;
    color: #fff;
  }

  @media only screen and (max-height: 970px) {
    padding-top: 50px;
  }
`;

export const Update = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
`;
