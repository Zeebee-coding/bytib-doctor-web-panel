import React, { useState } from "react";
import styled from "styled-components";
import Img1 from "../../Assets/images/AppointmentImages/1.png";
import Img2 from "../../Assets/images/AppointmentImages/2.png";
import Img3 from "../../Assets/images/AppointmentImages/3.png";
import Img4 from "../../Assets/images/AppointmentImages/4.png";
import Img5 from "../../Assets/images/AppointmentImages/5.png";
import Success from "../../Assets/images/Dashboard/group-10.png";
import Fail from "../../Assets/images/Dashboard/group-15.png";
const AppointmentRequest = () => {
  const [toggel, setToggel] = useState("");
  const [imageToggle, setImageToggle] = useState(true);
  // const [tableId, setTableId] = useState("");
  const [appointmentTable, setAppointmentTable] = useState([
    {
      id: 1,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
      date: "May 10 - 9:20 am",
      image: Img1,
    },
    {
      id: 2,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
      date: "May 10 - 9:20 am",
      image: Img2,
    },
    {
      id: 3,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
      date: "May 10 - 9:20 am",
      image: Img3,
    },
    {
      id: 4,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
      date: "May 10 - 9:20 am",
      image: Img4,
    },
    {
      id: 5,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
      date: "May 10 - 9:20 am",
      image: Img5,
    },
  ]);
  const toggelSuccess = () => {
    setToggel("true");
    setImageToggle(false);
  };
  const toggleFalse = () => {
    setToggel("fasle");
    setImageToggle(false);
  };
  return (
    <>
      <AppointmentRequestContainer>
        <HeadContainer>
          <p>{"Appointment Request"}</p>
          <a href="#">{"See All"}</a>
        </HeadContainer>
        {appointmentTable.map((ls) => (
          <>
            <Body key={ls.id}>
              <BodyLeft>
                <img src={ls.image} alt="icon" />
                <NameSection>
                  <ul>
                    <li className="name">Ghadeer Radwan</li>
                    <li className="gender">Femal , 25</li>
                    <li className="date">May 10 - 9:20 am</li>
                  </ul>
                </NameSection>
              </BodyLeft>
              <BodyRight>
                {imageToggle === true ? (
                  <>
                    <img
                      src={Success}
                      onClick={() => {
                        toggelSuccess();
                      }}
                      alt="icon"
                      className="success_icon"
                    />
                    <img
                      onClick={() => {
                        toggleFalse();
                      }}
                      src={Fail}
                      alt="icon"
                      className="fail_icon"
                    />
                  </>
                ) : (
                  <>
                    {toggel === "true" ? (
                      <BodySuccess>{"Accepted"}</BodySuccess>
                    ) : (
                      <BodyFail>{"Rejected"}</BodyFail>
                    )}
                  </>
                )}
              </BodyRight>
            </Body>
          </>
        ))}
      </AppointmentRequestContainer>
    </>
  );
};

export default AppointmentRequest;

const AppointmentRequestContainer = styled.section`
  width: 100%;
  height: 30rem;
  background-color: white;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
const HeadContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    font-size: 23px;
    font-weight: 600;
  }
  a{
    text-decoration: none;
    color: #000;
    font-size: 15px;
    font-weight: 500;
  }
`;
const Body = styled.section`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BodyLeft = styled.section`
  display: flex;
  img {
    height: 75px;
    width: 75px;
    object-fit: cover;
  }
`;
const NameSection = styled.section`
  ul {
    list-style: none;
    margin-top: 3px;
    .name {
      font-size: 14px;
      font-weight: 600;
    }
    .gender {
      font-size: 13px;
      color: #858585;
    }
    .date {
      font-size: 14px;
      color: #000;
      font-weight: 500;
    }
  }
`;
const BodyRight = styled.section`
display:flex;
justify-content: center;
align-items:center;
.success_icon{
    cursor: pointer;
}
.fail_icon{
    cursor: pointer;
}
`;

const BodySuccess = styled.section`
  background-color: #ccf6f8;
  padding: 5px;
  color: #504da8;
  font-size: 19px;
  font-weight: 500;
  border-radius: 10px;
`;
const BodyFail = styled.section`
   background-color: #E91F1F;
    padding: 5px;
    color: white;
    font-size: 19px;
    font-weight: 500;
    border-radius: 10px;
  
  `;
