import React from "react";
import styled from "styled-components";
import { colors } from "../../../shared/colors";
const HoverButton = ({
  text,
  onClick,
  margin,
  width,
  height,
  padding,
  marginLeft,
  fontSize,
  fontWeight,
  marginRight,
}) => {
  return (
    <StyledHoverButton>
      <button
        onClick={onClick ? onClick : () => false}
        style={{
          width: width ? width : "auto",
          height: height ? height : "auto",
          padding: padding ? padding : "",
          marginLeft: marginLeft ? marginLeft : "",
          marginRight: marginRight ? marginRight : "",
          fontSize: fontSize ? fontSize : "",
          border: "1px solid #70B5D3 ",
          boxShadow: "none",
          cursor: "pointer",
          fontWeight: fontWeight ? fontWeight : "600",
          margin: margin ? margin : "",
        }}
      >
        {text ? text : "Button"}
      </button>
    </StyledHoverButton>
  );
};

export default HoverButton;
const StyledHoverButton = styled.section`
  button{
    font-size: 1.5vmax;
  }
  button:hover {
    background-color: ${colors.blue};
    color: white !important;
    font-size: 1.5vmax;
  }
`;
