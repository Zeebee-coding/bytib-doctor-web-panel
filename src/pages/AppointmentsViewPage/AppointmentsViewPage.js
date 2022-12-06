import React, { useState } from "react";
import Appointment from "../../components/AppointmentPageComponents/Appointment";
import styled from "styled-components";
// import db from "../../db";
const AppointmentViewPage = () => {
 
  return (
    <AppointmentContainer>
        <Appointment />
    </AppointmentContainer>
  );
};

export default AppointmentViewPage;
const AppointmentContainer = styled.section`
display: flex;  
width: 100%;
`;