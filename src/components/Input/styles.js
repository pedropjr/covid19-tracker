import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #4ffa7b;
  border-radius: 4px;
  height: 50px;
  padding: 0 5px;
  margin-bottom: 25px;
  width: 100%;
  max-width: 500px;

  input {
    border: none;
    border-bottom: 2px solid #fff;
    background: none;
    color: #fff;
    width: 100%;

    ::placeholder {
      color: #fff;
      font-style: italic;
    }
    font-size: 18px;
    padding: 10px;
    margin-right: 10px;
  }
`;
