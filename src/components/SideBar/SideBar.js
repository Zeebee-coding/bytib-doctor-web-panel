import React from "react";
import styled from "styled-components";
import { colors } from "../../shared/colors";
import LoginLogo from "./../../Assets/LoginPage/logo.png";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { device } from "../../shared/BreakPoints";
import { useMatch } from "react-router-dom";

function SideBar() {
  let sidebarHistory = null;
  let login = useMatch("/");
  if (login) {
    sidebarHistory = true;
  }
  return (
    <>
      <SideBarContainer props={sidebarHistory}>
        <Logo>
          <img src={LoginLogo} alt="logo" />
        </Logo>
        <DashboardIconDiv>
          <DashboardRoundedIcon />
          <p>Dashboard</p>
        </DashboardIconDiv>
        <div>
          <CalendarMonthRoundedIcon />
          <p>Appointment</p>
        </div>
        <div>
          <GroupsRoundedIcon />
          <p>Patients</p>
        </div>
        <div>
          <EmailRoundedIcon />
          <p>Message</p>
        </div>
        <div>
          <DescriptionRoundedIcon />
          <p>Report</p>
        </div>
        <div>
          <AddCircleOutlineRoundedIcon />
          <p>Book Appointments</p>
        </div>
        <div>
          <SettingsRoundedIcon />
          <p>Settings</p>
        </div>
        <div>
          <StarBorderRoundedIcon />
          <p>Rating</p>
        </div>
        <div>
          <LogoutRoundedIcon />
          <p>Logout</p>
        </div>
      </SideBarContainer>
    </>
  );
}
export default SideBar;
const SideBarContainer = styled.section`
  display: ${(props) => (props.props === true ? "none" : "flex")};

  flex-direction: column;
  width: 20%;
  overflow: hidden;
  position: fixed;
  height: 100vh;
  paddig-bottom: 2rem;
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
        paddig-top: 0;
      }
  div {
    cursor: pointer;
    display: flex;
    height: 4rem;
    display: flex;
    justify-content: space-even;
    gap: 1.3rem;
    align-items: center;
    .css-i4bv87-MuiSvgIcon-root {
      font-size: 1.5rem !important;
    }
    p {
      font-size: 0.9rem;
      font-weight: 500;
      @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
        display: none;
      }
    }
  }
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
    width: 10vw;
    justify-content: center;
    align-items: center;
  }
`;
const Logo = styled.section`
  img {
    width: 100%;
    height: auto;
  }
`;
const DashboardIconDiv = styled.section`
  cursor: pointer;
  display: flex;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-even;
  gap: 1.3rem;
  align-items: center;
  background-color: ${colors.blue};
  text-size: 32px;

  .css-i4bv87-MuiSvgIcon-root {
    font-size: 1.5rem !important;
  }
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
    width: 10vw;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 0.9rem;
    font-weight: 500;
    @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
      display: none;
    }
  }
`;
