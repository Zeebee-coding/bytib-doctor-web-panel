import React from "react";
import styled from "styled-components";
import { colors } from "../../../shared/colors";
const Simplebutton = ({
  text,
  onClick,
  color,
  width,
  height,
  margin,
  padding,
  marginLeft,
  disable,
  fontWeight,
  backgroundColor,
  marginRight,
}) => {
  return (
    <StyledSimpleButton>
      <button
        onClick={onClick ? onClick : () => false}
        disabled={disable ? "true" : ""}
        style={{
          color: color ? color : "white",
          width: width ? width : "auto",
          height: height ? height : "auto",
          padding: padding ? padding : "",
          marginLeft: marginLeft ? marginLeft : "",
          marginRight: marginRight ? marginRight : "",
          // #70B5D3
          backgroundColor: backgroundColor ? backgroundColor : colors.blue,
          boxShadow: "none",
          cursor: "pointer",
          margin: margin ? margin : "",
          fontWeight: fontWeight ? fontWeight : "600",
        }}
      >
        {text ? text : "Button"}
      </button>
    </StyledSimpleButton>
  );
};
export default Simplebutton;
const StyledSimpleButton = styled.section`
font-size: 1.5vmax;
  button {
    outline: none;
    font-size: 1.5vmax;
  }
`;
