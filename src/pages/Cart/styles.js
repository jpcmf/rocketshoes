import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 4px;

  footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    button {
      align-items: center;
      background-color: #7159c1;
      border-radius: 4px;
      border: 0;
      color: #fff;
      display: flex;
      font-weight: bold;
      margin-top: auto;
      overflow: hidden;
      padding: 12px 20px;
      text-transform: uppercase;
      transition: all 300ms ease;

      &:hover {
        background-color: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: solid 1px #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border-radius: 4px;
      border: solid 1px #ddd;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    align-items: center;
    background-color: transparent;
    border: 0;
    display: flex;
    padding: 6px;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Total = styled.div`
  align-items: baseline;
  display: flex;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
