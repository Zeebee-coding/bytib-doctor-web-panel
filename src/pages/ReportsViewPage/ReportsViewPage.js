import React from "react";
import Reports from "../../components/ReportViewComponents/Reports";
import styled from "styled-components";

const ReportsViewPage = () => {
  return (
    <ReportViewContainer>
      <Reports />
    </ReportViewContainer>
  );
};

export default ReportsViewPage;
const ReportViewContainer = styled.section`
   width: 100%;

  
  `;
