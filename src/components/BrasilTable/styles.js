import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  height: 550px;
  width: 100%;
  overflow-y: scroll;

  @media only screen and (max-height: 820px) {
    height: 350px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #101010;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #4d4d4d;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    position: relative;

    tr {
      height: 44px;
    }

    thead {
      th:nth-child(1) {
        padding-left: 10px;
      }

      th {
        position: sticky;
        top: 0;
        background: #4d4d4d;
        color: #fff;
        font-weight: normal;
        text-align: left;
        font-size: 20px;
      }
    }

    tbody {
      td {
        color: #fff;
        font-size: 20px;
        padding-left: 10px;
      }

      tr:nth-child(even) {
        background: rgba(175, 175, 175, 0.05);
      }
    }
  }
`;
