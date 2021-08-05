import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "../../assets/lotties/piggy-laugh.json";
import { theme } from "../hooks/use-theme";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Lottie
        style={{ position: "fixed", top: 300 }}
        options={defaultOptions}
        height={350}
        width={350}
      />
    </div>
  );
};

export default Logo;
