import React, { useState } from "react";
import Img1 from "../../../Assets/images/AppointmentImages/1.png";
import Img2 from "../../../Assets/images/Reports/2.png";
import Img3 from "../../../Assets/images/Reports/3.png";
import Img4 from "../../../Assets/images/Reports/4.png";
import Img5 from "../../../Assets/images/Reports/5.png";
import Img6 from "../../../Assets/images/Reports/6.png";
// import Paper from '../../../Assets/Images/Reports/Paper.png'
import HorizontalDots from "../../../Assets/images/Reports/dots-horizontal.png";
import Pagination from "./Pagination";
import styled from "styled-components";
const BookingTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [tableObject, setTableObject] = useState([
    {
      id: 1,
      image: Img1,
      gender: "Female",
      name: "Beanie",
      age: "19",
      date: "11/03/2020",
      Id: "1234",
      detail: "view reports",
      editIcon: HorizontalDots,
    },
    {
      id: 2,
      image: Img2,
      gender: "Female",
      name: "Beanie",
      age: "20",
      date: "11/03/2020",
      Id: "2563",
      detail: "view reports",
      editIcon: HorizontalDots,
    },
    {
      id: 3,
      image: Img3,
      gender: "Female",
      name: "Beanie",
      age: "21",
      date: "11/03/2020",
      Id: "7896",
      detail: "view reports",
      editIcon: HorizontalDots,
    },
    {
      id: 4,
      image: Img4,
      gender: "Female",
      name: "Beanie",
      age: "22",
      date: "11/03/2020",
      Id: "4178",
      detail: "view reports",
      editIcon: HorizontalDots,
    },
    {
      id: 5,
      image: Img5,
      gender: "Female",
      name: "Beanie",
      age: "21",
      date: "11/03/2020",
      Id: "7896",
      detail: "view reports",
      editIcon: HorizontalDots,
    },
    {
      id: 6,
      image: Img6,
      gender: "Female",
      name: "Beanie",
      age: "22",
      date: "11/03/2020",
      Id: "4178",
      detail: "view reports",
      editIcon: HorizontalDots,
    },
  ]);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tableObject.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
                <img src={ls.image} alt="" />
                {ls.name}
              </td>
              <td className="">
                <p className="second_column11 bookings__common_design">
                  {ls.gender}
                </p>
              </td>
              <td className="">
                <p className="second_column bookings__common_design">
                  {ls.age}
                </p>
              </td>
              <td className="">
                <p className="third_column bookings__common_design">
                  {ls.date}
                </p>
              </td>
              <td className="">
                <p className="forth_column bookings__common_design">{ls.id}</p>
              </td>
              <td className="booking__sixth_column">
                <span>{ls.detail}</span>
                <img
                  className="booking__sixth_column_img"
                  src={ls.editIcon}
                  alt=""
                />
              </td>
            </tr>
          ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={tableObject.length}
            paginate={paginate}
          />
        </tbody>
      </table>
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
      background-color: #f2f2f2;
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
