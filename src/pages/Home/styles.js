import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      color: #333;
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      align-items: center;
      background-color: #7159c1;
      border-radius: 4px;
      border: 0;
      color: #fff;
      display: flex;
      margin-top: auto;
      overflow: hidden;
      transition: all 300ms ease;

      &:hover {
        background-color: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background-color: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
`;
