import React, { useState } from "react";
import { colors } from "../../shared/colors";
import styled from "styled-components";
import DoctorImg from "./../../Assets/LoginPage/female-doctor.png";
import LoginLogo from "./../../Assets/LoginPage/logo.png";
import Input from "../../BusinessLogistics/InputFields/Input";
import LoginButton from "../../BusinessLogistics/Buttons/SimpleButton/SimpleButton";
import SignupButton from "../../BusinessLogistics/Buttons/HoverButton/HoverButton";
import { Link } from "react-router-dom";
import { device } from "../../shared/BreakPoints";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remind, setRemind] = useState(false);

  console.log(remind);
  return (
    <StyledContainer>
      <Left_Login_part>
        <LogoPart>
          <img src={LoginLogo} alt="logo" />
          <p>Welcome back! Please login to your account.</p>
        </LogoPart>

        <Input_Fields>
          <Input
            placeholder="Username"
            width="40vmax"
            height="3vmax"
            margin="4vmax"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            placeholder="Password"
            type="password"
            width="40vmax"
            height="3vmax"
            margin="1vmax"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Input_Fields>
        <Login_Check_Btn>
          <Login_Check_Box>
            <input
              onChange={(e) => {
                setRemind(true);
              }}
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label for="flexCheckDefault">Remember Me</label>
          </Login_Check_Box>

          <a href="/">Forgot Password?</a>
        </Login_Check_Btn>
        <Buttons>
          <div>
            {remind === true ? (
              <Link to="/Dashboard">
                <LoginButton
                  width="15vmax"
                  height="4vmax"
                  margin="0vmax"
                  text="Login"
                  // onClick={loginFunction}
                />
              </Link>
            ) : (
              <LoginButton
                width="15vmax"
                height="4vmax"
                margin="0vmax"
                text="Login"
                // onClick={loginFunction}
                disable="false"
              />
            )}
          </div>
          <div>
            <Link to="/Signup">
              <SignupButton
                width="15vmax"
                height="4vmax"
                margin="0vmax"
                text="Sign Up"
              />
            </Link>
          </div>
        </Buttons>
      </Left_Login_part>
      <Right_Login_part>
        <div>
          <img className="" src={DoctorImg} alt="" />
        </div>
      </Right_Login_part>
    </StyledContainer>
  );
}

export default LoginPage;

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
  max-height: 100vh;
  width: 100%;
`;

const Left_Login_part = styled.section`
  flex: 6;
  @media (min-width: ${device.mobileS}) and (max-width: ${device.tabletL}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const LogoPart = styled.section`
  max-height: 35vh;
  max-width: 35vmax;
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
  }
`;
const Input_Fields = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  Input {
    width: 50%;
  }
`;
const Login_Check_Btn = styled.section`
  display: flex;
  justify-content: space-around;
  a {
    color: ${colors.black};
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5vmax;
    margin-right: 5vmax;
  }
  a:hover {
    color: ${colors.gray};
  }
`;
const Login_Check_Box = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    font-size: 1.5vmax;
  }
`;
const Buttons = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 35px;
  div {
    outline: none;
    box-shadow: none;
  }
`;
const Right_Login_part = styled.div`
  flex: 6;
  @media (min-width: ${device.mobileS}) and (max-width: ${device.tabletL}) {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
