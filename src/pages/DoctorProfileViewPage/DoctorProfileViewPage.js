import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/HeaderComponents/Header";
import ShowDoctorProfile from "../../components/DoctorsProfile/ShowDoctorProfile";
import { colors } from "../../shared/colors";
const DoctorProfileViewPage = () => {
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    if (collapse === false) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };
  return (
    <DoctorProfileViewSection>
        <ShowDoctorProfile />
    </DoctorProfileViewSection>
  );
};
export default DoctorProfileViewPage;

const DoctorProfileViewSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;

`;
