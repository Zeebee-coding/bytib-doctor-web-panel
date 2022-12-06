import React from "react";
import Patients from "../../components/PatientViewComponents/Patient/Patient";
import styled from "styled-components";
import { colors } from "../../shared/colors";

const PatientViewPage = () => {
  return (
    <>
      <PatientViewPageContainer>
        <Patients />
      </PatientViewPageContainer>
    </>
  );
};
export default PatientViewPage;
const PatientViewPageContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 10px;
  background-color: ${colors.lightgray};
  `;
