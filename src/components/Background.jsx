import React from "react";
import styled from "styled-components";
import { theme, useTheme } from "../hooks/use-theme";

const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
`;

const Background = ({ children }) => {
  const theme = useTheme();
  return <StyledBackground theme={theme}>{children}</StyledBackground>;
};

export default Background;
