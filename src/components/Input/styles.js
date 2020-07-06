import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background: #4ffa7b;
  border-radius: 4px;
  height: 50px;
  padding: 0 5px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 15px;

  input {
    border: none;
    border-bottom: 2px solid #fff;
    background: none;
    color: #fff;
    width: 100%;
    height: 43px;

    ::placeholder {
      color: #fff;
      font-style: italic;
    }
    font-size: 18px;
    padding: 10px;
    margin-right: 10px;
  }
`;
