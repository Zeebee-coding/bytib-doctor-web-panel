import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/HeaderComponents/Header";
import SideBar from "../components/SideBar/SideBar";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashBoardView from "../pages/DashBoardView/DashBoardView";
import DoctorProfileViewPage from "../pages/DoctorProfileViewPage/DoctorProfileViewPage";
import styled from "styled-components";
import { device } from "../shared/BreakPoints";
function Routing() {
  return (
    <>
        <RoutingContainer>
          <Left>
            <SideBar />
          </Left>
        <Right>
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/Dashboard" element={<DashBoardView />} />
              <Route
                path="/ShowDoctorProfile"
                element={<DoctorProfileViewPage />}
              />
            </Routes>
          </Main>
        </Right>
      </RoutingContainer>
    </>
  );
}

export default Routing;

const RoutingContainer = styled.section`
  display: flex;
  width: 100vw;
  overflow-x: hidden;
  
`;
const Left = styled.section`
  width: 20vw;
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
    width: 10vw;
  }
  height: 100vh;
`;
const Right = styled.section`
  width: 80vw;
  height: auto;
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
    width: 90vw;
  }
`;

const Main = styled.section`
  padding-top: 3em;
`;
