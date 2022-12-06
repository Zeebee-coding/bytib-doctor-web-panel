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
import {NavLink, useMatch } from "react-router-dom";

const SideBar = ({ selected }) => {
  let sidebarHistory = null;
  let login = useMatch("/");
  let signUp = useMatch("/Signup");
  if (login || signUp) {
    sidebarHistory = true;
  }
  return (
  
      <SideBarContainer props={sidebarHistory}>
        <img src={LoginLogo} alt="logo" />
        <NavLink to="/Dashboard" activeClassName="active-link">
          <div className="sidebar-list">
            <DashboardRoundedIcon />
            <p>Dashboard</p>
          </div>
        </NavLink>
        <NavLink to="/Appointment" activeClassName="active-link">
          <div className="sidebar-list">
            <CalendarMonthRoundedIcon />
            <p>Appointment</p>
          </div>
        </NavLink>
        <NavLink to="/Patients" activeClassName="active-link">
          <div className="sidebar-list">
            <GroupsRoundedIcon />
            <p>Patients</p>
          </div>
        </NavLink>
        <NavLink to="/Message" activeClassName="active-link">
          <div className="sidebar-list">
            <EmailRoundedIcon />
            <p>Message</p>
          </div>
        </NavLink>
        <NavLink to="/Report" activeClassName="active-link">
          <div className="sidebar-list">
            <DescriptionRoundedIcon />
            <p>Report</p>
          </div>
        </NavLink>
        <NavLink to="/AppointmentBookingView" activeClassName="active-link">
          <div className="sidebar-list">
            <AddCircleOutlineRoundedIcon />
            <p>Book Appointments</p>
          </div>
        </NavLink>
        <NavLink to="/Setting" activeClassName="active-link">
          <div v>
            <SettingsRoundedIcon />
            <p>Settings</p>
          </div>
        </NavLink>
        <NavLink to="/Rating" activeClassName="active-link">
          <div className="sidebar-list">
            <StarBorderRoundedIcon />
            <p>Rating</p>
          </div>
        </NavLink>
        <NavLink to="/" activeClassName="active-link">
          <div className="sidebar-list">
            <LogoutRoundedIcon />
            <p>Logout</p>
          </div>
        
        </NavLink>
      </SideBarContainer>
  
  );
};
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
    padding-left: 10px;
    cursor: pointer;
    display: flex;
    height: 3.7rem;
    display: flex;
    justify-content: space-even;
    gap: 1.3rem;
    align-items: center;
    .css-i4bv87-MuiSvgIcon-root {
      font-size: 2rem !important;
    color: #333332;

    }
    p {
      font-size: 20px;
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
  img {
    width: 100%;
    height: auto;
  }
  a{
    text-decoration: none;
    color: black;
  }
  a:focus{
    background-color: #70B5D3;
  }
`;

