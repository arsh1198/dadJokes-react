import styled from "styled-components";

import { theme } from "../hooks/use-theme";
import React from "react";
import useJoke from "../hooks/use-joke";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 45px;
  background: ${theme.LIGHT.button};
  padding: 0.5em 1em;
  border-radius: 10px;
  cursor: pointer;
  transition: ease all 100ms;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.99);
  }
`;

export default Button;
