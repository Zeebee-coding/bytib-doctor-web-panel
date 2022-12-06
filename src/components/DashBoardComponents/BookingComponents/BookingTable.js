import React, { useState, useEffect } from "react";
import HorizontalDots from "../../../Assets/images/Reports/dots-horizontal.png";
import Pagination from "../../../shared/Pagination";
import styled from "styled-components";
import db from "../../../db";
// import Icon from "../../../dp.jpg"
import {
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";
const BookingTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [appointment, setappointment] = useState([]);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = appointment.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    async function fetchBookingtableAPI() {
      const q = query(collection(db, "Appointment"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        setappointment(querySnapshot.docs.map((d) => d.data()));
      });
    }
    fetchBookingtableAPI();
  }, []);
  return (
    <BookingContainer>
      <table>
        <thead>
          <tr>
            <th scope="col">{"Patient"}</th>
            <th scope="col">{"Gender"}</th>
            <th scope="col">{"Age"}</th>
            <th scope="col">{"Appointment Date"}</th>
            <th scope="col">{"Id"}</th>
            <th scope="col" className="emptyData"></th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((ls) => (
            <tr className="">
              <td className="booking__first_column">
                {/* <img src={Icon} alt="" /> */}
                {ls.PatientName}
              </td>
              <td className="">
                <p className="second_column11 bookings__common_design">
                  Male
                </p>
              </td>
              <td className="">
                <p className="second_column bookings__common_design">
                  {ls.PatientAge}
                </p>
              </td>
              <td className="">
                <p className="third_column bookings__common_design">
                  {ls.Date}
                </p>
              </td>
              <td className="">
                <p className="forth_column bookings__common_design">{ls.id}</p>
              </td>
              <td className="booking__sixth_column">
                <span>{ls.detail}</span>
                <img
                  className="booking__sixth_column_img"
                  src={HorizontalDots}
                  alt=""
                />
              </td>
            </tr>
          ))}
        
        </tbody>
       
      </table>
      <hr></hr>

      <Pagination
            postsPerPage={postsPerPage}
            totalPosts={appointment.length}
            paginate={paginate}
          />
    </BookingContainer>
  );
};
export default BookingTable;
const BookingContainer = styled.section`
  background-color: white;
  margin-top: 10px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  border-radius: 10px;
  table {
    width: 100%;
    border-spacing: 0;
    tr:nth-child(even) {
      background-color: #F2F2F2;
    }
    thead {
      tr {
        width: 100%;
      }
      tr th {
        padding: 20px 0px 20px 15px;
        font-size: 14px;
        background-color: #103641;
        color: white;
      }
    }
  }
  tbody {
    .booking__first_column {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 30px;
        width: 30px;
        margin: 20px 15px 10px 12px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .bookings__common_design {
      margin: 25px 15px 10px 12px;
      font-size: 13px;
    }
    .booking__sixth_column {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
    .booking__sixth_column_img {
      margin: 30px 15px 30px 20px;
      cursor: pointer;
      height: 20px;
    }
  }
`;