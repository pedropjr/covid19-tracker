import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 550px;

  @media (min-width: 800px) {
    overflow-y: scroll;

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
  }

  table {
    width: 100%;
    position: relative;
    border-collapse: collapse;

    tr {
      height: 44px;
    }

    thead {
      th:nth-child(1) {
        padding-left: 10px;
      }

      th {
        background: #4d4d4d;
        color: #fff;
        font-weight: normal;
        text-align: left;
        font-size: 20px;
        position: sticky;
        top: 0;
        left: 0;

        @media (max-width: 800px) {
          top: 135px;
        }

        @media (max-width: 500px) {
          top: 75px;
        }
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
