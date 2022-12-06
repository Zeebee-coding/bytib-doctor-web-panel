import React,{useEffect,useState} from "react";
import styled from "styled-components";
import IncreaseIcon from "../../Assets/images/Dashboard/increase.png";
import DecreaseIcon from "../../Assets/images/Dashboard/decrease.png";
import QuickStart from "../../shared/QuickStart";
import Chart from "../../shared/Chart";
import AppointmentRequest from "./AppointmentRequest";
import BookingTable from "./BookingComponents/BookingTable";
import RecentPatient from "./RecentPatient";
import { device } from "../../shared/BreakPoints";
import { useTranslation } from "react-i18next";

import db from "../../db";
import {
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";
function DashBoard() {
  const { t } = useTranslation(["sidebar"])

  const [appointment,setappointment] = useState([]);
  useEffect(() => {
    async function fetchAppointmentAPI() {
      const q = query(collection(db, "Appointment"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        setappointment(querySnapshot.docs.map((d) => d.data()));
      });
    }
    fetchAppointmentAPI();
  }, []);
  return (
    <>
      <DashBoardContainer>
        <UpperPart>
          <h2>{t("quick_start")}</h2>
          <UpperPartBody>
            <UpperBodyLeft>
              <QuickStartContainer>
                <QuickStart
                  title={t("Total Booking")}
                  numberValue={appointment.length}
                  colorPending="normal"
                />
                <QuickStart
                  title={t("Pending Approval")}
                  numberValue="120"
                  colorPending="pending"
                />
                <QuickStart
                  title={t("New Clients this Month")}
                  numberValue="89"
                  image={IncreaseIcon}
                  colorPending="normal"
                />
                <QuickStart
                  title={t("Returnig Clients")}
                  numberValue="46%"
                  image={DecreaseIcon}
                  colorPending="normal"
                />
              </QuickStartContainer>
             
              <ChartCont>
                <Chart title={t("Total_Patient")} aspect={1.86 / 1} />
              </ChartCont>
            </UpperBodyLeft>
            <div>
              <AppointmentRequest />
            </div>
          </UpperPartBody>
          <BottomPartBody>
            <BottomBodyLeft>
              <BookingTable />
            </BottomBodyLeft>
            <BottomBodyRight>
              <RecentPatient />
            </BottomBodyRight>
          </BottomPartBody>
        </UpperPart>
      </DashBoardContainer>
    </>
  );
}
export default DashBoard;
const DashBoardContainer = styled.section`
  width: 100%;
  padding: 0.8em;
  display: flex;
  top: 0;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #F0F1F6;
  overflow-x: hidden;
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
    align-items: center;
    justify-content: center;
  }
`;
const UpperPart = styled.section`
  h2 {
    width: 100%;
    display: flex;
    flex: flex-start;
    font-size: 20px;
    color: #354052;
    font-weight: 700;
  }
`;
const UpperPartBody = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
const ChartCont = styled.section`
  width: 100%;
  overflow: hidden;

`;
const UpperBodyLeft = styled.section`
  width: 60%;
  h3 {
    width: 100%;
    display: flex;
    flex: flex-start;
    font-size: 20px;
    color: #354052;
    font-weight: 700;
  }
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
    width: 100%;
  }
`;
const QuickStartContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const BottomPartBody = styled.section`
display: flex;
flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;
const BottomBodyLeft = styled.section`
  width: 60%;
  @media (min-width: ${device.mobileS}) and (max-width: ${device.laptop}) {
    width: 100%;
  }
`;
const BottomBodyRight = styled.section`
margin-top: 10px;
  width: 32%;
`;