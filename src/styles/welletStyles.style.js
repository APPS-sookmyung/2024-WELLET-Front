import { css } from '@emotion/react';

export const welletStyles = css`
  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  body {
    height: 100%;
  }

  button,
  a {
    cursor: pointer;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    -webkit-user-drag: none;
  }

  button,
  input,
  textarea,
  select,
  meter,
  progress {
    appearance: none;
  }

  b {
    font-weight: 700;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 360px;
    height: 100vh;
    max-width: 768px;
    margin: 0 auto;
    background-color: white;
    overflow-y: auto;
  }
`;
