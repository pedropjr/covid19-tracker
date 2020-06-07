import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.loading ? 'flex' : 'grid')};
  justify-content: center;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  padding: 50px;
  color: #fff;
  margin-top: 135px;

  @media only screen and (max-width: 1920px) {
    grid-template-columns: repeat(4, auto);
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-top: 75px;
  }

  @media only screen and (max-width: 590px) {
    padding: 0;
  }
`;
