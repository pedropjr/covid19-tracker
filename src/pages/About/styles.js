import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  color: #fff;
  font-size: 20px;

  a {
    text-decoration-style: none;
    color: #4ffa7b;
  }

  @media only screen and (max-width: 480px) {
    padding: 50px 0;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #4d4d4d;
  border-radius: 4px;
  height: 300px;
  width: 350px;
  padding: 0 20px;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Message = styled.span`
  text-align: justify;
`;

export const Thank = styled.span`
  text-align: justify;
`;

export const API = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SourceCode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
