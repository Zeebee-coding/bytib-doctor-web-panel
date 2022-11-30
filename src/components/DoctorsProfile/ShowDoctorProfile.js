import React, { useState } from "react";
import DoctorImage from "./../../Assets/images/AppointmentImages/docImg.png";
import RatingStar from "react-rating-stars-component";
import Fileicon from "./../../Assets/Icons/fileLogo.png";
import { colors } from "../../shared/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ShowDoctorProfile = () => {
  const [file, setFile] = useState("");
  const options = {
    edit: true,
    color: "rgba(20,20,20,0.1)",
    activeColor: colors.blue,
    value: 4,
    count: 5,
    size: 25,
    isHalf: true,
    onChange: (newValue) => {
      console.log("Example 3: new value is: ${newValue}");
    },
  };
  return (
    <DocProfileCard>
      <DocProfileCardLeftPart>
        <TopSection>
          <img src={DoctorImage} alt="img" />
          <Info>
            <h1>Dr.Mohammed Mohammed</h1>
            <p>Heart surgen</p>
            <div>
            <RatingStar {...options} />
            </div>
            
          </Info>
        </TopSection>
        <InputSection>
          <DocText>
            <span>Name</span>
          </DocText>
          <DocInputField>
            <input
              placeholder="Mubeen Yasin"
              type="text"
              className="large_input"
            />
          </DocInputField>
        </InputSection>
        <InputSection>
          <DocText>
            <span>Email</span>
          </DocText>
          <DocInputField>
            <input
              placeholder="mubeen@gmail.com"
              type="email"
              className="large_input"
            />
          </DocInputField>
        </InputSection>
        <InputSection>
          <DocText>
            <span>Phone Number</span>
          </DocText>
          <DocInputField>
            <input
              placeholder="+92 343 2275634"
              type="number"
              className="small_input"
            />
          </DocInputField>
        </InputSection>
        <InputSection>
          <DocText>
            <span>About me</span>
          </DocText>
          <DocInputField>
            <textarea placeholder="Mubeen Yasin" className="large_input" />
          </DocInputField>
        </InputSection>
        <InputSection>
          <DocText>
            <span>CV</span>
          </DocText>
          <DocInputField>
            <label htmlFor="file">
              douments <img src={Fileicon} alt="" />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </DocInputField>
        </InputSection>
        <DocFooter>
          <Link to="/DoctorEditView">
            <FooterLeft>
              <button>Edit</button>
            </FooterLeft>
          </Link>
          <FooterRight></FooterRight>
        </DocFooter>
      </DocProfileCardLeftPart>
    </DocProfileCard>
  );
};

export default ShowDoctorProfile;

const DocProfileCard = styled.section`
  overflow-x: hidden;
  display: flex;
  overflow-y: hidden;
  min-height: 100vh;
  width: 100%;
  background-color: white;
  margin-top: 10px;
  border: 2px solid red;
`;
const DocProfileCardLeftPart = styled.section`
  width: 100%;
  border: 2px solid yellow;
`;

const TopSection = styled.section`
  display: flex;
  border: 2px solid green;
  flex: 0.5;
  img {
    height: 130px;
    width: 130px;
    border-radius: 50%;
    object-fit: cover;
    margin: 20px;
    border: 2px solid red;
  }
`;
const Info = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex: flex-start;
  width: 100%;
  left: 0;
  border: 2px solid pink;
  
  h1 {
    font-size: clamp(1rem, 0.818rem + 0.91vw, 1.5rem);
    font-weight: 700;
    border: 2px solid red;
    margin:0;
    padding:0;
    width: 45%;
  }
  p {
    font-size: clamp(0.8rem, 0.717rem + 0.81vw, 1.2rem);
    width: 17%;
    font-weight: 600;
    margin:0px;

    color: #858585;
    border: 2px solid red;
  }
  div{
    background-color: none;
  }

`;
const InputSection = styled.section`
  display: flex;
  margin-top: 1rem;
  border: 2px solid purple;
`;
const DocText = styled.section`
  flex: 0.3;
  border: 2px solid red;
  span {
    font-size: 22px;
    color: #858585;
    font-weight: 600;
    margin-left: 50px;
  }
`;
const DocInputField = styled.section`
  flex: 0.1;
  border: 2px solid red;
`;

const DocFooter = styled.section`
    display: flex;
`;
const FooterLeft = styled.section`
    display: flex;
    justify-content: center;
    flex: 0.8;
    border: 2px solid blue;
    button{
        width: 89px;
    border: none;
    background-color: #70B5D3;
    color: white;
    font-weight: 600;
    border-radius: 5px;
    padding: 8px;
    }
`;
const FooterRight = styled.section`
border: 2px solid black;
flex: 0.2;
`;
