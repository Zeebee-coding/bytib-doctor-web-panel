import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/HeaderComponents/Header";
import SideBar from "../components/SideBar/SideBar";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashBoardView from "../pages/DashBoardView/DashBoardView";
import DoctorProfileViewPage from "../pages/DoctorProfileViewPage/DoctorProfileViewPage";
import SingupPage from "../pages/SingupPage/SingupPage";
import AppointmentViewPage from "../pages/AppointmentsViewPage/AppointmentsViewPage";
import PatientViewPage from "../pages/PatientViewPage/PatientViewPage";
import MessageViewPage from "../pages/MessageViewPage/MessageViewPage";
import ReportsViewPage from "../pages/ReportsViewPage/ReportsViewPage";
import AppointmentBookingViewPage from "../pages/AppointmentBookingViewPage/AppointmentBookingViewPage";
import SettingViewPage from "../pages/SettingViewPage/SettingViewPage";
import RatingViewPage from "../pages/RatingViewPage/RatingViewPage";
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
              <Route path="/Signup" element={<SingupPage />} />
              <Route path="/Dashboard" element={<DashBoardView />} />
              <Route
                path="/ShowDoctorProfile"
                element={<DoctorProfileViewPage />}
              />
              <Route path="/Appointment" element={<AppointmentViewPage />} />
              <Route path="/Patients" element={<PatientViewPage />} />
              <Route path="/Message" element={<MessageViewPage />} />
              <Route path="/Report" element={<ReportsViewPage />} />
              <Route
                path="/AppointmentBookingView"
                element={<AppointmentBookingViewPage />}
              />
              <Route path="/Setting" element={<SettingViewPage />} />
              <Route path="/Rating" element={<RatingViewPage />} />
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
  padding-top: 4em;
  overflow-x: hidden;
`;
