import React from "react";
import styled from "styled-components";

const ProgressBar = ({ width }) => {
  return (
    <Container props={width}>
       <div className="progress-bar" id="progressbar-seting"
                role="progressbar"
                style={{
                    width: width ? width : ""
                }}
                aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100">
            </div>
    </Container>
  );
};

export default ProgressBar;
const Container = styled.section`
  width: 40%;
  margin: 1.2vmax 1vmax 0vmax 1vmax;
  border: 2px solid red;
  #progressbar-seting{
    background-color: #70b5d3;
}
`;

// import React from "react";
// const ProgressBar = ({progress}) => {
//   return (
//     <div style={container}>
//     <div style={bar} role="progressbar"
//     aria-valuenow={progress}
//     aria-valuemin={0}
//     aria-valuemax={100}>
//     <span style={label} >{`${progress}%`}</span>
//     </div>
//     </div>
//   );
//   };
//   export default ProgressBar

//   const container = {
//     height: 20,
//     width: "100%",
//     backgroundColor: "#fff",
//     borderRadius: 50,
//     margin: 50
//     }

//     const bar = {
//     height: "100%",
//     width: `${progress}%`,
//     backgroundColor: "#90CAF9",
//     borderRadius: "inherit",
//     }

//     const label = {
//     padding: "1rem",
//     color: "#000000",
//     }
