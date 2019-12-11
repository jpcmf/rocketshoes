import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import bg from '../assets/images/bg.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

   * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: #191920 url(${bg}) no-repeat center top;
  }

  body, input, button {
    color: #222;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

`;
