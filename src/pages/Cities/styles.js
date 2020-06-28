import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 135px;

  @media (max-width: 500px) {
    margin-top: 75px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: #4ffa7b;
  border-radius: 4px;
  height: 50px;
  padding: 0 5px;
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

export const SearchButtonContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
