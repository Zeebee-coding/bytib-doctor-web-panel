import React, { useState } from "react";
import Img1 from "../../Assets/images/AppointmentImages/1.png";
import Img2 from "../../Assets/images/AppointmentImages/2.png";
import Img3 from "../../Assets/images/AppointmentImages/3.png";
import Img4 from "../../Assets/images/AppointmentImages/4.png";
import HorizontalDots from "../../Assets/images/AppointmentImages/horizontal_dots.png";
import styled from "styled-components";

const RecentPatient = () => {
  const [appointmentTable, setAppointmentTable] = useState([
    {
      id: 1,
      name: "Ghadeer Radwan",
      gender: "Female , 25",
      date: "May 10 - 9:20 am",
      image: Img1,
    },
    {
      id: 2,
      name: "Ghadeer Radwan",
      gender: "Female , 25",
      date: "May 10 - 9:20 am",
      image: Img2,
    },
    {
      id: 3,
      name: "Ghadeer Radwan",
      gender: "Female , 25",
      date: "May 10 - 9:20 am",
      image: Img3,
    },
    {
      id: 4,
      name: "Ghadeer Radwan",
      gender: "Female , 25",
      date: "May 10 - 9:20 am",
      image: Img4,
    },
  ]);

  return (
    <Recent_Patient>
      <div className="recent__patient__header">
        <p>{"Recent Patients"}</p>
        <a href="#">{"See All"}</a>
      </div>
      {appointmentTable.map((ls, index) => (
        <>
          <Recent_Patient_Body>
            <div className="recent__patient__left__container">
              <img src={ls.image} alt="icon" />
              <div className="left__container">
                <p className="p__tag1">{ls.name}</p>
                <p className="p__tag2">
                  {ls.gender},{ls.date}
                </p>
              </div>
            </div>
            <div className="recent__patient__right__container">
              <img src={HorizontalDots} alt="icon" />
            </div>
          </Recent_Patient_Body>
        </>
      ))}
    </Recent_Patient>
  );
};

export default RecentPatient;
const Recent_Patient = styled.section`
  width: 100%;
  height: 460px;
  background-color: white;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 0 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  .recent__patient__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 20px;
      font-weight: 600;
    }
    a {
      text-decoration: none;
      color: #000;
      font-size: 14px;
      font-weight: 600;
    }
    a:hover {
      color: #000;
    }
  }
`;
const Recent_Patient_Body = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .recent__patient__left__container {
    display: flex;
  }

  .recent__patient__left__container > img {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    object-fit: cover;
  }

  .left__container {
    display: flex;
    flex-direction: column;
    margin: 8px;
  }

  .left__container > .p__tag1 {
    font-size: 14px;
    font-weight: 600;
  }

  .left__container > .p__tag2 {
    font-size: 11px;
    color: #858585;
  }

  .recent__patient__right__container > img {
    margin: 40px 10px 0px 0px;
    cursor: pointer;
  }
`;
