import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../../Assets/images/Patients/icon_search.png";
import PatientImage from "../../../Assets/images/Patients/patient.png";
import HorizontalIcon from "../../../Assets/images/Patients/horizontalicon.png";
import { useTranslation } from "react-i18next";

const PatientList = () => {
  const { t } = useTranslation(["sidebar"])
  const [patientData, setPatientData] = useState([
    {
      id: "1",
      image: PatientImage,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
    },
    {
      id: "2",
      image: PatientImage,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
    },
    {
      id: "3",
      image: PatientImage,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
    },
    {
      id: "4",
      image: PatientImage,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
    },
    {
      id: "5",
      image: PatientImage,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
    },
    {
      id: "6",
      image: PatientImage,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
    },
    {
      id: "7",
      image: PatientImage,
      name: "Ghadeer Radwan",
      gender: "Femal , 25",
    },
  ]);
  return (
    <PatientListContainer>
      <div className="patientlist__header__container">
        <input placeholder={t("Patient_List")} type="text" />
        <img src={SearchIcon} alt="icon" />
      </div>
      {patientData.map((ls, index) => (
        <>
          <div className="patientlist__body__container">
            <div className="patientlist__body__left__sec">
              <img src={ls.image} alt="img" />
              <div className="p__tag__design">
                <p className="p__name">{ls.name}</p>
                <p className="p__gender">{ls.gender}</p>
              </div>
            </div>
            <div className="patientlist__body__right__sec">
              <img src={HorizontalIcon} alt="img" />
            </div>
          </div>
        </>
      ))}
    </PatientListContainer>
  );
};

export default PatientList;
const PatientListContainer = styled.section`
  width: 100%;
  height: auto;
  background-color: white;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
padding: 10px;
  .patientlist__header__container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .patientlist__header__container > input {
    width: 90%;
    padding: 10px;
    border: none;
    outline: none;
  }

  .patientlist__header__container > input::placeholder {
    font-size: 27px;
    color: #000;
    font-weight: 600;
  }

  .patientlist__body__container {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .patientlist__body__left__sec {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .patientlist__body__left__sec > img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .patientlist__body__right__sec > img {
    cursor: pointer;
    margin-right: 20px;
  }

  .p__tag__design {
    margin-top: 10px;
  }

  .p__tag__design > .p__name {
    margin-bottom: -5px;
    font-size: 19px;
    font-weight: 600;
  }

  .p__tag__design > .p__gender {
    font-size: 14px;
    color: #858585;
  }
`;
