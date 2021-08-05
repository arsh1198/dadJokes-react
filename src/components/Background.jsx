import styled from "styled-components";
import { theme } from "../hooks/use-theme";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: ${theme.LIGHT.bg};
`;

export default Background;
