import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Success from "../../Assets/images/Dashboard/group-10.png";
import Fail from "../../Assets/images/Dashboard/group-15.png";
import db from "../../db";
import { onSnapshot, collection, query } from "firebase/firestore";
import { Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";

const AppointmentTable = () => {
  const [toggel, setToggel] = useState("");
  const [imageToggle, setImageToggle] = useState(true);
  const { t } = useTranslation(["sidebar"])
  const [appointmentview, setappointmentview] = useState([]);
  const toggelSuccess = () => {
    setToggel("true");
    setImageToggle(false);
  };
  const toggleFalse = () => {
    setToggel("fasle");
    setImageToggle(false);
  };
  useEffect(() => {
    async function fetchAppointmentAPI() {
      const q = query(collection(db, "Appointment"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        setappointmentview(querySnapshot.docs.map((d) => d.data()));
      });
    }
    fetchAppointmentAPI();
  }, []);
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th scope="col">
              <span className="table_span">{t("patient")}</span>
            </th>
            <th scope="col">
              <span className="table_span">{t("Id")}</span>
            </th>
            <th scope="col">
              <span className="table_span">{t("Date")}</span>
            </th>
            <th scope="col">
              <span className="table_span">{("Phone")}</span>
            </th>
            <th scope="col">
              <span className="table_span">{t("Email")}</span>
            </th>
            <th scope="col">
              <span className="table_span">{t("State")}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {appointmentview.map((ls) => (
            <tr className="appointment_table_body">
              <td className="first_column">
                <Avatar/>
                {ls.PatientName}
              </td>
              <td>
                <p className="app_table_p">{ls.Id}</p>
              </td>
              <td>
                <p className="app_table_p">{ls.Date}</p>
              </td>
              <td>
                <p className="app_table_p">{ls.PatientPhoneNumber}</p>
              </td>
              <td>
                <p className="app_table_p">{ls.PatientEmail}</p>
              </td>
              <td className="success_fail">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default AppointmentTable;
const TableContainer = styled.section`
 .first_column {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
  }
  display: flex;
  padding: 40px;
  table {
    width: 100%;
    border-spacing: 0;
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    thead {
     
      tr {
        width: 100%;
       
        }
      }
      tr th {
        padding: 30px 0px 20px 15px;
        font-size: 14px;
        background-color: #103641;
        color: white;
      }
    }
  }
  .table_span {
    margin: 0px 0px 10px 0px;
  }

  .patient_img {
    height: 50px;
    width: 50px;
    margin: 15px 15px 10px 12px;
    border-radius: 50%;
    object-fit: cover;
  }

  .app_table_p {
    margin: 25px 15px 10px 15px;
  }



  .appointment_table {
    width: 100%;
    border-spacing: 20px;
  }

  .empty_table {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
  }

  .success_fail {
    display:flex;
justify-content: center;
align-items:center;
.success_icon{
    cursor: pointer;
}
.fail_icon{
    cursor: pointer;
}
  }
`;


const BodySuccess = styled.section`
  background-color: #CCF6F8;
  padding: 5px;
  color: #504DA8;
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