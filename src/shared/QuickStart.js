import React from "react";
import styled from "styled-components";
function QuickStart({ title, numberValue, image, colorPending }) {
  return (
      <QuickStartContainer>
          <p>{title}</p>
          <CardContainer color={colorPending}>
            <h1>{numberValue}</h1>
            {image ? <img src={image} alt="icon" /> : ""}
          </CardContainer>
      </QuickStartContainer>
  );
}

export default QuickStart;
const QuickStartContainer = styled.section`
  width: 24%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  object-fit:cover;
  p {
    font-size: clamp(0.7em, 1.7vh, 4em);
  }
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  column-gap: 1em;
  h1 {
    font-size: clamp(1.6rem, 0.6rem + 0.5vw, 1rem);
    color: ${(props) => (props.color === "normal" ? "black" : "red")};
    margin: 0;
  }
  img {
    height: 10px;
    width: 14px;
  }
`;
